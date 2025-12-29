# Feature Specification: Pages du Portfolio Professionnel

**Feature Branch**: `feature/portfolio-pages`  
**Created**: 2025-12-29  
**Status**: Draft  
**Input**: Spécification des pages principales du portfolio (Accueil, Curriculum vitae, Projets, Contact)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Page d'Accueil Impactante (Priority: P1)

En tant que **recruteur ou client potentiel**, je veux voir immédiatement qui est le professionnel, ses compétences clés et ce qu'il peut m'apporter, afin de décider rapidement si je souhaite en savoir plus.

**Why this priority**: C'est le premier point de contact et détermine si le visiteur continue à explorer le site. Une page d'accueil efficace peut convertir un visiteur en lead.

**Independent Test**: Peut être testée en montrant la page pendant 5 secondes à quelqu'un et en vérifiant s'il peut répondre : "Qui est cette personne ?", "Que fait-elle ?" et "Pourquoi devrais-je la contacter ?"

**Acceptance Scenarios**:

1. **Given** je suis un visiteur arrivant sur le portfolio, **When** la page d'accueil se charge, **Then** je vois immédiatement le nom du professionnel, son titre/métier, et une accroche en moins de 2 secondes
2. **Given** je suis sur la page d'accueil, **When** je fais défiler vers le bas, **Then** je découvre une section "Compétences principales" avec 4-6 compétences clés visuellement attrayantes
3. **Given** je veux en savoir plus, **When** je cherche un appel à l'action, **Then** je trouve un bouton "Voir mes projets" ou "Me contacter" bien visible
4. **Given** je suis sur mobile, **When** j'accède à la page d'accueil, **Then** l'expérience est fluide et tous les éléments sont lisibles sans zoom
5. **Given** je suis un utilisateur malvoyant, **When** j'utilise un lecteur d'écran, **Then** je comprends la hiérarchie et le contenu de la page

---

### User Story 2 - Curriculum Vitae Structuré et Scannable (Priority: P1)

En tant que **recruteur**, je veux consulter rapidement le parcours professionnel, la formation et les compétences techniques, afin d'évaluer l'adéquation du profil avec mes besoins.

**Why this priority**: Le CV est l'élément central de décision pour un recruteur. Un CV bien structuré peut faire la différence entre un entretien et un rejet.

**Independent Test**: Un recruteur doit pouvoir identifier en moins de 30 secondes : l'expérience totale, les derniers postes, les compétences techniques principales, et le niveau d'études.

**Acceptance Scenarios**:

1. **Given** je suis sur la page CV, **When** j'arrive sur la page, **Then** je vois une structure claire : Résumé professionnel → Expériences → Formation → Compétences
2. **Given** je consulte les expériences professionnelles, **When** je lis une expérience, **Then** je vois : titre du poste, entreprise, dates, et 3-5 réalisations clés mesurables
3. **Given** je veux évaluer les compétences techniques, **When** je consulte la section compétences, **Then** je vois les technologies organisées par catégories (Frontend, Backend, Outils, etc.) avec indication du niveau
4. **Given** je veux vérifier la formation, **When** je lis la section formation, **Then** je vois : diplôme, établissement, année, et éventuelles mentions
5. **Given** je suis intéressé, **When** je veux télécharger le CV, **Then** je trouve un bouton "Télécharger CV PDF" clairement visible
6. **Given** je consulte depuis un mobile, **When** je navigue dans le CV, **Then** la chronologie reste lisible et les informations ne sont pas tronquées
7. **Given** je veux accéder rapidement à une section, **When** je cherche une navigation, **Then** je trouve un menu ancré ou une navigation rapide vers chaque section

---

### User Story 3 - Portfolio de Projets Démonstratif (Priority: P1)

En tant que **client potentiel ou recruteur technique**, je veux voir des exemples concrets de réalisations avec détails techniques et visuels, afin d'évaluer les compétences réelles et la qualité du travail.

**Why this priority**: Les projets sont la preuve tangible des compétences. C'est ce qui différencie un bon portfolio d'un simple CV.

**Independent Test**: Un visiteur doit pouvoir voir au moins 3 projets significatifs, comprendre ce qu'ils font, les technologies utilisées, et accéder à une démo ou au code source.

**Acceptance Scenarios**:

