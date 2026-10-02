# Site web Bersi

Site vitrine de Bersi, bureau d'études réseaux et systèmes d'information.
Site statique en HTML, CSS et JavaScript, sans framework ni base de données.

## Structure

```
bersi-site/
├── index.html                 Page d'accueil
├── 404.html                   Page « introuvable »
├── pages/
│   ├── services.html          Liste des services
│   ├── solutions.html         Liste des solutions logicielles
│   ├── partenaires.html
│   ├── a-propos.html
│   ├── contact.html           Formulaire (ouvre la messagerie du visiteur)
│   ├── services/              Une page par service (9)
│   └── solutions/             Une page par solution (4)
└── assets/
    ├── css/style.css          Toutes les couleurs, polices et mises en page
    ├── js/main.js             Mode sombre, menu mobile, formulaire
    ├── icons/sprite.svg       Jeu d'icônes utilisé sur le site
    └── img/
        ├── logo-bersi.png         Logo bleu (fond clair)
        ├── logo-bersi-blanc.png   Logo blanc (fond sombre et pied de page)
        ├── favicon.svg
        └── illustrations/         Les 15 illustrations en SVG
```

## Voir le site

Ouvrez `index.html` dans un navigateur. Aucune installation n'est nécessaire.

## Mettre en ligne

Envoyez tout le contenu du dossier `bersi-site` à la racine de votre hébergement (FTP, cPanel, Netlify, GitHub Pages…), en gardant les dossiers tels quels. Toutes les adresses sont relatives : le site fonctionne aussi dans un sous-dossier.

## Modifier le contenu

- **Coordonnées** : les numéros et l'e-mail apparaissent dans l'en-tête, le bandeau bas, le pied de page et la page contact de chaque fichier HTML. Utilisez « Rechercher et remplacer dans tous les fichiers » de votre éditeur (par exemple VS Code) sur `069626540`, `06 962 65 40` ou `bersi-cg@outlook.fr`.
- **Couleurs** : en haut de `assets/css/style.css`, dans `:root` (mode clair) et `[data-theme="dark"]` (mode sombre).
- **Textes** : directement dans les fichiers HTML de `pages/`.
- **Logos des partenaires** : dans `pages/partenaires.html`, remplacez `<span class="mono …">SM</span>` par `<img src="../assets/img/partenaires/smib.png" alt="SMIB">` après avoir placé l'image dans ce dossier.

## Bon à savoir

- Le mode sombre suit le réglage du téléphone ou de l'ordinateur du visiteur. Le bouton lune/soleil permet de le changer, et le choix est mémorisé.
- Les illustrations sont intégrées directement dans les pages pour s'adapter au mode sombre. Les fichiers de `assets/img/illustrations/` en sont une copie en couleurs claires, réutilisable ailleurs (réseaux sociaux, présentations…).
- Le formulaire de contact ne nécessite pas de serveur : il prépare un e-mail dans la messagerie du visiteur. Pour recevoir les demandes directement, il peut être relié plus tard à un service comme Formspree ou à un script PHP.
