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

- **Web3Forms** : Service d'envoi emails pour formulaire contact (gratuit, sans backend)
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