1. **Given** je suis sur la page Projets, **When** j'arrive sur la page, **Then** je vois une grille ou liste de projets avec image de prévisualisation, titre, et courte description
2. **Given** je consulte un projet, **When** je clique sur un projet, **Then** je vois : description détaillée, objectif, technologies utilisées, mon rôle, durée, et résultats/impact
3. **Given** je veux voir le projet en action, **When** je cherche des liens, **Then** je trouve des boutons "Voir la démo" et/ou "Voir le code source" (GitHub) clairement identifiables
4. **Given** je veux comprendre rapidement les technologies, **When** je regarde un projet, **Then** je vois des badges ou icônes des technologies (React, Node.js, etc.)
5. **Given** je veux filtrer les projets, **When** j'utilise des filtres, **Then** je peux filtrer par technologie, type de projet, ou date
6. **Given** je suis sur mobile, **When** je navigue entre les projets, **Then** les images se chargent rapidement (lazy loading) et la mise en page s'adapte
7. **Given** je veux plus de contexte, **When** je lis un projet, **Then** je vois des captures d'écran ou un carousel d'images du projet

---

### User Story 4 - Page de Contact Accessible et Fonctionnelle (Priority: P2)

En tant que **visiteur intéressé**, je veux pouvoir contacter facilement le professionnel par différents moyens, afin de lui proposer une opportunité ou poser une question.

**Why this priority**: Le but final du portfolio est de générer des contacts. Une page de contact optimisée maximise les conversions.

**Independent Test**: Un utilisateur doit pouvoir envoyer un message en moins de 2 minutes, ou trouver immédiatement un moyen de contact alternatif (email, LinkedIn).

**Acceptance Scenarios**:

1. **Given** je suis sur la page Contact, **When** j'arrive sur la page, **Then** je vois un formulaire de contact simple avec champs : Nom, Email, Sujet, Message
2. **Given** je remplis le formulaire, **When** je soumets sans remplir un champ obligatoire, **Then** je reçois un message d'erreur clair indiquant les champs manquants
3. **Given** je remplis le formulaire correctement, **When** je soumets, **Then** je reçois une confirmation visuelle que mon message a été envoyé et je suis informé du délai de réponse attendu
4. **Given** je préfère un contact direct, **When** je consulte la page, **Then** je vois des liens vers LinkedIn, GitHub, et/ou une adresse email cliquable
5. **Given** je suis un utilisateur malvoyant, **When** je remplis le formulaire, **Then** tous les champs ont des labels appropriés et les erreurs sont annoncées par le lecteur d'écran
6. **Given** je suis sur mobile, **When** je remplis le formulaire, **Then** le clavier s'adapte au type de champ (email, texte) et le bouton submit est accessible sans scroll
7. **Given** je souhaite éviter le spam, **When** le formulaire est soumis, **Then** il y a une protection anti-spam (honeypot ou CAPTCHA discret)

---

### User Story 5 - Navigation Fluide et Cohérente (Priority: P2)

En tant que **visiteur**, je veux naviguer facilement entre les différentes sections du portfolio, afin de trouver rapidement l'information que je cherche sans me perdre.

**Why this priority**: Une navigation claire améliore l'expérience utilisateur et réduit le taux de rebond. C'est la colonne vertébrale de l'UX du site.

**Independent Test**: Un utilisateur doit pouvoir aller de n'importe quelle page à n'importe quelle autre page en maximum 2 clics.

**Acceptance Scenarios**:

1. **Given** je suis sur n'importe quelle page, **When** je regarde en haut, **Then** je vois une barre de navigation avec liens vers : Accueil, CV, Projets, Contact
2. **Given** je suis sur une page, **When** je clique sur un lien du menu, **Then** la page se charge rapidement et je vois un indicateur visuel de la page active
3. **Given** je fais défiler vers le bas, **When** je veux retourner au menu, **Then** soit le menu reste fixe en haut (sticky), soit je trouve un bouton "Retour en haut"
4. **Given** je suis sur mobile, **When** j'accède au menu, **Then** je vois un menu hamburger qui s'ouvre en overlay ou slide-in
5. **Given** je navigue au clavier, **When** j'utilise Tab, **Then** je peux accéder à tous les liens du menu et l'ordre de focus est logique
6. **Given** je veux savoir où je suis, **When** je consulte le menu, **Then** l'item correspondant à la page actuelle est visuellement distinct (couleur, soulignement)

---

### User Story 6 - Optimisation SEO et Partage Social (Priority: P3)

En tant que **professionnel**, je veux que mon portfolio soit bien référencé sur les moteurs de recherche et partageable sur les réseaux sociaux, afin d'augmenter ma visibilité.

