# Implementation Plan: Portfolio Professionnel - Pages Principales

**Branch**: `feature/portfolio-pages` | **Date**: 2025-12-29 | **Spec**: [portfolio-pages-specification.md](./portfolio-pages-specification.md)  
**Input**: Spécification fonctionnelle des 4 pages principales du portfolio (Accueil, CV, Projets, Contact)

## Summary

Création d'un site portfolio professionnel statique hébergé sur GitHub Pages comprenant 4 pages principales : Accueil (hero + compétences), Curriculum Vitae (expériences + formation + compétences), Projets (portfolio avec filtres), et Contact (formulaire + liens). Le projet doit respecter les standards web (HTML5 sémantique, WCAG 2.1 AA), atteindre un score Lighthouse ≥ 90, et être optimisé pour les performances (LCP < 2.5s). L'approche privilégie le vanilla HTML/CSS/JS pour minimiser la complexité et maximiser la performance, avec une architecture modulaire et maintenable.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+  
**Primary Dependencies**: Aucune (vanilla stack) - bibliothèques légères possibles (ex: EmailJS pour formulaire)  
**Storage**: Contenu statique (hardcodé en HTML ou JSON) - pas de backend  
**Testing**: Tests manuels cross-browser, Lighthouse CI, axe DevTools, W3C Validator  
**Target Platform**: Web (GitHub Pages) - navigateurs modernes (Chrome, Firefox, Safari, Edge - 2 dernières versions)  
**Project Type**: Site web statique multi-pages  
**Performance Goals**: LCP < 2.5s, FCP < 1.8s, TTI < 3.8s, CLS < 0.1, Score Lighthouse ≥ 90  
**Constraints**: 
- Page d'accueil < 1MB, pages secondaires < 500KB
- Compatible mobile (320px+), tablette, desktop
- WCAG 2.1 niveau AA obligatoire
- Pas de framework JS lourd (privilégier vanilla)
- Hébergement GitHub Pages (pas de backend, HTTPS automatique)

**Scale/Scope**: 4 pages principales, ~10-15 composants CSS réutilisables, 3-6 projets portfolio, formulaire contact avec service tiers

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✅ **Standards Web et Accessibilité** - Respect WCAG 2.1 AA, HTML5 sémantique, validation W3C  
✅ **Performance et Optimisation** - Budget performance strict (Core Web Vitals), images WebP, lazy loading  
✅ **Maintenabilité du Code** - Architecture modulaire, BEM CSS, documentation README  
✅ **Qualité du Code** - Validation W3C, linting CSS/JS, tests cross-browser, Lighthouse ≥ 90  
✅ **Sécurité et Confidentialité** - HTTPS (GitHub Pages), headers sécurité, pas de données sensibles, SRI pour CDN

**Constitution Compliance**: Ce projet est entièrement conforme à la constitution v1.0.0. Aucune exception requise.

## Project Structure

### Documentation (this feature)

```text
.specify/memory/
├── constitution.md                    # Constitution du projet (déjà créé)
├── portfolio-pages-specification.md   # Spécification fonctionnelle (déjà créé)
├── portfolio-pages-plan.md           # Ce fichier (plan d'implémentation)
└── [future: tasks.md via /speckit.tasks]
```

### Source Code (repository root)

```text
MithrandirEa.github.io/
├── index.html                 # Page d'accueil
├── cv.html                    # Page Curriculum Vitae
├── projets.html               # Page Projets/Portfolio
├── contact.html               # Page Contact
├── 404.html                   # Page erreur 404
│
├── assets/
│   ├── css/
│   │   ├── main.css           # Styles globaux et variables
│   │   ├── components.css     # Composants réutilisables (boutons, cards, etc.)
│   │   ├── home.css           # Styles spécifiques page accueil
│   │   ├── cv.css             # Styles spécifiques page CV
│   │   ├── projects.css       # Styles spécifiques page projets
│   │   └── contact.css        # Styles spécifiques page contact
│   │
│   ├── js/
│   │   ├── main.js            # Script global (navigation, scroll, etc.)
│   │   ├── projects.js        # Filtrage projets, lazy loading images
│   │   └── contact.js         # Validation formulaire, envoi email
│   │
│   ├── images/
│   │   ├── profile/           # Photo profil
│   │   ├── projects/          # Screenshots projets (WebP + fallback)
│   │   ├── icons/             # Icônes technologies, réseaux sociaux
│   │   └── favicon/           # Favicon multi-tailles
│   │
│   ├── docs/
│   │   └── cv-[nom].pdf       # CV téléchargeable
│   │
│   └── fonts/                 # Fonts locales si nécessaire (sinon Google Fonts)
│
├── .gitignore                 # Git ignore (node_modules, .DS_Store, etc.)
├── README.md                  # Documentation projet
├── sitemap.xml                # Sitemap pour SEO
├── robots.txt                 # Instructions crawlers
└── package.json               # (Optionnel) Si utilisation d'outils build/lint
```

