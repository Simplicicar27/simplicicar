"""
Scanne le catalogue véhicules de l'agence Simplicicar Evreux sur SaysPilot360
et écrit le résultat dans docs/data.json (consommé par la page TV statique).

Variables d'environnement requises :
  SIMPLICICAR_EMAIL
  SIMPLICICAR_PASSWORD

En cas d'échec (login impossible, page inattendue, 0 véhicule trouvé),
le script s'arrête en erreur SANS écraser le data.json existant, pour que
la télé continue d'afficher la dernière version valide du catalogue.
"""

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

LOGIN_URL = "https://sayspilot360.fr/fr/simplicicar/"
VEHICLES_URL = "https://sayspilot360.fr/fr/simplicicar/vehicles"
AGENCY_ID = 23  # id de l'agence Simplicicar Evreux dans SaysPilot360

OUTPUT_PATH = Path(__file__).resolve().parent.parent / "docs" / "data.json"

FUEL_LABEL = {"Gazole": "D", "Essence": "E"}
TRANS_LABEL = {"Mecanique": "M", "Automatique": "A"}
STATUS_LABEL = {
    "Mandat / En vente": "V",
    "Réservé": "R",
    "Mandat dépassé": "D",
    "Vendu / Livré": "L",
}
# Script exécuté dans la page pour extraire les données de chaque carte véhicule.
# Reproduit fidèlement la structure DOM observée sur /vehicles (Nuxt + Tailwind).
EXTRACTION_JS = """
() => {
  const cards = document.querySelectorAll(
    '.grid.grid-cols-1.md\\\\:grid-cols-\\\\[auto_1fr\\\\].items-start.gap-3.cursor-pointer.group.rounded-lg'
  );
  const results = [];
  cards.forEach(card => {
    const photoImg = card.querySelector('img.h-24, img.object-cover.col-span-2');
    const photo = photoImg ? photoImg.src : null;

    const infoCol = card.querySelector('.col-start-1');
    if (!infoCol) return;
    const c = infoCol.children;
    const brandModel = c[0] ? c[0].textContent.trim() : '';
    const variant = c[1] ? c[1].textContent.trim() : '';
    const metaLine = c[2] ? c[2].textContent.replace(/\\s+/g, ' ').trim() : '';
    const refLine = c[3] ? c[3].textContent.replace(/\\s+/g, ' ').trim() : '';

    const rightCol = card.querySelectorAll(
      '.grid.grid-cols-\\\\[1fr_auto\\\\].gap-x-3.min-w-0'
    )[0]?.children[1];
    const price = rightCol ? (rightCol.querySelector('span.text-lg')?.textContent.trim() || null) : null;
    const status = rightCol ? (rightCol.querySelector('span.rounded-full')?.textContent.trim() || null) : null;

    const metaParts = metaLine.split(' · ');
    const advisor = metaParts[0] || null;
    const yearKm = metaParts[1] || '';
    const [year, kmRaw] = yearKm.split(',').map(s => s.trim());
    const km = kmRaw ? kmRaw.replace(' km', '') : null;
    const fuelTransPower = metaParts[2] || '';
    const ftpParts = fuelTransPower.split(',').map(s => s.trim());
    const fuel = ftpParts[0] || null;
    const transmission = ftpParts[1] || null;
    const power = ftpParts[2] ? ftpParts[2].replace(' ch', '') : null;
    const plate = metaParts[3] || null;

    const refMatch = refLine.match(/Réf\\.\\s*(\\d+)/);
    const ref = refMatch ? refMatch[1] : null;
    const daysMatch = refLine.match(/(\\d+)\\s*jours restants/);
    const daysLeft = daysMatch ? parseInt(daysMatch[1]) : null;

    let photoFile = null;
    if (photo && photo.includes('api.sayspilot360.fr')) {
      const parts = photo.split('/');
      photoFile = parts[parts.length - 1];
    }

    results.push({
      ref, brand_model: brandModel, variant, advisor, year, km,
      fuel, transmission, power, plate, daysLeft, price, status, photoFile
    });
  });
  return results;
}
"""


def normalize(raw):
    fuel = FUEL_LABEL.get(raw["fuel"], raw["fuel"])
    trans = TRANS_LABEL.get(raw["transmission"], raw["transmission"])
    status = STATUS_LABEL.get(raw["status"], "D")
    price = None
    if raw["price"]:
        digits = "".join(ch for ch in raw["price"] if ch.isdigit())
        price = int(digits) if digits else None

    return {
        "ref": raw["ref"],
        "brand_model": raw["brand_model"],
        "variant": raw["variant"],
        "advisor": raw["advisor"],
        "year": int(raw["year"]) if raw["year"] else None,
        "km": int(raw["km"]) if raw["km"] else None,
        "fuel": fuel,
        "trans": trans,
        "power": int(raw["power"]) if raw["power"] else None,
        "plate": raw["plate"],
        "daysLeft": raw["daysLeft"],
        "price": price,
        "status": status,
        "photo": (
            f"https://api.sayspilot360.fr/storage/agencies/{AGENCY_ID}/vehicles/"
            f"{raw['ref']}/photos/300/{raw['photoFile']}"
            if raw.get("photoFile") else None
        ),
    }


def run():
    email = os.environ.get("SIMPLICICAR_EMAIL")
    password = os.environ.get("SIMPLICICAR_PASSWORD")
    if not email or not password:
        print("ERREUR: SIMPLICICAR_EMAIL / SIMPLICICAR_PASSWORD manquants.", file=sys.stderr)
        sys.exit(1)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        print("Connexion au portail...")
        page.goto(LOGIN_URL, wait_until="networkidle")
        page.fill('input[placeholder="Email"]', email)
        page.fill('input[placeholder="Mot de passe"]', password)
        page.click('button:has-text("Entrer")')

        try:
            page.wait_for_url("**/dashboard/**", timeout=15000)
        except PlaywrightTimeoutError:
            browser.close()
            print("ERREUR: échec de connexion (identifiants invalides ou page modifiée).", file=sys.stderr)
            sys.exit(1)

        print("Connecté. Ouverture de la page véhicules...")
        page.goto(VEHICLES_URL, wait_until="networkidle")
        page.wait_for_timeout(1500)  # laisser le temps au rendu client de finir

        raw_vehicles = page.evaluate(EXTRACTION_JS)
        browser.close()

    if not raw_vehicles:
        print("ERREUR: 0 véhicule extrait. La structure de la page a peut-être changé.", file=sys.stderr)
        sys.exit(1)

    vehicles = [normalize(v) for v in raw_vehicles if v.get("ref")]

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "agency": "Simplicicar Evreux",
        "count": len(vehicles),
        "vehicles": vehicles,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK: {len(vehicles)} véhicules écrits dans {OUTPUT_PATH}")


if __name__ == "__main__":
    run()
