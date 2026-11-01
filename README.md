# Pauline Renard – Éducation canine à Lyon

Site statique construit avec [Astro](https://astro.build), déployé sur Cloudflare Workers (assets statiques).

## Commandes

```sh
npm install        # installer les dépendances
npm run dev        # serveur local sur http://localhost:4321
npm run build      # générer le site dans dist/
npm run deploy     # build + déploiement Cloudflare
```

## Modifier le contenu

- **Tarifs, formats, accompagnements, FAQ, coordonnées** : `src/data/site.ts`
- **Articles de conseils** : un fichier Markdown par article dans `src/content/conseils/`
- **Photos** : `src/assets/photos/` (optimisées automatiquement en WebP au build)
