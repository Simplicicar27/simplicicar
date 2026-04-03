# 🚗 Simplicicar Display

Page vitrine pour affichage sur écran en agence.  
Rotation automatique des fiches véhicules, navigation par miniatures.

---

## 📁 Structure du projet

```
simplicicar-display/
│
├── index.html              ← Page principale (ouvrir dans le navigateur)
│
├── css/
│   └── style.css           ← Tout le style (couleurs, mise en page)
│
├── js/
│   └── app.js              ← Logique : rotation, slides, horloge
│
├── data/
│   └── voitures.js         ← 👉 VOS DONNÉES VÉHICULES (à modifier ici)
│
└── images/
    └── voitures/           ← 👉 DÉPOSEZ VOS PHOTOS ICI
        ├── peugeot-3008.jpg
        ├── renault-captur.jpg
        └── ...
```

---

## ▶️ Lancer le projet

### Option 1 — Simple (sans serveur)
Double-cliquez sur `index.html` → s'ouvre dans Chrome/Firefox.  
⚠️ Les photos **locales** peuvent ne pas se charger.  
→ Utilisez l'option 2 pour éviter ce problème.

### Option 2 — VS Code + Live Server (recommandé)
1. Ouvrez le dossier dans **VS Code**
2. Installez l'extension **Live Server** (icône Extensions → chercher "Live Server")
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. La page s'ouvre dans votre navigateur avec rechargement automatique ✅

---

## ✏️ Ajouter / modifier une voiture

Ouvrez `data/voitures.js` et éditez le tableau `CARS`.

### Exemple d'une fiche :
```js
{
  brand:    "Peugeot",          // Marque
  model:    "3008",             // Modèle
  year:     2021,               // Année
  version:  "1.5 BlueHDi 130ch GT Line S&S EAT8",  // Finition complète
  km:       "38 500 km",        // Kilométrage
  price:    "24 990 €",         // Prix TTC affiché
  energy:   "Diesel",           // Diesel | Essence | Hybride | Électrique
  power:    "130 ch",           // Puissance
  gearbox:  "Automatique",      // Automatique | Manuelle | CVT
  color:    "Gris Platinium",   // Couleur
  dpe:      "B",                // Classe DPE : A B C D E
  garantie: "12 mois",          // Durée de garantie
  ref:      "SC-0421",          // Référence interne

  // 👇 Photo locale (recommandé)
  img: "images/voitures/peugeot-3008.jpg",

  // 👇 OU photo depuis le web (si vous n'avez pas la photo en local)
  // img: "https://www.monsite.com/photos/peugeot-3008.jpg",

  features: ["GPS", "Caméra 360°", "Sièges chauffants", "Toit pano"],
  hi:       ["GPS", "Toit pano"],  // Ces équipements s'affichent en rose
}
```

---

## 🖼️ Ajouter des photos

1. Copiez vos photos dans `images/voitures/`
2. Format recommandé : **JPG**, taille **1200×800 px** minimum
3. Dans `voitures.js`, mettez le chemin : `"images/voitures/nom-du-fichier.jpg"`

---

## ⚙️ Réglages

Dans `js/app.js`, ligne 10 :
```js
const CONFIG = {
  durationMs: 8000,  // ← Changer ici : 8000 = 8 secondes par voiture
};
```

---

## 🖥️ Mise en production (sur écran en agence)

1. Ouvrez Chrome en **plein écran** : touche `F11`
2. Désactivez la mise en veille de l'écran dans Windows :
   Paramètres → Alimentation → "Ne jamais" mettre en veille
3. Optionnel : démarrage automatique avec Windows via le Planificateur de tâches

---

## 🎨 Modifier les couleurs

Dans `css/style.css`, lignes 1-10 :
```css
:root {
  --pink: #E8005A;   ← Couleur principale Simplicicar
  --white: #FFFFFF;
  ...
}
```
