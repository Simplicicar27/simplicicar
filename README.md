# Catalogue TV — Simplicicar Évreux

Page d'affichage dynamique du stock véhicules pour la télé Edenwood de l'agence, mise à jour automatiquement chaque nuit à partir du portail SaysPilot360.

## Comment ça marche

Chaque nuit (01h UTC) une Action GitHub se connecte au portail avec les identifiants stockés en secret, extrait la liste complète des véhicules, et écrit le résultat dans docs/data.json. Elle commit et push ce fichier s'il a changé.

GitHub Pages sert ensuite le contenu du dossier docs/ en continu.

La page docs/index.html, affichée sur la télé, relit data.json toutes les 5 minutes, fait défiler automatiquement des pages de 8 véhicules toutes les 12 secondes, et se recharge intégralement chaque jour à 4h du matin.

## Mise en place

Étape 1 — Ajouter les secrets : dans Settings puis Secrets and variables puis Actions puis New repository secret, créer SIMPLICICAR_EMAIL avec votre email de connexion au portail, et SIMPLICICAR_PASSWORD avec votre mot de passe.

Étape 2 — Activer GitHub Pages : dans Settings puis Pages, choisir Source = Deploy from a branch, Branch = main, dossier /docs.

Étape 3 — Tester le scraper manuellement : dans l'onglet Actions, sélectionner "Scan nocturne du catalogue Simplicicar" puis Run workflow.

Étape 4 — Ouvrir l'URL sur la télé Edenwood et laisser la page ouverte, elle se rafraîchit toute seule.

## Fichiers du dépôt

.github/workflows/nightly-scan.yml planifie et exécute le scan chaque nuit.

scraper/scrape.py se connecte au portail et extrait les données avec Playwright.

scraper/requirements.txt liste les dépendances Python du scraper.

docs/index.html est la page affichée sur la télé.

docs/data.json contient les données du catalogue, régénérées chaque nuit.

## Sécurité des identifiants

Le scraper ne stocke jamais vos identifiants dans le dépôt : ils sont lus uniquement depuis les variables d'environnement injectées par GitHub Actions à partir des secrets chiffrés.

## En cas de panne du scan nocturne

Si le portail change de structure ou si la connexion échoue, le script s'arrête en erreur sans écraser docs/data.json — la télé continue d'afficher la dernière version valide du catalogue.
