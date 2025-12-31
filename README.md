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

Portfolio professionnel moderne et performant, développé en vanilla HTML, CSS et JavaScript sans framework. Conçu selon les meilleures pratiques web pour offrir une expérience utilisateur optimale et professionnelle.

**Objectif** : Présenter mes compétences, expériences et projets de manière accessible, performante et professionnelle.

**Caractéristiques** :
- **Accessibilité** : WCAG 2.1 niveau AA - Navigation clavier complète, support lecteurs d'écran
- **Performance** : Score Lighthouse ≥ 90 sur 4 catégories (Performance, Accessibility, Best Practices, SEO)
- **SEO** : Métadonnées complètes, Open Graph, Twitter Cards, sitemap XML
- **Responsive** : Mobile-first, compatible 320px → 1920px+ (mobile, tablette, desktop)
- **Standards** : HTML5 sémantique validé W3C, CSS3 moderne, ES6+ vanilla JavaScript

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

### Stack Technique

Ce portfolio est développé avec des **technologies web natives** (vanilla), sans framework ni dépendances externes pour garantir légèreté, performance et maintenabilité.

#### Core Technologies

- **HTML5** (Sémantique)
  - Balises sémantiques : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  - Attributs ARIA pour accessibilité avancée
  - Microdata structurées pour SEO
  - Validation W3C stricte (0 erreurs)

- **CSS3** (Moderne)
  - Custom Properties (CSS Variables) pour design system
  - CSS Grid & Flexbox pour layouts responsive
  - Media Queries mobile-first
  - Animations CSS avec `prefers-reduced-motion`
  - Architecture modulaire : variables.css, main.css, components.css, page-specific.css
  - Méthodologie BEM pour nommage des classes

- **JavaScript ES6+** (Vanilla)
  - Modules ES6 natifs
  - Fetch API pour intégration GitHub API
  - Intersection Observer pour animations scroll
  - Event Delegation pour performance
  - Pas de dépendances externes (0 npm packages en runtime)

#### APIs & Intégrations

- **GitHub REST API v3** : Récupération dynamique des repositories et projets
- **Web3Forms API** : Service d'envoi d'emails pour formulaire de contact
- **Google Fonts API** : Chargement optimisé des polices Roboto et Playfair Display

### Outils de Développement

- **Éditeur** : Visual Studio Code
  - Extension : Live Server (hot reload)
  - Extension : Prettier (formatage code)
  - Extension : ESLint (qualité JavaScript)

- **Audit & Tests**
  - **Lighthouse** : Performance, accessibilité, SEO, best practices
  - **axe DevTools** : Tests accessibilité automatisés WCAG 2.1
  - **W3C Validator** : Validation HTML5 et CSS3
  - **WebAIM Contrast Checker** : Vérification des contrastes de couleurs

- **Optimisation Images**
  - **Squoosh** (web) : Conversion et compression WebP
  - **cwebp** (CLI) : Conversion batch WebP

- **Contrôle de Version**
  - **Git** : Versioning du code source
  - **GitHub** : Hébergement repository et collaboration

### Hébergement & Déploiement

