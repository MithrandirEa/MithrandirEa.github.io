# Tasks: Portfolio Professionnel - Pages Principales

**Input**: Design documents from `.specify/memory/`  
**Prerequisites**: portfolio-pages-plan.md, portfolio-pages-specification.md, constitution.md

**Tests**: Tests manuels cross-browser et outils automatisés (Lighthouse, axe DevTools, W3C Validator)

**Organization**: Tâches groupées par phase du plan d'implémentation pour un développement incrémental

## Format: `[ID] [P?] [Phase] Description`

- **[P]**: Peut être exécuté en parallèle (fichiers différents, pas de dépendances)
- **[Phase]**: Phase du plan (P0, P1, P2, etc.)
- Chemins de fichiers exacts inclus dans les descriptions

## Path Conventions

Portfolio statique simple :
- HTML: racine du projet (`index.html`, `cv.html`, `projets.html`, `contact.html`)
- CSS: `assets/css/`
- JavaScript: `assets/js/`
- Images: `assets/images/`
- Documents: `assets/docs/`

---

## Phase 0: Setup & Research (4-6 heures)

**Purpose**: Préparer l'environnement de développement et valider les choix techniques

- [x] T001 Créer structure de dossiers : `assets/css/`, `assets/js/`, `assets/images/`, `assets/docs/`, `assets/fonts/`
- [x] T002 Créer `.gitignore` avec règles appropriées (node_modules, .DS_Store, fichiers temporaires)
- [x] T003 [P] Créer `README.md` avec instructions setup, structure projet, et commandes de développement
- [x] T004 [P] Installer/configurer Live Server (VS Code extension) pour développement local
- [ ] T005 Rechercher et tester service formulaire contact (EmailJS vs Formspree) - documenter choix dans README
- [ ] T006 [P] Tester conversion images WebP (outil/script) - documenter processus dans README
- [ ] T007 Définir palette de couleurs (3-5 couleurs) et vérifier contrastes WCAG AA avec WebAIM Contrast Checker
- [ ] T008 Sélectionner 2 familles de polices maximum (Google Fonts ou local)
- [ ] T009 Définir système d'espacement (multiples de 8px: 8, 16, 24, 32, 48, 64, 96)
- [ ] T010 Créer `assets/css/variables.css` avec custom properties CSS (couleurs, typographie, espacements)
- [ ] T011 Documenter design system dans README (couleurs, typographie, espacements)

**Checkpoint**: Structure projet créée, design system défini, solution formulaire choisie

---

## Phase 1: Foundation & Core Structure (8-10 heures)

**Purpose**: Créer la structure HTML sémantique, navigation commune, et styles de base pour toutes les pages

**⚠️ CRITICAL**: Cette phase doit être complète avant de commencer les pages individuelles

### Structure HTML Sémantique (2-3h)

- [ ] T012 Créer `index.html` avec doctype HTML5, head complet (meta viewport, charset, title, description)
- [ ] T013 [P] Créer `cv.html` avec doctype HTML5, head complet
- [ ] T014 [P] Créer `projets.html` avec doctype HTML5, head complet
- [ ] T015 [P] Créer `contact.html` avec doctype HTML5, head complet
- [ ] T016 Implémenter `<header>` commun avec logo/nom et navigation dans `index.html`
- [ ] T017 [P] Copier `<header>` dans `cv.html`, `projets.html`, `contact.html`
- [ ] T018 Créer navigation desktop : liste `<nav><ul>` avec liens Accueil, CV, Projets, Contact
- [ ] T019 Ajouter bouton hamburger menu mobile (HTML) : `<button class="menu-toggle" aria-label="Menu">`
- [ ] T020 Implémenter `<footer>` commun avec copyright et liens réseaux sociaux (LinkedIn, GitHub)
- [ ] T021 [P] Copier `<footer>` dans toutes les pages HTML
- [ ] T022 Créer structure `<main>` appropriée pour chaque page avec balises sémantiques (`<section>`, `<article>`)
- [ ] T023 Valider tous les fichiers HTML avec W3C Validator - corriger erreurs

### Styles CSS Globaux (2-3h)

