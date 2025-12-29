# Portfolio Professionnel - Constitution Technique

## Core Principles

### I. Standards Web et Accessibilité (NON-NÉGOCIABLE)
- **HTML5 sémantique obligatoire** : Utilisation appropriée des balises sémantiques (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- **Accessibilité WCAG 2.1 niveau AA minimum** :
  - Tous les éléments interactifs doivent être accessibles au clavier
  - Attributs ARIA obligatoires quand nécessaires
  - Contraste de couleurs ≥ 4.5:1 pour le texte normal, ≥ 3:1 pour le texte large
  - Alternative textuelle pour toutes les images (attribut `alt`)
  - Structure de titres hiérarchique (`h1` → `h6`)
- **Validation W3C** : Le code HTML/CSS doit passer la validation W3C sans erreurs critiques
- **Responsive Design obligatoire** : Mobile-first, points de rupture standardisés (320px, 768px, 1024px, 1440px+)

### II. Performance et Optimisation
- **Budget de performance strict** :
  - First Contentful Paint (FCP) < 1.8s
  - Largest Contentful Paint (LCP) < 2.5s
  - Cumulative Layout Shift (CLS) < 0.1
  - Time to Interactive (TTI) < 3.8s
- **Optimisation des ressources** :
  - Images : formats WebP avec fallback, lazy loading obligatoire
  - CSS : minification en production, critical CSS inline
  - JavaScript : minification, defer/async appropriés, code splitting si nécessaire
  - Compression : Gzip/Brotli pour tous les assets textuels
- **Taille maximale** : Page d'accueil < 1MB, pages secondaires < 500KB (chargement initial)

### III. Maintenabilité du Code
- **Architecture modulaire** :
  - Séparation claire : structure (HTML), présentation (CSS), comportement (JS)
  - Composants réutilisables, pas de duplication de code
  - Fichiers organisés par fonctionnalité ou type (assets/, css/, js/, images/)
- **Convention de nommage cohérente** :
  - CSS : BEM (Block Element Modifier) ou méthodologie similaire
  - Fichiers : kebab-case pour tous les fichiers (ex: `contact-form.js`)
  - Variables CSS : `--prefix-property-variant` (ex: `--color-primary-dark`)
- **Documentation obligatoire** :
  - README.md avec instructions de développement et déploiement
  - Commentaires pour logique complexe uniquement
  - Documentation des variables CSS custom properties
  - Historique des versions et changelog

### IV. Qualité du Code (NON-NÉGOCIABLE)
- **Validation et linting** :
  - HTML : validation W3C
  - CSS : linting avec Stylelint ou équivalent
  - JavaScript : ESLint avec configuration stricte
  - Pas d'erreurs de console en production
- **Tests avant déploiement** :
  - Tests manuels cross-browser (Chrome, Firefox, Safari, Edge)
  - Tests responsive sur devices réels ou émulateurs
  - Tests de performance (Lighthouse score ≥ 90)
  - Tests d'accessibilité (axe DevTools, WAVE)
- **Contrôle de version** :
  - Commits atomiques avec messages descriptifs
  - Branches pour fonctionnalités (`feature/`) et corrections (`fix/`)
  - Pull requests avec review avant merge vers main

### V. Sécurité et Confidentialité
- **Protection des données** :
  - Pas de données sensibles dans le code source ou commits
  - Pas de tracking sans consentement explicite (RGPD)
  - Politique de confidentialité si collecte de données
- **Headers de sécurité** (via GitHub Pages ou configuration) :
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY ou SAMEORIGIN
  - Content-Security-Policy restrictive
  - Referrer-Policy: strict-origin-when-cross-origin
- **Dépendances externes** :
  - Minimiser les dépendances tierces
  - Vérification de l'intégrité (SRI - Subresource Integrity) pour CDN
  - Audit régulier des dépendances
  - Préférence pour le code vanille vs frameworks lourds
- **HTTPS obligatoire** : Toutes les ressources en HTTPS (GitHub Pages le fournit par défaut)

## Standards Techniques

### Technologies Autorisées
- **HTML5** : Dernière version stable, DOCTYPE strict
- **CSS3** : Modern CSS avec custom properties, Grid, Flexbox
  - Préprocesseurs autorisés : Sass/SCSS, PostCSS
  - Frameworks CSS légers acceptés si justifiés (pas de Bootstrap pour un portfolio simple)
- **JavaScript** : ES6+ moderne
  - Vanilla JS privilégié pour fonctionnalités simples
  - Frameworks autorisés si complexité justifiée (React, Vue, Svelte)
  - TypeScript recommandé pour projets JS complexes
- **Build Tools** : npm/yarn, Vite, Webpack, Parcel (si nécessaire)
- **Versionning** : Git obligatoire

### Structure de Projet Standard
```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css (ou main.scss)
│   │   ├── variables.css
│   │   └── components/
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   ├── images/
│   │   ├── optimized/
│   │   └── icons/
│   └── fonts/
├── pages/ (pages secondaires)
├── docs/ (documentation)
├── .gitignore
├── README.md
└── package.json (si build process)
```

### Normes de Compatibilité
- **Navigateurs supportés** : 2 dernières versions stables de Chrome, Firefox, Safari, Edge
- **Support mobile** : iOS Safari, Chrome Android (dernières versions)
- **Dégradation gracieuse** : Fonctionnalités de base accessibles sans JavaScript
- **Progressive Enhancement** : Amélioration progressive des fonctionnalités

## Workflow de Développement

### Processus de Développement
1. **Planning** : Définir fonctionnalité/modification dans issues/tasks
2. **Développement** : Branche dédiée, commits fréquents
3. **Testing** : Tests locaux complets (performance, accessibilité, responsive)
4. **Review** : Auto-review via checklist avant PR
5. **Validation** : Tests finaux en environnement de staging
6. **Déploiement** : Merge vers main → déploiement automatique GitHub Pages

### Checklist Pre-Déploiement (NON-NÉGOCIABLE)
- [ ] Validation HTML W3C (0 erreurs)
- [ ] Validation CSS (0 erreurs critiques)
- [ ] Linting JavaScript (0 erreurs)
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Tests responsive (mobile, tablet, desktop)
- [ ] Tests cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Tests accessibilité (axe DevTools, navigation clavier)
- [ ] Images optimisées (WebP + fallback)
- [ ] Pas d'erreurs console
- [ ] Meta tags SEO présents et corrects
- [ ] Fichiers minifiés en production
- [ ] Liens internes fonctionnels
- [ ] Formulaires validés et testés

### Optimisation Continue
- **Audit mensuel** : Performance, accessibilité, sécurité
- **Mise à jour des dépendances** : Revue trimestrielle
- **Analytics** : Monitoring optionnel avec respect RGPD
- **Feedback** : Amélioration basée sur retours utilisateurs

## Contenu et Design

### Principes de Design
- **Cohérence visuelle** : Palette de couleurs limitée (3-5 couleurs principales)
- **Typographie** : Maximum 2-3 familles de polices
- **Espacement** : Système d'espacement cohérent (multiples de 4px ou 8px)
- **Hiérarchie visuelle** : Claire et intentionnelle
- **Accessibilité visuelle** : Pas de dépendance unique à la couleur pour l'information

### Contenu Requis
- **Page d'accueil** : Présentation concise, appel à l'action clair
- **À propos** : Parcours professionnel, compétences
- **Projets** : Portfolio avec descriptions, technologies, liens
- **Contact** : Moyens de contact professionnels
- **Mentions légales** : Si hébergement en France/Europe
- **SEO** : Meta descriptions, Open Graph, Twitter Cards

## Gouvernance

### Autorité de la Constitution
- Cette constitution **prime sur toutes les autres pratiques et préférences personnelles**
- Toute modification du code doit être conforme aux principes énoncés
- Les exceptions doivent être documentées et justifiées dans les commits/PRs

### Processus d'Amendement
- Les amendements nécessitent :
  - Documentation écrite de la raison
  - Validation de l'impact sur le projet existant
  - Plan de migration si nécessaire
  - Mise à jour de la version de la constitution

### Responsabilités
- **Développeur** : Respect des standards, testing, documentation
- **Review** : Vérification de conformité à la constitution
- **Maintenance** : Audits réguliers, mises à jour de sécurité

### Non-Négociables (Priorité Absolue)
1. Standards web (HTML5 sémantique, validation W3C)
2. Accessibilité WCAG 2.1 AA
3. Sécurité (HTTPS, headers, pas de données sensibles)
4. Performance (budget de performance respecté)
5. Checklist pre-déploiement complétée

**Version**: 1.0.0 | **Ratifié**: 2025-12-29 | **Dernière Modification**: 2025-12-29