**Why this priority**: Le SEO apporte du trafic organique et les partages sociaux augmentent la portée. C'est un multiplicateur de visibilité à long terme.

**Independent Test**: Le site doit apparaître dans les résultats Google avec titre et description appropriés, et un partage sur LinkedIn doit afficher une carte attractive.

**Acceptance Scenarios**:

1. **Given** quelqu'un recherche mon nom sur Google, **When** les résultats s'affichent, **Then** mon portfolio apparaît avec un titre et une description pertinents
2. **Given** je partage le lien sur LinkedIn, **When** le lien est publié, **Then** une carte (Open Graph) s'affiche avec image, titre, et description
3. **Given** un moteur de recherche crawle le site, **When** il lit le code, **Then** toutes les pages ont des meta descriptions uniques et des titres appropriés
4. **Given** je veux améliorer le référencement, **When** j'analyse le site, **Then** toutes les images ont des attributs alt descriptifs
5. **Given** je veux tracker les performances SEO, **When** j'utilise des outils d'analyse, **Then** le site a un sitemap.xml et un robots.txt appropriés

---

### Edge Cases

- **Formulaire de contact** : Que se passe-t-il si le service d'envoi d'email échoue ? → Afficher un message d'erreur avec email de secours
- **Images de projets** : Comment gérer un projet sans image de prévisualisation ? → Utiliser une image placeholder cohérente avec le design
- **CV téléchargeable** : Que faire si le PDF n'est pas à jour ? → Afficher la date de dernière mise à jour du CV
- **Navigation mobile** : Comment afficher un menu avec plus de 5 items sur mobile ? → Menu hamburger avec scroll vertical si nécessaire
- **Accessibilité** : Comment gérer les animations pour les utilisateurs avec préférence "prefers-reduced-motion" ? → Désactiver les animations/transitions
- **Chargement lent** : Que voit l'utilisateur pendant le chargement des images ? → Skeleton screens ou spinners avec couleur de fond cohérente
- **Liens externes cassés** : Que faire si un lien GitHub ou démo de projet ne fonctionne plus ? → Vérification périodique + indicateur "Archived" si nécessaire
- **Langues multiples** : Comment gérer si le visiteur ne parle pas français ? → Version anglaise recommandée (P4)

## Requirements *(mandatory)*

### Functional Requirements

#### Page d'Accueil

- **FR-001**: La page d'accueil DOIT afficher le nom complet, titre professionnel, et une accroche en hero section
- **FR-002**: La page d'accueil DOIT présenter 4-6 compétences principales avec icônes ou visuels
- **FR-003**: La page d'accueil DOIT inclure au minimum un call-to-action vers Projets ou Contact
- **FR-004**: La page d'accueil DOIT se charger avec un LCP < 2.5s (conformément à la constitution)
- **FR-005**: La page d'accueil DOIT être responsive avec breakpoints à 320px, 768px, 1024px minimum

#### Page Curriculum Vitae

- **FR-006**: La page CV DOIT organiser le contenu en sections : Résumé, Expériences, Formation, Compétences
- **FR-007**: Chaque expérience professionnelle DOIT inclure : titre, entreprise, dates, et liste de réalisations
- **FR-008**: Les compétences techniques DOIVENT être catégorisées (Frontend, Backend, Outils, etc.)
- **FR-009**: La page CV DOIT offrir un bouton de téléchargement vers un PDF à jour
- **FR-010**: La page CV DOIT inclure une navigation rapide (ancres) vers chaque section principale
- **FR-011**: La chronologie DOIT être présentée de manière claire (ordre antichronologique recommandé)

#### Page Projets

- **FR-012**: La page Projets DOIT afficher minimum 3 projets avec image, titre, et description courte
- **FR-013**: Chaque projet DOIT inclure : description détaillée, technologies utilisées, rôle, et résultats
- **FR-014**: Chaque projet DOIT fournir des liens vers démo live et/ou code source (GitHub) quand disponible
- **FR-015**: Les projets DOIVENT afficher les technologies via badges ou icônes visuelles
- **FR-016**: La page DOIT implémenter le lazy loading pour les images (conformément à la constitution)
- **FR-017**: La page PEUT offrir un système de filtrage par technologie ou catégorie (Priority: P3)
- **FR-018**: Les images de projets DOIVENT être au format WebP avec fallback JPEG/PNG

#### Page Contact