**Structure Decision**: Architecture statique simple et plate, pas de framework complexe. Chaque page HTML est indépendante avec ses propres styles modulaires. Les assets sont organisés par type pour faciliter la maintenance. Cette structure est optimale pour GitHub Pages et minimise la complexité tout en restant maintenable.

## Complexity Tracking

> **Ce projet ne viole aucun principe de la constitution - section non applicable.**

## Implementation Phases

### Phase 0: Setup & Research (Estimation: 4-6 heures)

**Objectif**: Préparer l'environnement de développement et valider les choix techniques.

#### Tâches:

1. **Setup Environnement** (1h)
   - Initialiser la structure de dossiers (assets/, css/, js/, images/)
   - Configurer .gitignore
   - Créer README.md avec instructions setup
   - Installer outils de développement locaux (Live Server pour VS Code)

2. **Recherche & Validation Techniques** (2-3h)
   - Tester solution formulaire contact (EmailJS vs Formspree vs Netlify Forms)
   - Valider format images WebP + fallback automatique
   - Rechercher polices (Google Fonts vs local)
   - Tester outils validation (W3C Validator, axe DevTools, Lighthouse CI)
   - Documenter décisions dans README

3. **Design System de Base** (1-2h)
   - Définir palette de couleurs (3-5 couleurs, vérifier contrastes WCAG AA)
   - Sélectionner typographie (2 familles max)
   - Définir système d'espacement (multiples de 8px)
   - Créer variables CSS custom properties
   - Documenter design tokens dans `assets/css/main.css`

**Livrables Phase 0**:
- ✅ Structure de dossiers créée
- ✅ Outils de développement configurés
- ✅ Solution formulaire contact choisie et documentée
- ✅ Design system défini (couleurs, typo, espacements)
- ✅ README.md initial

**Risques**:
- Service formulaire contact peut nécessiter configuration email → Prévoir 2 options (plan A et B)
- Conversion images WebP peut nécessiter outil → Prévoir script automatisation ou service en ligne

---

### Phase 1: Foundation & Core Structure (Estimation: 8-10 heures)

**Objectif**: Créer la structure HTML sémantique, navigation commune, et styles de base pour toutes les pages.

#### Tâches:

1. **Structure HTML Sémantique Commune** (2-3h)
   - Créer template HTML5 de base avec meta tags
   - Implémenter `<header>` avec navigation (menu desktop + hamburger mobile)
   - Implémenter `<footer>` avec copyright et liens réseaux
   - Créer structure `<main>` pour chaque page (index, cv, projets, contact)
   - Valider HTML avec W3C Validator
   - **Tests**: Navigation visible, liens fonctionnels, validation W3C 0 erreur

2. **Styles CSS Globaux** (2-3h)
   - Créer `main.css` avec reset CSS, variables, typography
   - Implémenter styles navigation (desktop + mobile responsive)
   - Implémenter styles footer
   - Créer composants réutilisables dans `components.css` (boutons, cards, badges)
   - Appliquer méthodologie BEM pour nommage
   - **Tests**: Responsive 320px-1440px+, contrastes WCAG AA validés

3. **Navigation Interactive** (2h)
   - Implémenter menu hamburger mobile (JS)
   - Ajouter indicateur page active dans menu
   - Implémenter bouton "Retour en haut" (optionnel mais recommandé)
   - Gérer accessibilité clavier (focus visible, ordre logique)
   - **Tests**: Navigation clavier complète, menu mobile fonctionnel, ARIA appropriés

4. **SEO & Meta Tags** (1-2h)
   - Ajouter meta descriptions uniques par page
   - Implémenter Open Graph tags
   - Implémenter Twitter Cards
   - Créer sitemap.xml
   - Créer robots.txt
   - Ajouter favicon multi-tailles
   - **Tests**: Validation meta tags, preview partage social (Open Graph)

