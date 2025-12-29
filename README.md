# Portfolio Professionnel

> Site web portfolio statique hébergé sur GitHub Pages

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen)]()
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green)]()

## 📋 Table des Matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Structure du Projet](#structure-du-projet)
- [Installation & Développement](#installation--développement)
- [Configuration](#configuration)
- [Tests & Validation](#tests--validation)
- [Déploiement](#déploiement)
- [Maintenance](#maintenance)
- [Constitution](#constitution)
- [Licence](#licence)

## 🎯 À propos

Portfolio professionnel moderne et performant, conçu selon les meilleures pratiques web :
- **Accessibilité** : WCAG 2.1 niveau AA
- **Performance** : Score Lighthouse ≥ 90
- **SEO** : Optimisé pour les moteurs de recherche
- **Responsive** : Compatible mobile, tablette, desktop

## ✨ Fonctionnalités

### Pages Principales

- **🏠 Accueil** : Hero section, compétences clés, call-to-action
- **📄 Curriculum Vitae** : Expériences, formation, compétences techniques, téléchargement PDF
- **💼 Projets** : Portfolio avec filtres, détails techniques, liens démo/code
- **📧 Contact** : Formulaire fonctionnel avec validation, liens réseaux sociaux

### Caractéristiques Techniques

- ✅ HTML5 sémantique
- ✅ CSS3 moderne (Grid, Flexbox, Custom Properties)
- ✅ JavaScript ES6+ vanilla
- ✅ Images optimisées (WebP + fallback)
- ✅ Lazy loading
- ✅ Navigation accessible au clavier
- ✅ Support lecteurs d'écran
- ✅ Mode responsive mobile-first
- ✅ SEO optimisé (Open Graph, Twitter Cards, Sitemap)

## 🛠️ Technologies

### Core

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes, variables CSS
- **JavaScript ES6+** : Interactivité vanilla

### Outils de Développement

- **Live Server** (VS Code extension) : Développement local avec hot reload
- **Lighthouse** : Audit performance et accessibilité
- **axe DevTools** : Tests accessibilité automatisés
- **W3C Validator** : Validation HTML/CSS

### Services Externes

- **EmailJS / Formspree** : Service d'envoi emails pour formulaire contact
- **GitHub Pages** : Hébergement statique gratuit avec HTTPS

## 📁 Structure du Projet

```
MithrandirEa.github.io/
├── index.html              # Page d'accueil
├── cv.html                 # Page CV
├── projets.html            # Page projets/portfolio
├── contact.html            # Page contact
├── 404.html                # Page erreur 404
│
├── assets/
│   ├── css/
│   │   ├── main.css        # Styles globaux & variables
│   │   ├── components.css  # Composants réutilisables
│   │   ├── home.css        # Styles page accueil
│   │   ├── cv.css          # Styles page CV
│   │   ├── projects.css    # Styles page projets
│   │   └── contact.css     # Styles page contact
│   │
│   ├── js/
│   │   ├── main.js         # Script global (navigation)
│   │   ├── projects.js     # Logique projets (filtres, modale)
│   │   └── contact.js      # Validation & envoi formulaire
│   │
│   ├── images/
│   │   ├── profile/        # Photo profil
│   │   ├── projects/       # Screenshots projets
│   │   ├── icons/          # Icônes technologies, réseaux
│   │   └── favicon/        # Favicons multi-tailles
│   │
│   ├── docs/
│   │   └── cv.pdf          # CV téléchargeable
│   │
│   └── fonts/              # Polices locales (optionnel)
│
├── Portfolio/              # Configuration Speckit
│   ├── .specify/
│   │   └── memory/
│   │       ├── constitution.md
│   │       ├── portfolio-pages-specification.md
│   │       ├── portfolio-pages-plan.md
│   │       └── portfolio-pages-tasks.md
│   └── .github/
│
├── .gitignore
├── README.md               # Ce fichier
├── sitemap.xml             # Sitemap SEO
├── robots.txt              # Instructions crawlers
└── package.json            # (Optionnel) Si build tools
```

## 🚀 Installation & Développement

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Éditeur de code (VS Code recommandé)
- Git

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/[username]/MithrandirEa.github.io.git
   cd MithrandirEa.github.io
   ```

2. **Installer Live Server (VS Code)**
   - Ouvrir VS Code
   - Installer l'extension "Live Server" par Ritwick Dey
   - Ou : `code --install-extension ritwickdey.liveserver`

3. **Lancer le serveur de développement**
   - Clic droit sur `index.html` → "Open with Live Server"
   - Ou : Raccourci `Alt+L Alt+O`
   - Le site s'ouvre sur `http://localhost:5500`

### Développement Local

```bash
# Ouvrir le projet dans VS Code
code .

# Lancer Live Server
# (via interface VS Code ou raccourci)

# Le site recharge automatiquement à chaque modification
```

### Structure de Développement

1. **Modifier HTML** : Éditer les fichiers `.html` à la racine
2. **Modifier CSS** : Éditer les fichiers dans `assets/css/`
3. **Modifier JS** : Éditer les fichiers dans `assets/js/`
4. **Ajouter images** : Placer dans `assets/images/` (optimiser en WebP)
5. **Tester** : Le navigateur recharge automatiquement

## ⚙️ Configuration

### Formulaire de Contact

**Option A : EmailJS** (Recommandé)

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template email
4. Obtenir : Service ID, Template ID, Public Key
5. Modifier `assets/js/contact.js` avec vos identifiants :
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   // Service ID: 'YOUR_SERVICE_ID'
   // Template ID: 'YOUR_TEMPLATE_ID'
   ```

**Option B : Formspree**

1. Créer un compte sur [Formspree](https://formspree.io/)
2. Créer un nouveau formulaire
3. Obtenir l'URL du formulaire
4. Modifier l'attribut `action` dans `contact.html`

### Google Fonts (Optionnel)

Ajouter dans `<head>` de chaque page HTML :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Analytics (Optionnel)

Pour Google Analytics ou Plausible Analytics, ajouter le script dans `<head>` selon la documentation du service.

## ✅ Tests & Validation

### Tests Performance

```bash
# Lighthouse (via Chrome DevTools)
# F12 → Lighthouse → Generate Report
# Objectif : Score ≥ 90 sur 4 catégories

# Ou via CLI (si lighthouse installé globalement)
npx lighthouse https://localhost:5500 --view
```

### Tests Accessibilité

```bash
# axe DevTools (extension Chrome/Firefox)
# F12 → axe DevTools → Scan All

# Tests manuels
# - Navigation complète au clavier (Tab, Shift+Tab, Enter, Escape)
# - Lecteur d'écran (NVDA Windows, VoiceOver Mac)
# - Vérifier contrastes (WebAIM Contrast Checker)
```

### Validation HTML/CSS

- **HTML** : [W3C Validator](https://validator.w3.org/)
- **CSS** : [CSS Validator](https://jigsaw.w3.org/css-validator/)
- **Objectif** : 0 erreurs

### Tests Cross-Browser

Tester sur :
- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)

### Tests Responsive

Tester sur :
- 📱 Mobile : 320px, 375px, 414px
- 📱 Tablet : 768px, 1024px
- 💻 Desktop : 1440px, 1920px+

### Checklist Pre-Déploiement

Avant chaque déploiement, vérifier :

- [ ] Validation HTML W3C (0 erreurs)
- [ ] Validation CSS (0 erreurs critiques)
- [ ] Lighthouse score ≥ 90 (4 catégories)
- [ ] Tests responsive (mobile, tablet, desktop)
- [ ] Tests cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Tests accessibilité (axe DevTools, navigation clavier)
- [ ] Images optimisées (WebP + fallback)
- [ ] 0 erreurs console JavaScript
- [ ] Meta tags SEO présents et corrects
- [ ] Fichiers minifiés en production
- [ ] Liens internes fonctionnels
- [ ] Formulaire contact validé et testé

## 🚢 Déploiement

### GitHub Pages (Automatique)

1. **Pousser vers GitHub**
   ```bash
   git add .
   git commit -m "feat: initial portfolio implementation"
   git push origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans Settings → Pages
   - Source : Deploy from branch `main` / root
   - Sauvegarder

3. **Accéder au site**
   - URL : `https://[username].github.io/[repo-name]`
   - Ou : domaine custom si configuré
   - HTTPS activé automatiquement

### Custom Domain (Optionnel)

1. Ajouter fichier `CNAME` à la racine avec votre domaine
2. Configurer DNS chez votre registrar :
   ```
   A Record : 185.199.108.153
   A Record : 185.199.109.153
   A Record : 185.199.110.153
   A Record : 185.199.111.153
   ```
3. Attendre propagation DNS (24-48h)

## 🔧 Maintenance

### Mettre à Jour le Contenu

**Modifier le CV :**
1. Éditer `cv.html` (sections expériences, formation, compétences)
2. Mettre à jour le PDF dans `assets/docs/cv.pdf`
3. Changer la date de mise à jour dans `cv.html`
4. Commit et push

**Ajouter un Projet :**
1. Ajouter les données dans `assets/js/projects-data.js` (si JSON)
2. Ou ajouter une card projet dans `projets.html`
3. Ajouter images du projet dans `assets/images/projects/`
4. Optimiser images en WebP
5. Commit et push

**Modifier les Couleurs/Design :**
1. Éditer les variables CSS dans `assets/css/main.css`
2. Vérifier contrastes WCAG AA
3. Tester sur toutes les pages
4. Commit et push

### Optimisation Continue

**Mensuel :**
- Audit Lighthouse : vérifier scores
- Tests accessibilité : axe DevTools
- Vérifier liens externes (projets)
- Tester formulaire contact

**Trimestriel :**
- Mettre à jour contenu (CV, projets)
- Audit SEO : Search Console
- Analyser analytics (si configuré)
- Optimiser images si nouvelles

## 📜 Constitution

Ce projet respecte une [constitution technique stricte](Portfolio/.specify/memory/constitution.md) garantissant :

- Standards web (HTML5 sémantique, validation W3C)
- Accessibilité WCAG 2.1 AA obligatoire
- Performance (Core Web Vitals, Lighthouse ≥ 90)
- Sécurité (HTTPS, protection données, headers)
- Maintenabilité (architecture modulaire, documentation)

Voir : [Portfolio/.specify/memory/constitution.md](Portfolio/.specify/memory/constitution.md)

## 📝 Documentation Technique

- **Spécification Fonctionnelle** : [portfolio-pages-specification.md](Portfolio/.specify/memory/portfolio-pages-specification.md)
- **Plan d'Implémentation** : [portfolio-pages-plan.md](Portfolio/.specify/memory/portfolio-pages-plan.md)
- **Liste des Tâches** : [portfolio-pages-tasks.md](Portfolio/.specify/memory/portfolio-pages-tasks.md)

## 🤝 Contribution

Ce portfolio est un projet personnel. Les suggestions sont bienvenues via issues GitHub.

### Conventions de Commit

- `feat:` Nouvelles fonctionnalités
- `style:` Modifications CSS
- `fix:` Corrections de bugs
- `docs:` Documentation
- `perf:` Optimisations performance
- `test:` Tests
- `chore:` Tâches diverses

## 📄 Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email** : [votre-email@example.com]
- **LinkedIn** : [linkedin.com/in/votre-profil]
- **GitHub** : [github.com/votre-username]

---

**Version** : 1.0.0  
**Dernière Mise à Jour** : 2025-12-29  
**Statut** : En développement 🚧

Fait avec ❤️ et beaucoup de ☕