- **FR-019**: La page Contact DOIT afficher un formulaire avec champs : Nom (requis), Email (requis), Sujet (optionnel), Message (requis)
- **FR-020**: Le formulaire DOIT valider l'email côté client avant soumission
- **FR-021**: Le formulaire DOIT afficher des messages d'erreur clairs et accessibles pour champs invalides
- **FR-022**: Le formulaire DOIT afficher un message de confirmation après soumission réussie
- **FR-023**: Le formulaire DOIT afficher un message d'erreur en cas d'échec d'envoi avec email de secours
- **FR-024**: La page DOIT afficher des liens directs vers LinkedIn, GitHub, et/ou email
- **FR-025**: Le formulaire DOIT implémenter une protection anti-spam (honeypot ou CAPTCHA)
- **FR-026**: Le formulaire DOIT être accessible au clavier et aux lecteurs d'écran (labels ARIA)

#### Navigation et Structure

- **FR-027**: Toutes les pages DOIVENT avoir un menu de navigation avec liens : Accueil, CV, Projets, Contact
- **FR-028**: Le menu DOIT indiquer visuellement la page active
- **FR-029**: Le menu DOIT être sticky (fixe en haut) OU inclure un bouton "Retour en haut"
- **FR-030**: Sur mobile, le menu DOIT se transformer en menu hamburger (<768px)
- **FR-031**: La navigation DOIT être accessible au clavier avec ordre de focus logique
- **FR-032**: Toutes les pages DOIVENT avoir un footer avec copyright et liens vers réseaux sociaux

#### SEO et Métadonnées

- **FR-033**: Chaque page DOIT avoir un titre unique et descriptif (<60 caractères)
- **FR-034**: Chaque page DOIT avoir une meta description unique (<160 caractères)
- **FR-035**: Le site DOIT implémenter les balises Open Graph pour partage social (og:title, og:description, og:image)
- **FR-036**: Le site DOIT implémenter les Twitter Cards pour partage Twitter
- **FR-037**: Toutes les images DOIVENT avoir des attributs alt descriptifs
- **FR-038**: Le site DOIT avoir un sitemap.xml pour référencement
- **FR-039**: Le site DOIT avoir un robots.txt approprié

#### Performance et Accessibilité (conformément à la constitution)

- **FR-040**: Toutes les pages DOIVENT atteindre un score Lighthouse ≥ 90 en Performance, Accessibility, Best Practices, SEO
- **FR-041**: Le site DOIT respecter WCAG 2.1 niveau AA (contrastes, navigation clavier, ARIA)
- **FR-042**: Le site DOIT implémenter prefers-reduced-motion pour respecter les préférences utilisateur
- **FR-043**: Le HTML DOIT utiliser des balises sémantiques appropriées (<header>, <nav>, <main>, <article>, <section>, <footer>)
- **FR-044**: Le site DOIT être entièrement fonctionnel sans JavaScript (progressive enhancement)

### Key Entities

- **Professionnel**: Représente le propriétaire du portfolio
  - Attributs : nom, titre, accroche, email, liens réseaux sociaux, photo
  
- **Expérience Professionnelle**: Représente un poste occupé
  - Attributs : titre du poste, entreprise, dates (début, fin), réalisations (liste), technologies utilisées
  
- **Formation**: Représente un diplôme ou certification
  - Attributs : diplôme, établissement, année, mention/notes, description
  
- **Compétence**: Représente une compétence technique ou soft skill
  - Attributs : nom, catégorie, niveau (optionnel), icône/logo
  
- **Projet**: Représente une réalisation professionnelle ou personnelle
  - Attributs : titre, description courte, description longue, images, technologies, rôle, durée, lien démo, lien code source, date, catégorie
  