**Livrables Phase 1**:
- ✅ 4 fichiers HTML avec structure sémantique complète
- ✅ Navigation responsive fonctionnelle (desktop + mobile)
- ✅ Footer avec liens réseaux sociaux
- ✅ Styles globaux et composants CSS de base
- ✅ SEO de base (meta tags, sitemap, robots.txt)
- ✅ Validation W3C HTML/CSS sans erreurs

**Dépendances**: Phase 0 (design system) doit être complétée

**Risques**:
- Menu hamburger peut avoir bugs cross-browser → Tester sur tous navigateurs dès implémentation
- Contrastes couleurs peuvent échouer WCAG → Utiliser outil vérification (ex: WebAIM Contrast Checker)

---

### Phase 2: Page d'Accueil (P1) (Estimation: 6-8 heures)

**Objectif**: Implémenter la page d'accueil avec hero section, compétences, et CTA.

#### Tâches:

1. **Hero Section** (2-3h)
   - HTML: Nom, titre, accroche, photo (optionnelle)
   - CSS: Design attractif, responsive, animations subtiles
   - Optimiser image profil (WebP, sizes appropriées)
   - **Tests**: Lisible en 5s, responsive, LCP < 2.5s

2. **Section Compétences** (2-3h)
   - HTML: 4-6 compétences avec icônes/visuels
   - CSS: Grid/Flexbox layout, hover effects
   - Optimiser icônes (SVG inline ou sprite)
   - **Tests**: Lisibilité, accessibilité icônes (alt text ou ARIA)

3. **Call-to-Action** (1h)
   - HTML: Boutons "Voir mes projets" / "Me contacter"
   - CSS: Styles boutons attractifs, états hover/focus
   - **Tests**: Accessibilité clavier, contraste

4. **Optimisation Performance** (1-2h)
   - Lazy loading images si nécessaire
   - Critical CSS inline
   - Minification CSS/JS
   - **Tests**: Lighthouse score ≥ 90, Core Web Vitals OK

**Livrables Phase 2**:
- ✅ Page d'accueil complète et fonctionnelle
- ✅ Hero section impactante
- ✅ Section compétences visuellement attractive
- ✅ CTA clairement visibles
- ✅ Score Lighthouse ≥ 90
- ✅ Responsive 320px+

**Dépendances**: Phase 1 (structure commune) complétée

**User Stories Couvertes**: US-001 (P1)

---

### Phase 3: Page Curriculum Vitae (P1) (Estimation: 8-10 heures)

**Objectif**: Créer une page CV structurée avec expériences, formation, compétences, et téléchargement PDF.

#### Tâches:

1. **Structure Sections CV** (2h)
   - HTML: Sections Résumé, Expériences, Formation, Compétences
   - Navigation rapide (ancres) vers sections
   - Structure sémantique (`<article>`, `<section>`)
   - **Tests**: Navigation ancres fonctionnelle, structure logique

2. **Section Expériences Professionnelles** (2-3h)
   - HTML: Timeline avec poste, entreprise, dates, réalisations
   - CSS: Design timeline responsive (vertical mobile, horizontal desktop possible)
   - Mise en valeur des réalisations (puces, gras pour chiffres clés)
   - **Tests**: Lisibilité chronologie, scannable en 30s

3. **Section Formation & Compétences** (2-3h)
   - HTML: Diplômes avec établissement, dates
   - HTML: Compétences techniques catégorisées (Frontend, Backend, Outils)
   - CSS: Badges/tags pour compétences, disposition grid/flex
   - Optionnel: Indicateur niveau compétences (visuels)
   - **Tests**: Clarté catégories, accessibilité badges

4. **Téléchargement PDF & Optimisation** (1-2h)
   - Créer/optimiser CV PDF
   - Bouton téléchargement visible
   - Ajouter date dernière mise à jour
   - Optimisation performance page
   - **Tests**: PDF téléchargeable, taille < 2MB, Lighthouse ≥ 90

**Livrables Phase 3**:
- ✅ Page CV complète avec 4 sections principales
- ✅ Timeline expériences lisible et attractive
- ✅ Compétences organisées et catégorisées
- ✅ CV PDF téléchargeable
- ✅ Navigation rapide par ancres
- ✅ Score Lighthouse ≥ 90

**Dépendances**: Phase 1 (structure commune) complétée

**User Stories Couvertes**: US-002 (P1)

---