- [ ] T024 Créer `assets/css/main.css` avec CSS reset (box-sizing, margin, padding)
- [ ] T025 Importer variables.css dans main.css et appliquer typographie globale (font-family, line-height, font-size)
- [ ] T026 [P] Créer `assets/css/components.css` pour composants réutilisables (vide pour l'instant)
- [ ] T027 Styliser `<header>` et navigation desktop dans main.css (flexbox, espacement, couleurs)
- [ ] T028 Créer styles navigation mobile : menu hamburger caché par défaut, overlay/slide-in
- [ ] T029 Implémenter media queries responsive dans main.css (@media 768px, 1024px, 1440px)
- [ ] T030 Styliser `<footer>` dans main.css (centré, padding, liens réseaux sociaux)
- [ ] T031 Créer composants boutons dans components.css avec classes BEM (.btn, .btn--primary, .btn--secondary)
- [ ] T032 Créer composant card dans components.css (.card, .card__image, .card__content, .card__title)
- [ ] T033 Créer composant badge dans components.css (.badge, .badge--primary, variantes couleurs)
- [ ] T034 Valider CSS avec CSS Validator (W3C) - corriger erreurs critiques
- [ ] T035 Tester contrastes de couleurs avec WebAIM - ajuster si nécessaire

### Navigation Interactive (2h)

- [ ] T036 Créer `assets/js/main.js` avec initialisation et event listeners
- [ ] T037 Implémenter toggle menu hamburger (JS) : ouvrir/fermer au clic, gérer classe .menu-open
- [ ] T038 Fermer menu mobile automatiquement après clic sur un lien
- [ ] T039 Ajouter indicateur page active dans navigation : classe .active sur lien courant
- [ ] T040 [P] Implémenter bouton "Retour en haut" avec smooth scroll (optionnel mais recommandé)
- [ ] T041 Gérer focus clavier : focus visible sur tous les liens, ordre Tab logique
- [ ] T042 Ajouter attributs ARIA appropriés : aria-expanded sur menu toggle, aria-current sur page active
- [ ] T043 Tester navigation complète au clavier (Tab, Enter, Escape pour fermer menu)
- [ ] T044 Tester navigation sur mobile (320px) et desktop (1440px+)

### SEO & Meta Tags (1-2h)

- [ ] T045 [P] Ajouter meta description unique dans `index.html` (150-160 caractères)
- [ ] T046 [P] Ajouter meta description unique dans `cv.html`
- [ ] T047 [P] Ajouter meta description unique dans `projets.html`
- [ ] T048 [P] Ajouter meta description unique dans `contact.html`
- [ ] T049 [P] Implémenter Open Graph tags dans toutes les pages (og:title, og:description, og:image, og:url)
- [ ] T050 [P] Implémenter Twitter Cards dans toutes les pages (twitter:card, twitter:title, twitter:description)
- [ ] T051 Créer `sitemap.xml` à la racine avec URLs de toutes les pages
- [ ] T052 Créer `robots.txt` à la racine (User-agent: *, Allow: /, Sitemap: URL)
- [ ] T053 [P] Créer favicons multi-tailles (16x16, 32x32, 180x180, 192x192) dans `assets/images/favicon/`
- [ ] T054 [P] Ajouter liens favicon dans `<head>` de toutes les pages (icon, apple-touch-icon)
- [ ] T055 Valider meta tags avec Open Graph debugger (Facebook/LinkedIn) et Twitter Card Validator

**Checkpoint**: Structure commune complète, navigation fonctionnelle, SEO de base implémenté, validation W3C passée

---

## Phase 2: Page d'Accueil (P1 - 6-8 heures) 🎯 MVP

**Goal**: Page d'accueil impactante avec hero section, compétences clés, et CTA

**Independent Test**: Visiteur comprend qui est le professionnel et ce qu'il fait en 5 secondes

### Hero Section (2-3h)

- [ ] T056 [US1] Créer structure HTML hero section dans `index.html` : `<section class="hero">` avec nom, titre, accroche
- [ ] T057 [P] [US1] Ajouter photo profil optimisée dans `assets/images/profile/` (WebP + JPEG fallback)
- [ ] T058 [US1] Créer `assets/css/home.css` pour styles page d'accueil
- [ ] T059 [US1] Styliser hero section : layout flexbox/grid, centré, background gradient ou image
- [ ] T060 [US1] Rendre hero section responsive : 1 colonne mobile, 2 colonnes desktop (texte + image)
- [ ] T061 [US1] Ajouter animations subtiles : fade-in au chargement, respecter prefers-reduced-motion
- [ ] T062 [US1] Optimiser image profil : taille appropriée (max 300x300), compression, lazy loading si en bas de page
- [ ] T063 [US1] Tester LCP < 2.5s avec Lighthouse - optimiser si nécessaire (critical CSS, preload image)

### Section Compétences (2-3h)

- [ ] T064 [US1] Créer structure HTML section compétences : `<section class="skills">` avec 4-6 compétences
- [ ] T065 [P] [US1] Ajouter icônes compétences dans `assets/images/icons/` (SVG inline ou sprite)
- [ ] T066 [US1] Styliser section compétences dans home.css : grid layout (2 cols mobile, 3-4 cols desktop)
- [ ] T067 [US1] Créer composant skill-card : icône + titre + description courte
- [ ] T068 [US1] Ajouter hover effects sur skill cards (transform, shadow)
- [ ] T069 [US1] Assurer accessibilité icônes : alt text descriptif ou aria-label
- [ ] T070 [US1] Tester lisibilité et responsive (320px à 1440px+)

### Call-to-Action (1h)

- [ ] T071 [US1] Ajouter 2 CTA dans hero ou après compétences : "Voir mes projets" + "Me contacter"
- [ ] T072 [US1] Styliser boutons CTA avec classes .btn .btn--primary (utiliser components.css)
- [ ] T073 [US1] Ajouter liens vers `projets.html` et `contact.html`
- [ ] T074 [US1] Tester accessibilité clavier et contrastes boutons

### Optimisation Performance (1-2h)

- [ ] T075 [US1] Lancer Lighthouse sur index.html - analyser résultats
- [ ] T076 [US1] Inline critical CSS dans `<head>` de index.html si nécessaire
- [ ] T077 [P] [US1] Minifier home.css et main.js (manuellement ou outil)
- [ ] T078 [US1] Vérifier pas de ressources bloquant le rendu
- [ ] T079 [US1] Re-tester Lighthouse : objectif score ≥ 90 sur 4 catégories
- [ ] T080 [US1] Tester Core Web Vitals : LCP < 2.5s, FCP < 1.8s, CLS < 0.1

**Checkpoint**: Page d'accueil complète, attractive, performante (Lighthouse ≥ 90), responsive

---

## Phase 3: Page Curriculum Vitae (P1 - 8-10 heures) 🎯 MVP

**Goal**: CV structuré et scannable avec expériences, formation, compétences, et téléchargement PDF

**Independent Test**: Recruteur peut identifier expérience, compétences clés, et formation en 30 secondes

### Structure Sections CV (2h)

- [ ] T081 [US2] Créer structure HTML sections dans `cv.html` : Résumé, Expériences, Formation, Compétences
- [ ] T082 [US2] Ajouter navigation rapide (ancres) : liens vers #resume, #experience, #education, #skills
- [ ] T083 [US2] Créer `assets/css/cv.css` pour styles spécifiques CV
- [ ] T084 [US2] Styliser navigation ancres : sticky sidebar desktop ou menu rapide en haut mobile
- [ ] T085 [US2] Implémenter smooth scroll pour navigation ancres (CSS scroll-behavior ou JS)
- [ ] T086 [US2] Tester navigation ancres fonctionnelle sur tous devices

### Section Expériences Professionnelles (2-3h)

- [ ] T087 [US2] Créer structure HTML expériences : `<article>` par expérience avec titre, entreprise, dates, réalisations
- [ ] T088 [US2] Styliser timeline expériences dans cv.css : vertical mobile, optionnellement horizontal desktop
- [ ] T089 [US2] Ajouter design visuel timeline : ligne verticale, points pour chaque expérience
- [ ] T090 [US2] Mettre en valeur réalisations : liste `<ul>` avec puces personnalisées, gras pour chiffres clés
- [ ] T091 [US2] Rendre timeline responsive : ajuster layout selon breakpoints
- [ ] T092 [US2] Tester lisibilité et scannable en 30 secondes (test utilisateur)

### Section Formation & Compétences (2-3h)

- [ ] T093 [P] [US2] Créer structure HTML formation : `<section id="education">` avec diplômes, établissements, dates
- [ ] T094 [P] [US2] Créer structure HTML compétences : `<section id="skills">` avec catégories (Frontend, Backend, Outils)
- [ ] T095 [US2] Styliser section formation dans cv.css : liste ou cards, responsive
- [ ] T096 [US2] Styliser section compétences : badges/tags avec classes .badge (utiliser components.css)
- [ ] T097 [US2] Organiser compétences en catégories visuellement distinctes (grid ou flexbox)
- [ ] T098 [P] [US2] Ajouter optionnellement indicateur niveau compétences (barres, étoiles, ou texte)
- [ ] T099 [US2] Assurer accessibilité badges : texte lisible, contrastes corrects
- [ ] T100 [US2] Tester clarté catégories et lisibilité mobile/desktop

### Téléchargement PDF & Optimisation (1-2h)

- [ ] T101 [US2] Créer ou obtenir CV en format PDF (optimisé, < 2MB)
- [ ] T102 [US2] Placer CV PDF dans `assets/docs/cv-[nom].pdf`
- [ ] T103 [US2] Ajouter bouton téléchargement visible en haut de cv.html : "Télécharger CV PDF"
- [ ] T104 [US2] Styliser bouton téléchargement avec classe .btn .btn--primary
- [ ] T105 [US2] Ajouter date dernière mise à jour du CV (texte petit sous le bouton)
- [ ] T106 [US2] Tester téléchargement fonctionnel sur tous navigateurs
- [ ] T107 [US2] Lancer Lighthouse sur cv.html - optimiser si score < 90
- [ ] T108 [US2] Valider HTML avec W3C Validator

**Checkpoint**: Page CV complète, structurée, PDF téléchargeable, Lighthouse ≥ 90

---

## Phase 4: Page Projets/Portfolio (P1 - 10-12 heures) 🎯 MVP

**Goal**: Portfolio de projets avec visuels, détails techniques, filtres, et liens externes

**Independent Test**: Visiteur peut voir 3+ projets, comprendre technologies, et accéder à démo/code

### Structure Données Projets (1-2h)

- [ ] T109 [US3] Créer structure de données projets : JSON dans `assets/js/projects-data.js` ou hardcodé en HTML
- [ ] T110 [US3] Définir minimum 3-6 projets avec : titre, description courte, description longue, technologies, images, liens
- [ ] T111 [US3] Collecter ou créer images projets (screenshots, mockups) - placer dans `assets/images/projects/`
- [ ] T112 [US3] Optimiser images projets : format WebP + fallback JPEG, dimensions appropriées (max 800px width)
- [ ] T113 [US3] Valider données complètes et cohérentes

### Grille Projets & Cards (3-4h)

- [ ] T114 [US3] Créer structure HTML grille projets dans `projets.html` : `<section class="projects-grid">`
- [ ] T115 [US3] Créer `assets/css/projects.css` pour styles page projets
- [ ] T116 [US3] Générer cards projets en HTML : `<article class="card">` avec image, titre, description courte
- [ ] T117 [US3] Styliser grille responsive dans projects.css : 1 col mobile, 2 cols tablet, 3 cols desktop
- [ ] T118 [US3] Ajouter hover effects sur cards : transform scale, shadow, overlay
- [ ] T119 [US3] Rendre cards cliquables : lien vers détails ou modale
- [ ] T120 [US3] Implémenter lazy loading images projets dans HTML : attribut loading="lazy"
- [ ] T121 [US3] Tester responsive grid (320px à 1440px+) et accessibilité cards

### Détails Projet & Vue Détaillée (2-3h)

- [ ] T122 [US3] Décider approche détails : modale overlay ou section expandable (recommandé: modale)
- [ ] T123 [US3] Créer structure HTML modale détails projet : `<div class="modal">` avec overlay et contenu
- [ ] T124 [US3] Afficher dans modale : description complète, technologies (badges), rôle, durée, résultats
- [ ] T125 [US3] Ajouter boutons liens : "Voir la démo" (external link) + "Code source" (GitHub)
- [ ] T126 [P] [US3] Optionnellement ajouter carousel images dans modale (JS ou CSS)
- [ ] T127 [US3] Créer `assets/js/projects.js` pour logique modale : ouvrir/fermer au clic
- [ ] T128 [US3] Styliser modale dans projects.css : centré, overlay semi-transparent, responsive
- [ ] T129 [US3] Gérer fermeture modale : bouton close, clic overlay, touche Escape
- [ ] T130 [US3] Assurer accessibilité modale : focus trap, aria-hidden, focus sur close au clic overlay
- [ ] T131 [US3] Tester modale sur tous devices et navigateurs

### Filtres & Optimisation (2-3h)

- [ ] T132 [US3] Créer interface filtres dans projets.html : boutons catégories (Tous, Frontend, Backend, Fullstack, etc.)
- [ ] T133 [US3] Styliser boutons filtres dans projects.css : inline, hover states, actif distinct
- [ ] T134 [US3] Implémenter logique filtrage dans projects.js : afficher/cacher cards selon filtre
- [ ] T135 [US3] Ajouter animations transition filtres : fade-in/out, smooth
- [ ] T136 [US3] Optionnellement ajouter compteur résultats : "X projets affichés"
- [ ] T137 [US3] Optimiser toutes images projets : WebP + fallback, srcset responsive si nécessaire
- [ ] T138 [US3] Tester filtres fonctionnels et accessibilité clavier
- [ ] T139 [US3] Lancer Lighthouse sur projets.html - optimiser si score < 90
- [ ] T140 [US3] Valider HTML et tester cross-browser

**Checkpoint**: Page projets complète avec filtres, détails, liens, Lighthouse ≥ 90

---

## Phase 5: Page Contact (P2 - 6-8 heures)

**Goal**: Formulaire contact fonctionnel avec validation, envoi email, et liens directs

**Independent Test**: Utilisateur peut envoyer message en < 2 minutes et recevoir confirmation

### Structure Formulaire (2h)

- [ ] T141 [US4] Créer structure HTML formulaire dans `contact.html` : `<form>` avec Nom, Email, Sujet, Message
- [ ] T142 [US4] Ajouter labels accessibles pour chaque champ : `<label for="name">` et attribut id correspondant
- [ ] T143 [US4] Définir types input appropriés : type="text", type="email", `<textarea>` pour message
- [ ] T144 [US4] Marquer champs requis : attribut required sur Nom, Email, Message
- [ ] T145 [US4] Créer `assets/css/contact.css` pour styles page contact
- [ ] T146 [US4] Styliser formulaire dans contact.css : layout vertical, spacing cohérent, inputs full-width mobile
- [ ] T147 [US4] Styliser états inputs : focus visible, border colors, placeholder text
- [ ] T148 [US4] Ajouter bouton submit : `<button type="submit" class="btn btn--primary">Envoyer</button>`
- [ ] T149 [US4] Tester responsive formulaire (320px à 1440px+)

### Validation Côté Client (2-3h)

- [ ] T150 [US4] Créer `assets/js/contact.js` pour logique validation et envoi
- [ ] T151 [US4] Implémenter validation email : regex ou API Constraint Validation
- [ ] T152 [US4] Valider champs requis : vérifier non vides avant soumission
- [ ] T153 [US4] Créer éléments HTML pour messages erreur : `<span class="error-message">` sous chaque champ
- [ ] T154 [US4] Afficher messages erreur clairs : "Ce champ est requis", "Email invalide"
- [ ] T155 [US4] Styliser messages erreur dans contact.css : couleur rouge, texte petit, visible
- [ ] T156 [US4] Ajouter attributs ARIA pour erreurs : aria-invalid, aria-describedby, aria-live pour messages
- [ ] T157 [US4] Implémenter états visuels : border rouge sur erreur, vert sur valide
- [ ] T158 [US4] Tester validation fonctionnelle : soumettre avec erreurs, corriger, soumettre valide

### Intégration Service Envoi (2-3h)

- [ ] T159 [US4] Configurer compte EmailJS ou Formspree (selon choix Phase 0)
- [ ] T160 [US4] Obtenir clés API et configurer template email
- [ ] T161 [US4] Implémenter envoi asynchrone dans contact.js : fetch API ou SDK service
- [ ] T162 [US4] Empêcher soumission multiple : désactiver bouton pendant envoi, afficher loader
- [ ] T163 [US4] Créer éléments HTML pour messages feedback : `<div class="message message--success">` et `<div class="message message--error">`
- [ ] T164 [US4] Afficher message succès après envoi réussi : "Message envoyé ! Je vous répondrai sous 48h."
- [ ] T165 [US4] Afficher message erreur si échec : "Erreur d'envoi. Contactez-moi via [email]"
- [ ] T166 [US4] Styliser messages feedback dans contact.css : couleurs appropriées, padding, visible
- [ ] T167 [US4] Implémenter protection anti-spam : honeypot (champ caché) ou CAPTCHA discret
- [ ] T168 [US4] Tester envoi réel : vérifier email reçu, tester succès et erreurs
- [ ] T169 [US4] Tester protection anti-spam fonctionnelle

### Liens Directs & Optimisation (1h)

- [ ] T170 [P] [US4] Ajouter section liens directs dans contact.html : LinkedIn, GitHub, email cliquable
- [ ] T171 [P] [US4] Ajouter icônes réseaux sociaux (SVG) dans `assets/images/icons/`
- [ ] T172 [US4] Styliser liens réseaux : disposition horizontale, hover effects, accessibilité
- [ ] T173 [US4] Tester tous les liens fonctionnels : ouvrent dans nouvel onglet (target="_blank" rel="noopener")
- [ ] T174 [US4] Lancer Lighthouse sur contact.html - optimiser si score < 90
- [ ] T175 [US4] Valider HTML avec W3C Validator

**Checkpoint**: Formulaire contact fonctionnel, validation robuste, emails envoyés, Lighthouse ≥ 90

---

## Phase 6: Améliorations UX & Polish (P2 - 4-6 heures)

**Purpose**: Peaufiner l'expérience utilisateur, animations, transitions, et détails visuels

### Animations & Transitions (2-3h)

- [ ] T176 Ajouter animations scroll subtiles : fade-in pour sections au scroll (Intersection Observer API)
- [ ] T177 Implémenter transitions hover cohérentes : tous les boutons, cards, liens
- [ ] T178 Ajouter media query prefers-reduced-motion : désactiver animations si préférence utilisateur
- [ ] T179 Tester animations fluides sur tous devices (pas de lag, 60fps)
- [ ] T180 Valider respect prefers-reduced-motion avec DevTools

### 404 Page & États (1-2h)

- [ ] T181 Créer `404.html` à la racine avec message erreur personnalisé
- [ ] T182 Styliser 404.html : design cohérent avec le reste du site, CTA retour accueil
- [ ] T183 Tester page 404 fonctionnelle (accès URL invalide sur GitHub Pages)
- [ ] T184 [P] Ajouter skeleton screens ou spinners pour chargements (si applicable)
- [ ] T185 [P] Assurer feedback visuel sur toutes interactions : hover, focus, active, loading

### Final Polish (1h)

- [ ] T186 Vérifier cohérence visuelle globale : couleurs, typographie, espacements cross-pages
- [ ] T187 Ajuster alignements et espacements incohérents
- [ ] T188 Peaufiner micro-interactions : focus rings, hover effects, transitions
- [ ] T189 Vérifier hiérarchie visuelle claire sur toutes les pages
- [ ] T190 Test final utilisateur : demander feedback sur 2-3 personnes

**Checkpoint**: UX polie, animations subtiles, 404 personnalisée, cohérence visuelle parfaite

---

## Phase 7: Testing & Quality Assurance (P1 - 6-8 heures) ⚠️

**Purpose**: Tests complets sur tous les aspects avant déploiement - GATE CRITIQUE

**⚠️ CRITICAL**: Cette phase est NON-NÉGOCIABLE selon la constitution

### Tests Performance (2h)

- [ ] T191 Lancer Lighthouse sur `index.html` - documenter scores
- [ ] T192 [P] Lancer Lighthouse sur `cv.html` - documenter scores
- [ ] T193 [P] Lancer Lighthouse sur `projets.html` - documenter scores
- [ ] T194 [P] Lancer Lighthouse sur `contact.html` - documenter scores
- [ ] T195 Vérifier Core Web Vitals sur toutes les pages : LCP < 2.5s, FCP < 1.8s, CLS < 0.1, TTI < 3.8s
- [ ] T196 Tester performance sur connexion lente (throttling 3G Fast dans DevTools)
- [ ] T197 Si score < 90 : identifier problèmes et optimiser (images, CSS, JS)
- [ ] T198 Re-tester après optimisations jusqu'à score ≥ 90 sur 4 catégories

### Tests Accessibilité (2-3h)

- [ ] T199 Lancer axe DevTools sur `index.html` - corriger erreurs critiques
- [ ] T200 [P] Lancer axe DevTools sur `cv.html` - corriger erreurs critiques
- [ ] T201 [P] Lancer axe DevTools sur `projets.html` - corriger erreurs critiques
- [ ] T202 [P] Lancer axe DevTools sur `contact.html` - corriger erreurs critiques
- [ ] T203 Test navigation complète au clavier : Tab, Shift+Tab, Enter, Escape sur toutes les pages
- [ ] T204 Test lecteur d'écran (NVDA Windows ou VoiceOver Mac) : parcourir chaque page, tester formulaire
- [ ] T205 Vérifier tous les contrastes avec WebAIM Contrast Checker : ≥ 4.5:1 texte, ≥ 3:1 texte large
- [ ] T206 Vérifier hiérarchie titres (h1→h6) logique et sans saut sur toutes les pages
- [ ] T207 Vérifier tous les alt text images descriptifs (pas "image", "photo")
- [ ] T208 Vérifier attributs ARIA appropriés et non redondants

### Tests Cross-Browser & Responsive (2-3h)

- [ ] T209 Tester sur Chrome dernière version : toutes les pages, toutes les fonctionnalités
- [ ] T210 [P] Tester sur Firefox dernière version : toutes les pages, toutes les fonctionnalités
- [ ] T211 [P] Tester sur Safari dernière version : toutes les pages, toutes les fonctionnalités
- [ ] T212 [P] Tester sur Edge dernière version : toutes les pages, toutes les fonctionnalités
- [ ] T213 Tester responsive mobile (320px, 375px, 414px) : Chrome mobile ou émulateur
- [ ] T214 Tester responsive tablet (768px, 1024px) : Safari iPad ou émulateur
- [ ] T215 Tester responsive desktop (1440px, 1920px+) : tous navigateurs
- [ ] T216 Tester formulaire contact sur tous devices et navigateurs : validation, envoi
- [ ] T217 Tester navigation et interactions touch sur mobile/tablet

### Validation Finale (1h)

- [ ] T218 Valider HTML W3C sur `index.html` - 0 erreurs requis
- [ ] T219 [P] Valider HTML W3C sur `cv.html` - 0 erreurs requis
- [ ] T220 [P] Valider HTML W3C sur `projets.html` - 0 erreurs requis
- [ ] T221 [P] Valider HTML W3C sur `contact.html` - 0 erreurs requis
- [ ] T222 Valider CSS W3C sur `main.css` - 0 erreurs critiques
- [ ] T223 [P] Valider CSS sur `home.css`, `cv.css`, `projects.css`, `contact.css`
- [ ] T224 Vérifier console JavaScript : 0 erreurs sur toutes les pages dans tous les navigateurs
- [ ] T225 Tester tous les liens internes fonctionnels (pas de 404)
- [ ] T226 Tester tous les liens externes ouvrent dans nouvel onglet avec rel="noopener"

### Checklist Pre-Déploiement Constitution (obligatoire)

- [ ] T227 **GATE FINAL** : Compléter checklist pre-déploiement 13 points (voir constitution) - DOIT être 13/13 ✅

**Checkpoint CRITIQUE**: Tous les tests passés, score Lighthouse ≥ 90, accessibilité validée, checklist 13/13 ✅

---

## Phase 8: Deployment & Documentation (P1 - 3-4 heures)

**Purpose**: Déployer le site sur GitHub Pages et finaliser la documentation

### Préparation Déploiement (1h)

- [ ] T228 Minifier tous les CSS : main.css, components.css, home.css, cv.css, projects.css, contact.css
- [ ] T229 Minifier tous les JS : main.js, projects.js, contact.js
- [ ] T230 Vérification finale optimisation images : toutes en WebP avec fallback, tailles appropriées
- [ ] T231 Vérifier tous les chemins assets sont relatifs (pas de chemins absolus ou localhost)
- [ ] T232 Tester build local complet : ouvrir toutes les pages en local, vérifier assets chargés
- [ ] T233 Créer branch `main` ou `gh-pages` si nécessaire

### Déploiement GitHub Pages (1h)

- [ ] T234 Commit et push tous les fichiers vers repository GitHub
- [ ] T235 Configurer GitHub Pages dans Settings : source branch (main ou gh-pages), root folder
- [ ] T236 Optionnellement configurer custom domain dans Settings si domaine disponible
- [ ] T237 Vérifier HTTPS activé automatiquement (GitHub Pages)
- [ ] T238 Attendre déploiement (1-2 minutes) et accéder à URL production : [username].github.io/[repo]
- [ ] T239 Tester site complet en production : toutes les pages, tous les liens, formulaire
- [ ] T240 Vérifier URLs fonctionnelles, assets chargés, HTTPS actif

### Documentation Finale (1-2h)

- [ ] T241 Finaliser `README.md` : description projet, technologies, structure, instructions setup local
- [ ] T242 Documenter configuration formulaire dans README : service utilisé, clés API (masquées), setup
- [ ] T243 Créer guide mise à jour contenu dans README : comment modifier CV, ajouter projet, changer textes
- [ ] T244 Ajouter section "Développement" dans README : commandes, outils, tests locaux
- [ ] T245 Créer `CHANGELOG.md` initial : version 1.0.0 avec liste features implémentées
- [ ] T246 Optionnellement documenter roadmap futures améliorations (P4) : multilingue, blog, dark mode

### Post-Launch Monitoring (optionnel)

- [ ] T247 [P] Setup Google Analytics 4 ou Plausible Analytics (respect RGPD, banner consentement si EU)
- [ ] T248 [P] Configurer Google Search Console : soumettre sitemap, vérifier indexation
- [ ] T249 [P] Optionnellement setup monitoring Core Web Vitals en production

**Checkpoint FINAL**: Site déployé, HTTPS actif, documentation complète, analytics configuré ✅

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 0 (Setup)**: Aucune dépendance - peut démarrer immédiatement ✅
- **Phase 1 (Foundation)**: Dépend de Phase 0 (design system défini) - BLOQUE toutes les pages
- **Phase 2 (Accueil)**: Dépend de Phase 1 complète ✅
- **Phase 3 (CV)**: Dépend de Phase 1 complète ✅
- **Phase 4 (Projets)**: Dépend de Phase 1 complète ✅
- **Phase 5 (Contact)**: Dépend de Phase 0 (service email choisi) + Phase 1 ✅
- **Phase 6 (Polish)**: Dépend de Phases 2-5 complètes
- **Phase 7 (Testing)**: Dépend de TOUTES les phases précédentes - GATE CRITIQUE ⚠️
- **Phase 8 (Deployment)**: Dépend de Phase 7 (tests passés) - GATE FINAL ⚠️

### Parallel Opportunities

**Phase 0**: T003, T004, T006, T008 peuvent être parallèles  
**Phase 1**: T013-T015, T017, T021, T026, T034, T045-T054 peuvent être parallèles  
**Phase 2**: T057 peut être parallèle, T065 peut être parallèle, T077 peut être parallèle  
**Phase 3**: T093-T094, T098 peuvent être parallèles  
**Phase 4**: T126 optionnel peut être parallèle  
**Phase 5**: T170-T171 peuvent être parallèles, T184-T185 peuvent être parallèles  
**Phase 7**: T192-T194, T200-T202, T210-T212, T219-T221, T223 peuvent être parallèles  
**Phase 8**: T247-T249 peuvent être parallèles

### MVP Strategy (Minimum Viable Product)

**MVP = Phases 0 + 1 + 2 + 3 + 4 + 7 + 8** (sans Phase 5 Contact et Phase 6 Polish)

Ordre recommandé MVP :
1. ✅ Phase 0 : Setup & Research
2. ✅ Phase 1 : Foundation (BLOQUANT)
3. ✅ Phase 2 : Page Accueil (P1)
4. ✅ Phase 3 : Page CV (P1)
5. ✅ Phase 4 : Page Projets (P1)
6. ⚠️ Phase 7 : Testing complet (GATE)
7. 🚀 Phase 8 : Deployment

**STOP et VALIDER** après Phase 8 : MVP déployé fonctionnel !

Ensuite ajouter :
8. Phase 5 : Contact (P2)
9. Phase 6 : Polish (P2)
10. Re-tester (Phase 7 partiel)
11. Re-déployer (Phase 8)

### Incremental Delivery

Chaque phase complétée = checkpoint validé = avancement mesurable = feedback possible

---

## Implementation Strategy

### Solo Developer (Recommandé)

**Semaine 1** :
- Jours 1-2 : Phase 0 + Phase 1 (Foundation COMPLETE)
- Jours 3-4 : Phase 2 (Accueil) + Phase 3 (CV)
- Jour 5 : Phase 4 (Projets) début

**Semaine 2** :
- Jours 1-2 : Phase 4 (Projets) fin + Phase 5 (Contact)
- Jour 3 : Phase 6 (Polish)
- Jours 4-5 : Phase 7 (Testing complet) + Phase 8 (Deployment)

**Résultat** : Site complet déployé en 2 semaines temps plein

### Part-Time (Soirs/Week-ends)

**Semaines 1-2** : Phases 0 + 1 (Foundation solide)  
**Semaines 3-4** : Phases 2 + 3 (Accueil + CV)  
**Semaines 5-6** : Phase 4 (Projets)  
**Semaine 7** : Phase 5 (Contact) + Phase 6 (Polish)  
**Semaine 8** : Phase 7 (Testing) + Phase 8 (Deployment)

**Résultat** : Site complet déployé en 2 mois temps partiel

---

## Notes

- **[P]** = Tâches parallélisables (fichiers différents, pas de conflits)
- **[US#]** = User Story (US1, US2, US3, US4) pour traçabilité
- **⚠️** = Gate critique, non-négociable selon constitution
- **✅** = Checkpoint de validation obligatoire
- **🎯** = Priorité MVP

### Conventions de Commit Recommandées

- `feat: ` pour nouvelles fonctionnalités (ex: `feat: add hero section to homepage`)
- `style: ` pour styles CSS (ex: `style: responsive layout for skills section`)
- `fix: ` pour corrections (ex: `fix: menu hamburger not closing on mobile`)
- `test: ` pour tests (ex: `test: validate accessibility with axe DevTools`)
- `docs: ` pour documentation (ex: `docs: update README with setup instructions`)
- `perf: ` pour optimisations (ex: `perf: optimize images to WebP format`)
- `chore: ` pour tâches diverses (ex: `chore: minify CSS and JS files`)

### Constitution Compliance

Ce projet respecte **100% de la constitution v1.0.0** :
- ✅ Standards Web et Accessibilité (WCAG 2.1 AA)
- ✅ Performance (Lighthouse ≥ 90, Core Web Vitals)
- ✅ Maintenabilité (Architecture modulaire, BEM, documentation)
- ✅ Qualité (Validation W3C, tests cross-browser)
- ✅ Sécurité (HTTPS, protection spam, pas de données sensibles)

**Aucune exception requise** - Tous les principes non-négociables sont respectés.

---

**Total Tasks**: 249 tâches actionables  
**Estimation**: 55-72 heures (7-9 jours temps plein)  
**MVP Tasks**: ~180 tâches (Phases 0+1+2+3+4+7+8)  
**MVP Estimation**: 35-45 heures (4-6 jours temps plein)

**Document Version**: 1.0.0  
**Date de Création**: 2025-12-29  
**Statut**: Ready for Implementation ✅