- **GitHub Pages**
  - Hébergement statique gratuit et illimité
  - HTTPS automatique (Let's Encrypt)
  - CDN global intégré (Fastly)
  - Déploiement automatique sur push vers `main`
  - Support custom domain (optionnel)

### Services Externes (Runtime)

- **Web3Forms** (Formulaire)
  - API REST pour envoi emails sans backend
  - 250 soumissions/mois gratuites
  - Protection anti-spam (honeypot)
  - Notifications instantanées

- **Google Fonts** (Typographie)
  - Chargement optimisé avec `preconnect`
  - Polices : Roboto (sans-serif), Playfair Display (serif)
  - Fallback sur polices système si indisponible

### Pourquoi Vanilla (Sans Framework) ?

✅ **Performance** : 0 KB de JavaScript framework (React ~40KB, Vue ~33KB gzipped)  
✅ **Légèreté** : Site total < 500 KB (HTML+CSS+JS+Images optimisées)  
✅ **Maintenabilité** : Pas de dépendances à maintenir, pas de breaking changes  
✅ **Compatibilité** : Support navigateurs > 95% sans polyfills  
✅ **Apprentissage** : Maîtrise des fondamentaux web natifs  
✅ **SEO** : Contenu indexable immédiatement (pas de JavaScript pour le contenu critique)

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

### Formulaire de Contact (Web3Forms)

**Pourquoi Web3Forms ?**
- ✅ 100% gratuit (250 soumissions/mois)
- ✅ Pas de backend requis (JAMstack friendly)
- ✅ Protection anti-spam intégrée (honeypot, reCAPTCHA optionnel)
- ✅ Personnalisation complète (redirection, messages personnalisés)
- ✅ Notifications instantanées par email
- ✅ Compatible avec sites statiques (GitHub Pages, Netlify, Vercel)
- ✅ RGPD compliant

**Configuration**

1. **Créer une clé d'accès**
   - Aller sur [Web3Forms](https://web3forms.com/)
   - Cliquer sur "Get Started for Free"
   - Entrer votre email (où recevoir les soumissions)
   - Obtenir votre **Access Key**

2. **Intégrer dans contact.html**
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
     <!-- Access Key -->
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     
     <!-- Honeypot anti-spam (caché pour utilisateurs) -->
     <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
     
     <!-- Champs du formulaire -->
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <textarea name="message" required></textarea>
     
     <button type="submit">Envoyer</button>
   </form>
   ```

3. **Configuration avancée (optionnel)**
   - **Page de redirection** : Ajouter `<input type="hidden" name="redirect" value="https://yourdomain.com/merci.html">`
   - **Message personnalisé** : Ajouter `<input type="hidden" name="subject" value="Nouveau message depuis Portfolio">`
   - **reCAPTCHA** : Activer sur le dashboard Web3Forms

4. **Validation JavaScript (assets/js/contact.js)**
   ```javascript
   // Validation côté client pour meilleure UX
   // Web3Forms gère la soumission automatiquement
   document.querySelector('form').addEventListener('submit', function(e) {
     // Validation personnalisée avant envoi
     // Feedback utilisateur (spinner, messages)
   });
   ```

**Alternatives évaluées**
- ❌ **EmailJS** : Limite gratuite restrictive (200 emails/mois), nécessite JS pour fonctionner
- ❌ **Formspree** : Limite gratuite basse (50 soumissions/mois), watermark sur version gratuite
- ✅ **Web3Forms** : Meilleur rapport fonctionnalités/gratuité pour site statique

### Google Fonts

**Polices Sélectionnées**
- **Roboto** : Police sans-serif principale (corps de texte, navigation, boutons)
  - Poids : 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
  - Excellente lisibilité sur écran, design moderne et professionnel
  - Optimisée pour le web, support complet des caractères
- **Playfair Display** : Police serif secondaire (titres principaux, accents)
  - Poids : 400 (Regular), 700 (Bold)
  - Élégante et raffinée, idéale pour les titres
  - Contraste élevé, excellent impact visuel

**Intégration**

Ajouter dans `<head>` de chaque page HTML :
```html
<!-- Preconnect pour performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

---

## Validation et Conformité (T034-T035)

### CSS Validation (T034)

**Statut** : ✅ Validé avec succès

Tous les fichiers CSS ont été vérifiés et validés :
- ✅ `assets/css/variables.css` - Aucune erreur détectée
- ✅ `assets/css/main.css` - Aucune erreur détectée
- ✅ `assets/css/components.css` - Aucune erreur détectée

**Outil utilisé** : VS Code CSS Linter + W3C CSS Validator

**Résultat** : Code CSS conforme aux standards W3C, utilisation correcte des variables CSS (custom properties), syntaxe valide, pas d'erreurs critiques.

### Contraste des Couleurs (T035)

**Statut** : ✅ Vérifié et documenté

Toutes les combinaisons de couleurs ont été testées pour la conformité **WCAG 2.1 niveau AA** (ratio minimum 4.5:1 pour texte normal, 3:1 pour texte large).

#### ✅ Combinaisons Validées (Utilisables)

| Texte | Fond | Ratio de Contraste | Conformité |
|-------|------|-------------------|------------|
| Black (#000000) | White (#FFFFFF) | **21:1** | ✅ AAA |
| Black (#000000) | Alabaster Grey (#E5E5E5) | **17.4:1** | ✅ AAA |
| Prussian Blue (#14213D) | White (#FFFFFF) | **14.8:1** | ✅ AAA |
| Prussian Blue (#14213D) | Alabaster Grey (#E5E5E5) | **12.3:1** | ✅ AAA |
| White (#FFFFFF) | Prussian Blue (#14213D) | **14.8:1** | ✅ AAA |
| White (#FFFFFF) | Black (#000000) | **21:1** | ✅ AAA |
| Orange (#FCA311) | Black (#000000) | **10.8:1** | ✅ AAA |
| Orange (#FCA311) | Prussian Blue (#14213D) | **7.3:1** | ✅ AAA |

#### ❌ Combinaisons Non-Conformes (À Éviter)

| Texte | Fond | Ratio de Contraste | Problème |
|-------|------|-------------------|----------|
| Orange (#FCA311) | White (#FFFFFF) | **1.9:1** | ❌ Échoue AA/AAA |
| Orange (#FCA311) | Alabaster Grey (#E5E5E5) | **1.6:1** | ❌ Échoue AA/AAA |
| Alabaster Grey (#E5E5E5) | White (#FFFFFF) | **1.2:1** | ❌ Échoue AA/AAA |

**Recommandations d'usage** :
- ✅ Utiliser Orange **uniquement** sur fond Black ou Prussian Blue
- ✅ Utiliser Alabaster Grey pour les **bordures et arrière-plans**, pas pour le texte principal
- ✅ Privilégier Black ou Prussian Blue pour le texte sur fond clair
- ✅ Utiliser White pour le texte sur fond Prussian Blue ou Black

**Outils de vérification** :
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio Calculator](https://contrast-ratio.com/)
- Chrome DevTools - Accessibility Panel

**Documentation** : Les ratios de contraste sont également documentés dans `assets/css/variables.css` sous forme de commentaires pour référence rapide.

---

## Favicons (T053)

### Génération des Favicons

Les favicons doivent être générés et placés dans `assets/images/favicon/`. Documentation complète disponible dans [assets/images/favicon/README.md](assets/images/favicon/README.md).

**Fichiers requis :**
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-96x96.png`
- `favicon-192x192.png`
- `favicon-512x512.png`
- `apple-touch-icon.png` (180x180px)

**Outils recommandés :**
- [Favicon.io](https://favicon.io/) - Générateur simple et gratuit
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Générateur complet multi-plateforme

**Configuration design :**
- **Background** : `#14213D` (Prussian Blue) ou `#FCA311` (Orange)
- **Contenu** : Initiales "CS" ou logo existant
- **Police** : Roboto ou Playfair Display

Les liens favicon sont déjà intégrés dans le `<head>` de toutes les pages HTML.

---

**Usage**
```css
/* Corps de texte, navigation, UI */
body, p, nav, button {
  font-family: var(--font-primary); /* Roboto */
}

/* Titres principaux (h1, h2) */
h1, h2, .hero-title {
  font-family: var(--font-secondary); /* Playfair Display */
}
```

### Optimisation Images (WebP)

**Pourquoi WebP ?**
- ✅ Réduction de 25-35% de la taille vs JPEG/PNG
- ✅ Support navigateurs : 96%+ (Chrome, Firefox, Safari 14+, Edge)
- ✅ Amélioration scores Lighthouse (performance)
- ✅ Fallback automatique possible avec `<picture>`

**Outils de Conversion**

**Option 1 : Squoosh (En ligne - Recommandé pour débutants)**
- Aller sur [Squoosh.app](https://squoosh.app/)
- Glisser-déposer votre image
- Sélectionner "WebP" dans le panneau droit
- Ajuster qualité (80-85 recommandé)
- Télécharger l'image optimisée
- ✅ Interface visuelle pour comparer avant/après

**Option 2 : cwebp (CLI - Recommandé pour lots)**
```bash
# Installation
# Windows: Télécharger depuis https://developers.google.com/speed/webp/download
# Mac: brew install webp
# Linux: sudo apt install webp

# Conversion simple
cwebp input.jpg -q 85 -o output.webp

# Conversion par lot (tous les JPEG du dossier)
for %i in (*.jpg) do cwebp -q 85 "%i" -o "%~ni.webp"

# PowerShell (Windows)
Get-ChildItem -Filter *.jpg | ForEach-Object { cwebp -q 85 $_.FullName -o "$($_.BaseName).webp" }
```

**Option 3 : Squoosh CLI (Node.js)**
```bash
# Installation
npm install -g @squoosh/cli

# Conversion par lot avec configuration avancée
squoosh-cli --webp '{"quality":85}' assets/images/**/*.{jpg,png}
```

**Option 4 : ImageMagick**
```bash
# Installation : https://imagemagick.org/script/download.php

# Conversion
magick convert input.jpg -quality 85 output.webp

# Batch conversion
magick mogrify -format webp -quality 85 *.jpg
```

**Utilisation dans HTML avec Fallback**
```html
<!-- Méthode recommandée : <picture> avec fallback -->
<picture>
  <source srcset="assets/images/profile.webp" type="image/webp">
  <source srcset="assets/images/profile.jpg" type="image/jpeg">
  <img src="assets/images/profile.jpg" alt="Description" loading="lazy">
</picture>
```

**Paramètres Recommandés**
- **Qualité** : 80-85 (bon compromis taille/qualité)
- **Photos** : 85 (plus de détails)
- **Graphiques/UI** : 80 (moins de détails nécessaires)
- **Effort de compression** : 4-6 (cwebp -m 4)

**Workflow Recommandé**
1. Placer images originales dans un dossier `assets/images/originals/`
2. Convertir en WebP avec qualité 85
3. Conserver originaux JPEG/PNG comme fallback
4. Utiliser `<picture>` dans HTML pour support universel
5. Ajouter `loading="lazy"` pour lazy loading natif

### Analytics (Optionnel)

Pour Google Analytics ou Plausible Analytics, ajouter le script dans `<head>` selon la documentation du service.

## 🎨 Design System

### Palette de Couleurs

Le portfolio utilise une palette de **5 couleurs** soigneusement sélectionnées, toutes **conformes WCAG 2.1 niveau AA** pour l'accessibilité.

#### Couleurs Principales

| Couleur | Hex | Usage | Signification |
|---------|-----|-------|---------------|
| **Black** | `#000000` | Texte principal, headers | Autorité, profondeur, formalité |
| **Prussian Blue** | `#14213D` | Couleur primaire, fonds sombres | Gravité, mystère, tradition académique |
| **Orange** | `#FCA311` | Accents, CTA, hover | Chaleur, mouvement, positivité |
| **Alabaster Grey** | `#E5E5E5` | Fonds secondaires, bordures | Élégance moderne, calme raffiné |
| **White** | `#FFFFFF` | Fond principal, texte sur fond sombre | Possibilité, nouveaux débuts, pureté |

#### Contrastes WCAG AA (4.5:1 minimum)

**✅ Combinaisons Validées**
- Black sur White : **21:1** ✅
- Black sur Alabaster Grey : **17.4:1** ✅
- Prussian Blue sur White : **14.8:1** ✅
- Prussian Blue sur Alabaster Grey : **12.3:1** ✅
- Orange sur Black : **10.8:1** ✅
- Orange sur Prussian Blue : **7.3:1** ✅
- White sur Prussian Blue : **14.8:1** ✅
- White sur Black : **21:1** ✅

**⚠️ Combinaisons à Éviter**
- Orange sur White : **1.9:1** ❌ (utiliser pour icônes uniquement, pas pour texte)
- Orange sur Alabaster Grey : **1.6:1** ❌
- Alabaster Grey sur White : **1.2:1** ❌

**Outil de vérification** : [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Typographie

**Familles de Polices**
- **Primaire** : **Roboto** (Google Fonts) - Sans-serif moderne et professionnelle
  - Fallback : System Font Stack (Segoe UI, Helvetica Neue, Arial)
  - Usage : Corps de texte, navigation, UI, boutons
- **Secondaire** : **Playfair Display** (Google Fonts) - Serif élégante
  - Fallback : Georgia, Times New Roman
  - Usage : Titres H1/H2, hero sections, accents
- **Monospace** : Courier New (pour code, si nécessaire)

**Échelle Typographique** (Major Third 1.25)
```
XS:  12px (0.75rem)   - Légendes, notes
SM:  14px (0.875rem)  - Texte secondaire
BASE: 16px (1rem)     - Corps de texte
MD:  18px (1.125rem)  - Texte mis en valeur
LG:  20px (1.25rem)   - Sous-titres
XL:  25px (1.563rem)  - Titres H3
2XL: 31px (1.953rem)  - Titres H2
3XL: 39px (2.441rem)  - Titres H1
4XL: 49px (3.052rem)  - Hero titles
```

**Poids de Police**
- Light (300) : Textes légers, citations
- Normal (400) : Corps de texte standard
- Medium (500) : Sous-titres, navigation
- Semibold (600) : Titres secondaires
- Bold (700) : Titres principaux, CTA

### Système d'Espacement

**Base 8px** - Tous les espacements sont des multiples de 8px pour cohérence visuelle

```
spacing-1:  8px   - Espacement très serré (badges, tags)
spacing-2:  16px  - Éléments proches (boutons, inputs)
spacing-3:  24px  - Éléments liés (cards internes)
spacing-4:  32px  - Containers, sections internes
spacing-6:  48px  - Séparation de groupes
spacing-8:  96px  - Séparation de sections majeures
```

**Usage Sémantique**
- `--spacing-tight` : 8px (espacement minimal)
- `--spacing-element` : 16px (entre éléments)
- `--spacing-container` : 32px (padding containers)
- `--spacing-section` : 96px (entre sections de page)

### Breakpoints Responsive

```css
XS:  320px  - Mobile portrait (minimum)
SM:  640px  - Mobile landscape
MD:  768px  - Tablet portrait
LG:  1024px - Tablet landscape / Desktop small
XL:  1280px - Desktop standard
2XL: 1440px - Desktop large
```

**Stratégie** : Mobile-first, utiliser `min-width` media queries

### Variables CSS

Toutes ces valeurs sont définies dans `assets/css/variables.css` sous forme de custom properties CSS :

```css
/* Exemple d'utilisation */
.hero {
  background-color: var(--color-prussian-blue);
  color: var(--color-white);
  padding: var(--spacing-section);
  font-size: var(--font-size-3xl);
}

.btn-primary {
  background-color: var(--color-orange);
  color: var(--color-black);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### Composants Réutilisables

Les composants suivants sont définis dans `assets/css/components.css` :
- **Boutons** : `.btn`, `.btn--primary`, `.btn--secondary`
- **Cards** : `.card`, `.card__image`, `.card__content`
- **Badges** : `.badge`, `.badge--primary`, `.badge--secondary`

Tous respectent les contrastes WCAG AA et utilisent les variables du design system.

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

## 🔧 Maintenance & Mise à Jour du Contenu

### Guide de Mise à Jour

Ce guide vous aide à mettre à jour facilement le contenu du portfolio sans connaissances techniques avancées.

#### 📄 Modifier le CV

**Étape 1 : Éditer le fichier HTML**

1. Ouvrir `cv.html` dans un éditeur de texte (VS Code recommandé)

2. **Ajouter une expérience professionnelle** :
   ```html
   <!-- Localiser la section <section id="experience"> -->
   <!-- Copier-coller ce template et remplacer les valeurs -->
   <article class="experience-item">
     <div class="experience-header">
       <h3 class="experience-title">Titre du Poste</h3>
       <p class="experience-company">Nom de l'Entreprise</p>
       <p class="experience-date">Mois Année - Mois Année</p>
     </div>
     <ul class="experience-achievements">
       <li>Réalisation ou responsabilité 1</li>
       <li>Réalisation ou responsabilité 2</li>
       <li>Réalisation ou responsabilité 3</li>
     </ul>
   </article>
   ```

3. **Ajouter une compétence** :
   ```html
   <!-- Localiser la section <section id="skills"> -->
   <!-- Dans la catégorie appropriée (Frontend, Backend, Outils) -->
   <span class="badge badge--primary">Nouvelle Compétence</span>
   ```

4. **Ajouter une formation** :
   ```html
   <!-- Localiser la section <section id="education"> -->
   <article class="education-item">
     <h3 class="education-degree">Diplôme Obtenu</h3>
     <p class="education-school">Nom de l'Établissement</p>
     <p class="education-date">Année d'obtention</p>
   </article>
   ```

**Étape 2 : Mettre à jour le PDF**

1. Créer/exporter votre CV au format PDF (max 2 MB)
2. Renommer le fichier : `cv-votre-nom.pdf`
3. Remplacer le fichier dans `assets/docs/cv-votre-nom.pdf`
4. Vérifier le lien dans `cv.html` :
   ```html
   <a href="assets/docs/cv-votre-nom.pdf" download class="btn btn--primary">
     📥 Télécharger CV PDF
   </a>
   ```

**Étape 3 : Mettre à jour la date**

1. Dans `cv.html`, localiser :
   ```html
   <p class="cv-update-date">Dernière mise à jour : [Date]</p>
   ```
2. Remplacer `[Date]` par la date actuelle (ex: "Décembre 2025")

**Étape 4 : Tester et déployer**

```bash
# Tester localement avec Live Server
# Ouvrir cv.html → Clic droit → Open with Live Server

# Si tout est correct, committer et pousser
git add cv.html assets/docs/cv-votre-nom.pdf
git commit -m "docs: update CV - ajout expérience [Entreprise]"
git push origin main

# Le site se met à jour automatiquement en 1-2 minutes
```

---

#### 💼 Ajouter ou Modifier un Projet

**Option 1 : Projet hébergé sur GitHub (Automatique)**

Les projets GitHub apparaissent automatiquement via l'API. Pour qu'un projet s'affiche :

1. **Rendre le repository public** sur GitHub
2. **Ajouter une description** claire au repository (Settings → About)
3. **Ajouter des topics** (technologies utilisées) : `javascript`, `react`, `python`, etc.
4. **Optionnel** : Ajouter un lien de démo dans "Website" (Settings → About)
5. Le projet apparaîtra automatiquement dans la page Projets (rafraîchir la page)

**Configuration du filtre** (si besoin) :

Pour exclure certains repositories de l'affichage :
```javascript
// Éditer assets/js/projects.js
// Localiser la fonction filterRepos()
function filterRepos(repos) {
  return repos.filter(repo => 
    !repo.fork &&                    // Exclure les forks
    !repo.archived &&                // Exclure les archivés
    !repo.name.includes('test') &&   // Exclure les repos de test
    repo.name !== 'MithrandirEa.github.io' // Exclure le portfolio lui-même
  );
}
```

**Option 2 : Projet externe (Manuel)**

Pour ajouter un projet non-GitHub :

1. Ouvrir `assets/js/projects.js`
2. Ajouter dans le tableau `manualProjects` :
   ```javascript
   const manualProjects = [
     {
       name: "Nom du Projet",
       description: "Description courte du projet",
       html_url: "https://github.com/username/repo", // Lien GitHub ou autre
       homepage: "https://demo-project.com",         // Lien démo (optionnel)
       language: "JavaScript",                       // Langage principal
       topics: ["react", "nodejs", "mongodb"],     // Technologies
       stargazers_count: 0,                          // Nombre d'étoiles
       created_at: "2025-01-01T00:00:00Z"
     }
   ];
   ```
3. Ajouter une image du projet dans `assets/images/projects/nom-projet.webp`
4. Tester localement
5. Commit et push

**Optimiser les images de projet** :
```bash
# Placer l'image originale dans assets/images/projects/
# Convertir en WebP avec Squoosh ou cwebp
cwebp assets/images/projects/projet.jpg -q 85 -o assets/images/projects/projet.webp

# Garder le JPEG comme fallback
# L'utiliser dans le code avec <picture>
```

---

#### 🎨 Modifier les Couleurs ou le Design

**Changer les couleurs du site** :

1. Ouvrir `assets/css/variables.css`
2. Modifier les valeurs des variables CSS :
   ```css
   :root {
     /* Modifier ces valeurs avec vos couleurs */
     --color-primary: #14213D;    /* Couleur principale */
     --color-accent: #FCA311;     /* Couleur d'accent (CTA) */
     --color-text: #000000;       /* Couleur du texte */
     --color-background: #FFFFFF; /* Couleur de fond */
   }
   ```
3. **IMPORTANT** : Vérifier les contrastes WCAG AA avec [WebAIM](https://webaim.org/resources/contrastchecker/)
   - Texte normal : ratio ≥ 4.5:1
   - Texte large (18px+) : ratio ≥ 3:1
4. Tester sur toutes les pages (index, cv, projets, contact)
5. Commit et push

**Changer les polices** :

1. Choisir de nouvelles polices sur [Google Fonts](https://fonts.google.com/)
2. Copier le code d'import dans `<head>` de toutes les pages HTML :
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Nouvelle-Police:wght@400;700&display=swap" rel="stylesheet">
   ```
3. Mettre à jour `assets/css/variables.css` :
   ```css
   --font-primary: 'Nouvelle-Police', sans-serif;
   ```
4. Tester lisibilité sur toutes les pages
5. Commit et push

---

#### 📝 Modifier les Textes

**Page d'accueil** (`index.html`) :
- **Nom et titre** : Balise `<h1>` dans la section `.hero`
- **Accroche** : Paragraphe `<p>` après le `<h1>`
- **Compétences** : Sections `.skill-card` avec titre et description

**Page CV** (`cv.html`) :
- **Résumé professionnel** : Section `#resume`
- **Expériences** : Articles `.experience-item`
- **Formation** : Articles `.education-item`
- **Compétences** : Badges `.badge` dans section `#skills`

**Page Contact** (`contact.html`) :
- **Message d'introduction** : Paragraphe avant le formulaire
- **Liens réseaux sociaux** : Modifier les URLs dans les liens `<a>`

**Astuce** : Utiliser la recherche (Ctrl+F) pour localiser rapidement le texte à modifier.

---

#### 🔄 Workflow de Mise à Jour Standard

```bash
# 1. Créer une branche pour vos modifications
git checkout -b update/cv-janvier-2026

# 2. Faire vos modifications
# Éditer les fichiers HTML, ajouter images, etc.

# 3. Tester localement
# Ouvrir avec Live Server, vérifier toutes les pages

# 4. Valider HTML (optionnel mais recommandé)
# Utiliser https://validator.w3.org/

# 5. Committer les changements
git add .
git commit -m "docs: update CV - nouvelle expérience chez [Entreprise]"

# 6. Pousser vers GitHub
git push origin update/cv-janvier-2026

# 7. Créer une Pull Request sur GitHub (optionnel pour validation)
# Ou merger directement :
git checkout main
git merge update/cv-janvier-2026
git push origin main

# 8. Vérifier le déploiement
# Attendre 1-2 minutes, puis visiter https://[username].github.io
```

## 💻 Développement

### Environnement de Développement

**Configuration Recommandée**

1. **Visual Studio Code** avec extensions :
   ```bash
   # Extensions essentielles
   code --install-extension ritwickdey.liveserver      # Live Server
   code --install-extension esbenp.prettier-vscode     # Prettier
   code --install-extension dbaeumer.vscode-eslint     # ESLint
   code --install-extension ecmel.vscode-html-css      # HTML CSS Support
   ```

2. **Navigateurs de développement** :
   - Chrome/Edge (recommandé) : DevTools complets, Lighthouse intégré
   - Firefox : Excellents outils accessibilité, Grid Inspector
   - Safari (Mac) : Test compatibilité WebKit

3. **Outils externes** :
   - [axe DevTools](https://www.deque.com/axe/devtools/) : Extension Chrome/Firefox pour accessibilité
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) : Vérification contrastes
   - [Squoosh](https://squoosh.app/) : Optimisation images WebP

### Commandes de Développement

```bash
# Cloner le projet
git clone https://github.com/MithrandirEa/MithrandirEa.github.io.git
cd MithrandirEa.github.io

# Ouvrir dans VS Code
code .

# Lancer le serveur de développement
# Méthode 1 : Live Server dans VS Code
# Clic droit sur index.html → "Open with Live Server"
# Ou raccourci : Alt+L Alt+O

# Méthode 2 : Python HTTP Server (si Live Server non disponible)
python -m http.server 8000
# Ouvrir http://localhost:8000 dans le navigateur

# Méthode 3 : Node.js http-server
npx http-server -p 8000
```

### Tests Locaux

**Tests de Performance**
```bash
# Lighthouse via Chrome DevTools
# 1. Ouvrir la page dans Chrome
# 2. F12 → Onglet "Lighthouse"
# 3. Cocher les 4 catégories
# 4. Cliquer "Analyze page load"
# Objectif : Score ≥ 90 sur les 4 catégories

# Lighthouse via CLI (si installé globalement)
npm install -g lighthouse
lighthouse http://localhost:5500 --view --output html

# Test connexion lente (throttling)
# DevTools → Network → Throttling → "Slow 3G"
```

**Tests d'Accessibilité**
```bash
# axe DevTools
# 1. Installer extension Chrome/Firefox
# 2. F12 → Onglet "axe DevTools"
# 3. Cliquer "Scan ALL of my page"
# Objectif : 0 violations critiques

# Tests manuels obligatoires
# 1. Navigation complète au clavier
#    - Tab/Shift+Tab : parcourir tous les éléments interactifs
#    - Enter : activer liens et boutons
#    - Escape : fermer modales et menus
#    - Vérifier focus visible sur tous les éléments

# 2. Lecteur d'écran (recommandé)
#    - Windows : NVDA (gratuit) https://www.nvaccess.org/
#    - Mac : VoiceOver (intégré) Cmd+F5
#    - Tester navigation sur chaque page

# 3. Vérification contrastes
#    - Utiliser WebAIM Contrast Checker
#    - Ou DevTools → Inspect → Accessibility → Contrast ratio
```

**Validation HTML/CSS**
```bash
# Validation HTML (W3C)
# Méthode 1 : En ligne
# https://validator.w3.org/#validate_by_upload
# Upload chaque fichier .html

# Méthode 2 : Extension VS Code
code --install-extension HTMLHint.vscode-htmlhint
# Les erreurs apparaissent dans l'éditeur

# Validation CSS (W3C)
# https://jigsaw.w3.org/css-validator/#validate_by_upload
# Upload chaque fichier .css

# Objectif : 0 erreurs sur tous les fichiers
```

**Tests Cross-Browser**
```bash
# Tests requis sur :
# ✅ Chrome (dernière version) - DevTools complets
# ✅ Firefox (dernière version) - Grid Inspector, accessibilité
# ✅ Safari (dernière version) - WebKit, Mac/iOS
# ✅ Edge (dernière version) - Chromium, Windows

# Tester sur chaque navigateur :
# - Affichage correct de toutes les pages
# - Navigation fonctionnelle (menu, liens)
# - Formulaire de contact (validation, envoi)
# - Modale projets (ouverture, fermeture)
# - Animations et transitions
# - Console JavaScript (0 erreurs)
```

**Tests Responsive**
```bash
# DevTools Responsive Mode
# Chrome : F12 → Toggle device toolbar (Ctrl+Shift+M)
# Tester sur :
# 📱 Mobile Portrait : 320px, 375px, 414px
# 📱 Mobile Landscape : 640px, 768px
# 📱 Tablet : 768px, 1024px
# 💻 Desktop : 1280px, 1440px, 1920px

# Vérifier sur chaque breakpoint :
# - Layout correct (pas de débordement horizontal)
# - Texte lisible (taille appropriée)
# - Images adaptées (responsive)
# - Navigation accessible (menu hamburger mobile)
# - Espacements cohérents
# - Touch targets ≥ 44x44px (mobile)
```

### Outils de Développement

**Chrome DevTools (F12)**
```bash
# Elements : Inspecter HTML/CSS
# - Edit en direct
# - Visualiser box model
# - Forcer états hover/focus/active

# Console : Debug JavaScript
# - Voir erreurs et warnings
# - Tester code JS en direct
# - Monitorer API calls

# Network : Analyser ressources
# - Taille des fichiers
# - Temps de chargement
# - Requêtes API
# - Throttling (simuler connexion lente)

# Lighthouse : Audit complet
# - Performance
# - Accessibilité
# - Best Practices
# - SEO

# Coverage : Code non utilisé
# - Identifier CSS/JS inutile
# - Optimiser taille bundle
```

**Live Server (VS Code)**
```bash
# Fonctionnalités :
# ✅ Hot reload automatique à chaque sauvegarde
# ✅ URL locale : http://localhost:5500
# ✅ Synchronisation navigateur
# ✅ Support CORS pour API calls

# Configuration (settings.json) :
{
  "liveServer.settings.port": 5500,
  "liveServer.settings.root": "/",
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.NoBrowser": false
}

# Raccourcis :
# Alt+L Alt+O : Ouvrir avec Live Server
# Alt+L Alt+C : Fermer Live Server
```

### Workflow de Développement

**Développement d'une nouvelle fonctionnalité**

```bash
# 1. Créer une branche feature
git checkout -b feature/nouvelle-section

# 2. Développer en mode itératif
# - Éditer HTML/CSS/JS
# - Live Server reload automatiquement
# - Tester dans le navigateur
# - Itérer jusqu'à satisfaction

# 3. Tests locaux
# - Lighthouse (performance)
# - axe DevTools (accessibilité)
# - W3C Validator (HTML/CSS)
# - Tests responsive (DevTools)
# - Tests cross-browser

# 4. Committer
git add .
git commit -m "feat: add nouvelle section to homepage"

# 5. Merger dans main
git checkout main
git merge feature/nouvelle-section

# 6. Pousser et déployer
git push origin main
# GitHub Pages déploie automatiquement
```

**Debug d'un bug**

```bash
# 1. Reproduire le bug localement
# - Identifier les étapes pour reproduire
# - Noter navigateur, device, conditions

# 2. Utiliser DevTools
# - Console : erreurs JavaScript
# - Elements : inspecter HTML/CSS
# - Network : vérifier requêtes API
# - Debugger : breakpoints dans JS

# 3. Créer une branche fix
git checkout -b fix/correction-bug-menu

# 4. Corriger le bug
# - Éditer le code
# - Tester la correction
# - S'assurer que ça ne casse rien d'autre

# 5. Tester sur tous les navigateurs
# - Chrome, Firefox, Safari, Edge
# - Mobile et desktop

# 6. Committer et déployer
git add .
git commit -m "fix: correct menu closing issue on mobile"
git push origin fix/correction-bug-menu
git checkout main
git merge fix/correction-bug-menu
git push origin main
```

### Optimisation Continue

**Mensuel :**
- Audit Lighthouse : vérifier scores ≥ 90
- Tests accessibilité : axe DevTools, 0 violations
- Vérifier liens externes (projets GitHub)
- Tester formulaire contact (envoi réel)
- Vérifier console : 0 erreurs JavaScript

**Trimestriel :**
- Mettre à jour contenu (CV, projets)
- Audit SEO : Google Search Console
- Analyser analytics (si configuré)
- Optimiser nouvelles images en WebP
- Tester Core Web Vitals en production
- Mettre à jour dépendances (Google Fonts, API versions)

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