### Phase 4: Page Projets/Portfolio (P1) (Estimation: 10-12 heures)

**Objectif**: Créer un portfolio de projets avec détails, visuels, filtres, et liens externes.

#### Tâches:

1. **Structure Données Projets** (1-2h)
   - Créer JSON ou structure HTML pour 3-6 projets
   - Données: titre, description courte/longue, technos, images, liens
   - **Tests**: Données complètes et cohérentes

2. **Grille Projets & Cards** (3-4h)
   - HTML: Grid de cards projets avec image, titre, description courte
   - CSS: Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
   - Hover effects sur cards
   - **Tests**: Responsive, accessibilité cards (liens cliquables)

3. **Détails Projet & Modale/Page** (2-3h)
   - Implémenter vue détaillée (modale ou section expandable)
   - Afficher description complète, technologies (badges), rôle, résultats
   - Liens "Voir démo" et "Code source" (GitHub)
   - Carousel images (optionnel)
   - **Tests**: Liens fonctionnels, accessibilité modale si applicable

4. **Filtres & Lazy Loading** (2-3h)
   - Implémenter filtres par technologie (JS)
   - Lazy loading images projets
   - Animations transition filtres
   - **Tests**: Filtres fonctionnels, performance images (WebP)

5. **Optimisation** (1-2h)
   - Optimiser toutes les images projets (WebP + fallback)
   - Compression, responsive images (srcset)
   - **Tests**: Lighthouse ≥ 90, toutes images optimisées

**Livrables Phase 4**:
- ✅ Page projets avec minimum 3 projets
- ✅ Cards projets attractives et cliquables
- ✅ Vue détaillée pour chaque projet
- ✅ Filtres par technologie fonctionnels
- ✅ Lazy loading images implémenté
- ✅ Liens démo/GitHub fonctionnels
- ✅ Score Lighthouse ≥ 90

**Dépendances**: Phase 1 (structure commune) complétée

**User Stories Couvertes**: US-003 (P1)

---

### Phase 5: Page Contact (P2) (Estimation: 6-8 heures)

**Objectif**: Créer une page contact avec formulaire fonctionnel, validation, et liens directs.

#### Tâches:

1. **Structure Formulaire** (2h)
   - HTML: Form avec Nom, Email, Sujet (opt), Message
   - Labels accessibles, attributs required, types input appropriés
   - CSS: Design cohérent avec le reste du site
   - **Tests**: Accessibilité labels, responsive mobile

2. **Validation Côté Client** (2-3h)
   - JS: Validation email, champs requis
   - Messages d'erreur clairs et accessibles (ARIA live)
   - États visuels (erreur, succès)
   - **Tests**: Validation fonctionnelle, messages d'erreur affichés

3. **Intégration Service Envoi** (2-3h)
   - Intégrer EmailJS/Formspree/Netlify Forms
   - Implémenter envoi asynchrone (AJAX)
   - Messages succès/erreur après soumission
   - Protection anti-spam (honeypot)
   - **Tests**: Email reçu, messages confirmations affichés

4. **Liens Directs & Optimisation** (1h)
   - Ajouter liens LinkedIn, GitHub, email cliquable
   - Icônes réseaux sociaux
   - Optimisation performance
   - **Tests**: Liens fonctionnels, Lighthouse ≥ 90

**Livrables Phase 5**:
- ✅ Formulaire contact fonctionnel et accessible
- ✅ Validation côté client robuste
- ✅ Envoi emails via service tiers
- ✅ Messages confirmations/erreurs
- ✅ Protection anti-spam
- ✅ Liens directs réseaux sociaux
- ✅ Score Lighthouse ≥ 90

**Dépendances**: Phase 1 (structure commune) complétée, Phase 0 (choix service email)

**User Stories Couvertes**: US-004 (P2)

---

### Phase 6: Améliorations UX & Polish (P2) (Estimation: 4-6 heures)

**Objectif**: Peaufiner l'expérience utilisateur, animations, transitions, et détails visuels.

#### Tâches:

1. **Animations & Transitions** (2-3h)
   - Animations scroll (fade-in, slide-in) subtiles
   - Transitions hover sur éléments interactifs
   - Respecter prefers-reduced-motion
   - **Tests**: Animations fluides, respect préférences accessibilité

2. **404 Page & Erreurs** (1h)
   - Créer page 404.html personnalisée
   - Design cohérent, liens retour
   - **Tests**: Page 404 fonctionnelle, design OK