- **Message Contact**: Représente un message envoyé via le formulaire
  - Attributs : nom expéditeur, email expéditeur, sujet, message, date d'envoi, statut

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visiteur doit pouvoir comprendre qui est le professionnel et ce qu'il fait en moins de 5 secondes sur la page d'accueil
- **SC-002**: Le taux de rebond de la page d'accueil doit être < 60% (indicateur d'engagement)
- **SC-003**: Au moins 30% des visiteurs doivent consulter la page Projets après la page d'accueil
- **SC-004**: Le temps moyen de visite doit être > 2 minutes (indicateur d'intérêt)
- **SC-005**: Au moins 5% des visiteurs doivent interagir avec la page Contact (formulaire ou liens)
- **SC-006**: Le taux de conversion du formulaire (soumissions réussies/tentatives) doit être > 80%
- **SC-007**: Le score Lighthouse global doit être ≥ 90 sur les 4 catégories pour toutes les pages
- **SC-008**: Le site doit passer tous les tests automatisés d'accessibilité (axe DevTools) sans erreurs critiques
- **SC-009**: Le site doit être validé W3C (HTML/CSS) sans erreurs
- **SC-010**: Le CV PDF doit être téléchargé au moins une fois par semaine en moyenne (après lancement)
- **SC-011**: Au moins un projet doit recevoir des clics vers démo ou code source par session utilisateur en moyenne
- **SC-012**: Le site doit se charger complètement en < 3 secondes sur connexion 3G

### User Satisfaction Metrics

- **SC-013**: Dans les tests utilisateurs, 80% des testeurs doivent trouver le site "professionnel" et "facile à naviguer"
- **SC-014**: Dans les tests d'accessibilité, des utilisateurs avec lecteurs d'écran doivent pouvoir accomplir toutes les tâches principales (consulter CV, voir projets, envoyer message)
- **SC-015**: Zéro erreur de console JavaScript en production sur navigateurs supportés

### Business Metrics

- **SC-016**: Le portfolio doit générer au moins 3 contacts qualifiés par mois (via formulaire ou réseaux sociaux)
- **SC-017**: Le portfolio doit apparaître en première page Google pour "[Nom] + [Métier]" dans les 3 mois après lancement
- **SC-018**: Le taux de conversion visiteur → contact doit être > 3% (standard industrie : 2-5%)

## Technical Considerations

### Conformité à la Constitution

Ce projet DOIT respecter la constitution du portfolio professionnel (version 1.0.0) notamment :
- Standards Web et Accessibilité (WCAG 2.1 AA)
- Budget de performance strict (LCP < 2.5s, FCP < 1.8s, CLS < 0.1)
- Maintenabilité (architecture modulaire, BEM, documentation)
- Sécurité (HTTPS, headers sécurisés, protection anti-spam)
- Checklist pre-déploiement obligatoire

### Technology Stack (Recommendations)

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Flexbox/Grid, responsive design
- **JavaScript** : ES6+ vanilla ou framework léger si nécessaire
- **Formulaire** : Solution backend (Formspree, Netlify Forms, EmailJS) ou API serverless
- **Hébergement** : GitHub Pages (déjà prévu)
- **Build** : Optionnel selon complexité (Vite, Parcel)

### Data Management

- **Contenu statique** : Toutes les données (CV, projets) peuvent être hardcodées en JSON ou directement en HTML
- **Formulaire** : Service tiers pour envoi d'email (pas de backend nécessaire)
- **Analytics** : Google Analytics ou Plausible (respect RGPD) optionnel

### Future Enhancements (Out of Scope - P4+)

- **FR-045**: Version anglaise du site (internationalisation)
- **FR-046**: Blog intégré pour articles techniques
- **FR-047**: Mode sombre/clair (dark mode toggle)
- **FR-048**: Système de testimonials/recommandations
- **FR-049**: Section "Certifications" séparée du CV
- **FR-050**: Animations avancées (parallax, scroll animations)

## Appendix

### Recommended Content Structure

```
/
├── index.html (Accueil)
├── cv.html (Curriculum Vitae)
├── projets.html (Projets)
├── contact.html (Contact)
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── docs/ (CV PDF)
├── 404.html
└── README.md
```

### Accessibility Quick Checklist

- [ ] Navigation au clavier fonctionnelle
- [ ] Contrastes de couleurs conformes WCAG AA
- [ ] Alt text sur toutes les images
- [ ] Labels sur tous les champs de formulaire
- [ ] Structure de titres hiérarchique (h1 → h6)
- [ ] ARIA labels où nécessaire
- [ ] Focus visible sur éléments interactifs
- [ ] Pas de content uniquement via couleur

### Performance Quick Checklist

- [ ] Images optimisées (WebP + fallback)
- [ ] Lazy loading images
- [ ] CSS/JS minifiés
- [ ] Critical CSS inline
- [ ] Defer/async JS non-critique
- [ ] Compression Gzip/Brotli
- [ ] Cache headers appropriés
- [ ] Pas de ressources bloquant le rendu

---

**Next Steps**: Passer à `/speckit.plan` pour créer le plan d'implémentation détaillé de ces spécifications.