3. **Loading States & Feedback** (1-2h)
   - Skeleton screens ou spinners pour chargements
   - Feedback visuel sur toutes interactions
   - States disabled pendant soumissions
   - **Tests**: Aucun état sans feedback

4. **Final Polish** (1h)
   - Vérifier cohérence visuelle globale
   - Ajuster espacements, alignements
   - Micro-interactions (focus, hover)
   - **Tests**: Cohérence design cross-pages

**Livrables Phase 6**:
- ✅ Animations et transitions subtiles
- ✅ Page 404 personnalisée
- ✅ Loading states et feedback visuels
- ✅ Polish visuel complet

**Dépendances**: Phases 2, 3, 4, 5 complétées

**User Stories Couvertes**: US-005 (P2)

---

### Phase 7: Testing & Quality Assurance (Estimation: 6-8 heures)

**Objectif**: Tests complets sur tous les aspects : performance, accessibilité, cross-browser, responsive.

#### Tâches:

1. **Tests Performance** (2h)
   - Lighthouse sur toutes les pages (≥ 90 requis)
   - Core Web Vitals (LCP, FCP, CLS, TTI)
   - Tests sur connexion lente (throttling 3G)
   - Optimisations si nécessaire
   - **Critère**: Score ≥ 90 sur 4 catégories

2. **Tests Accessibilité** (2-3h)
   - axe DevTools sur toutes les pages
   - Navigation complète au clavier
   - Tests lecteur d'écran (NVDA/JAWS/VoiceOver)
   - Vérification contrastes (WebAIM)
   - **Critère**: 0 erreur critique accessibilité

3. **Tests Cross-Browser** (2-3h)
   - Tests sur Chrome, Firefox, Safari, Edge
   - Tests responsive (mobile, tablet, desktop)
   - Vérification formulaire sur tous devices
   - **Critère**: Fonctionnel sur tous navigateurs cibles

4. **Validation Finale** (1h)
   - W3C Validator HTML toutes les pages
   - CSS Validator
   - Vérification console JS (0 erreurs)
   - Checklist pre-déploiement complète
   - **Critère**: Checklist 13/13 validée

**Livrables Phase 7**:
- ✅ Tous les tests passés avec succès
- ✅ Score Lighthouse ≥ 90 sur toutes les pages
- ✅ Accessibilité WCAG 2.1 AA validée
- ✅ Cross-browser compatible
- ✅ Validation W3C HTML/CSS
- ✅ Checklist pre-déploiement complétée

**Dépendances**: Toutes les phases précédentes complétées

---

### Phase 8: Deployment & Documentation (Estimation: 3-4 heures)

**Objectif**: Déployer le site sur GitHub Pages et finaliser la documentation.

#### Tâches:

1. **Préparation Déploiement** (1h)
   - Minification CSS/JS finale
   - Optimisation images finale
   - Vérification chemins assets (relatifs)
   - Configuration GitHub Pages settings
   - **Tests**: Build réussi, assets chargés

2. **Déploiement GitHub Pages** (1h)
   - Push vers branche main
   - Configuration custom domain (si applicable)
   - Vérification HTTPS
   - Tests sur URL production
   - **Tests**: Site accessible en production

3. **Documentation Finale** (1-2h)
   - Finaliser README.md (setup, structure, maintenance)
   - Documenter configuration (EmailJS keys, etc.)
   - Guide de mise à jour du contenu
   - Changelog initial
   - **Tests**: Documentation claire et complète

4. **Post-Launch Monitoring** (optionnel)
   - Setup Google Analytics ou Plausible (respect RGPD)
   - Monitoring Core Web Vitals
   - **Tests**: Analytics fonctionnel

**Livrables Phase 8**:
- ✅ Site déployé sur GitHub Pages
- ✅ HTTPS fonctionnel
- ✅ Documentation complète
- ✅ Guide maintenance et mise à jour
- ✅ Analytics configuré (optionnel)

**Dépendances**: Phase 7 (tests) complétée avec succès

---

## Phase Summary & Timeline

| Phase | Description | Estimation | Priorité | Dépendances |
|-------|-------------|------------|----------|-------------|
| **Phase 0** | Setup & Research | 4-6h | P1 | Aucune |
| **Phase 1** | Foundation & Core | 8-10h | P1 | Phase 0 |
| **Phase 2** | Page Accueil | 6-8h | P1 | Phase 1 |
| **Phase 3** | Page CV | 8-10h | P1 | Phase 1 |
| **Phase 4** | Page Projets | 10-12h | P1 | Phase 1 |
| **Phase 5** | Page Contact | 6-8h | P2 | Phase 0, Phase 1 |
| **Phase 6** | UX & Polish | 4-6h | P2 | Phases 2-5 |
| **Phase 7** | Testing & QA | 6-8h | P1 | Toutes |
| **Phase 8** | Deployment | 3-4h | P1 | Phase 7 |
| **TOTAL** | | **55-72h** | | |

**Estimation globale**: 55-72 heures de développement (environ 7-9 jours de travail à temps plein, ou 2-3 semaines à temps partiel)

## Risk Management

### Risques Identifiés

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Service email formulaire non fonctionnel | Haut | Moyen | Prévoir 2 solutions backup (EmailJS + Formspree), tester en Phase 0 |
| Performance non atteinte (Lighthouse < 90) | Haut | Faible | Optimisation continue, tests fréquents dès Phase 2 |
| Accessibilité non conforme WCAG AA | Haut | Moyen | Tests axe DevTools à chaque phase, review clavier systématique |
| Problèmes cross-browser Safari/iOS | Moyen | Moyen | Tests Safari dès Phase 1, utiliser Autoprefixer CSS |
| Images trop lourdes (> budget) | Moyen | Moyen | Script compression automatique, WebP obligatoire |
| Contenu CV/projets non prêt | Moyen | Faible | Utiliser contenu placeholder, collecter contenu en Phase 0 |
| Délai dépassé | Faible | Moyen | Priorisation stricte P1/P2, MVP = Phases 0-4 + 7-8 |

### Stratégie de Mitigation Globale

- **Tests continus** : Ne pas attendre Phase 7 pour tester
- **Validation incrementale** : Checklist après chaque phase
- **Priorisation stricte** : MVP = Accueil + CV + Projets (Phases 0-4)
- **Communication** : Clarifier attentes et blockers rapidement
- **Documentation** : Documenter décisions techniques au fur et à mesure

## Success Metrics (Post-Launch)

### Metrics Techniques (Court Terme - J+7)
- ✅ Score Lighthouse ≥ 90 sur toutes les pages (4 catégories)
- ✅ 0 erreurs console JavaScript
- ✅ 0 erreurs validation W3C HTML/CSS
- ✅ 0 erreurs critiques accessibilité (axe DevTools)
- ✅ LCP < 2.5s, FCP < 1.8s, CLS < 0.1 sur toutes les pages

### Metrics Utilisateurs (Moyen Terme - M+1)
- 📊 Taux de rebond < 60%
- 📊 Temps moyen visite > 2 minutes
- 📊 30% visiteurs consultent page Projets
- 📊 5% visiteurs interagissent avec Contact
- 📊 Taux conversion formulaire > 80%

### Metrics Business (Long Terme - M+3)
- 📊 3 contacts qualifiés/mois minimum
- 📊 Apparition première page Google "[Nom] + [Métier]"
- 📊 Taux conversion visiteur → contact > 3%

## Next Steps

1. ✅ **Constitution créée** (Complété)
2. ✅ **Spécification fonctionnelle créée** (Complété)
3. ✅ **Plan d'implémentation créé** (Ce document - Complété)
4. ⏭️ **Prochaine étape**: `/speckit.tasks` pour générer les tâches détaillées implémentables
5. ⏭️ **Ensuite**: Commencer Phase 0 (Setup & Research)

## Appendix

### Pre-Deployment Checklist (Constitution)

Avant chaque déploiement, valider :

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

### Recommended Tools

- **Développement**: VS Code, Live Server extension
- **Validation**: W3C Validator, CSS Validator
- **Performance**: Lighthouse CI, PageSpeed Insights
- **Accessibilité**: axe DevTools, WAVE, NVDA/JAWS
- **Images**: Squoosh, ImageOptim, SVGO
- **Email**: EmailJS ou Formspree
- **Analytics**: Plausible (RGPD-friendly) ou Google Analytics

### References

- [Constitution Portfolio v1.0.0](./constitution.md)
- [Spécification Fonctionnelle](./portfolio-pages-specification.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Document Version**: 1.0.0  
**Dernière Mise à Jour**: 2025-12-29  
**Auteur**: GitHub Copilot  
**Statut**: Ready for Task Breakdown