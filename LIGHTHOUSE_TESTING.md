# Testing Performance avec Lighthouse

## Objectifs de Performance

### Core Web Vitals Cibles

- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **FID** (First Input Delay): < 100ms ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅

### Scores Lighthouse Cibles

- **Performance**: ≥ 90 🎯
- **Accessibility**: ≥ 90 🎯
- **Best Practices**: ≥ 90 🎯
- **SEO**: ≥ 90 🎯

---

## Méthode 1: Chrome DevTools (Recommandé) ⭐

### Étapes

1. Ouvrir `index.html` dans **Google Chrome**
2. Appuyer sur **F12** (ou Ctrl+Shift+I) pour ouvrir DevTools
3. Cliquer sur l'onglet **Lighthouse** (ou **PageSpeed Insights**)
4. Configuration:
   - **Mode**: Navigation (Default)
   - **Device**: Mobile + Desktop (tester les deux)
   - **Categories**: Cocher les 4 (Performance, Accessibility, Best Practices, SEO)
5. Cliquer sur **"Analyze page load"**
6. Attendre l'analyse (30-60 secondes)

### Analyser les Résultats

#### Performance Metrics

- **FCP** (First Contentful Paint): Temps avant le premier élément visible
- **LCP** (Largest Contentful Paint): Temps avant l'élément principal (hero image)
- **TBT** (Total Blocking Time): Temps où le thread principal est bloqué
- **CLS** (Cumulative Layout Shift): Stabilité visuelle
- **Speed Index**: Vitesse de rendu visuel

#### Opportunités d'Optimisation

Lighthouse suggère automatiquement:
- Images non optimisées
- CSS/JS bloquant le rendu
- Ressources non compressées
- Cache browser non configuré

---

## Méthode 2: PageSpeed Insights (En Ligne)

### Prérequis

⚠️ **Nécessite déploiement sur GitHub Pages**

### Étapes

1. Déployer le site sur GitHub Pages
2. Ouvrir https://pagespeed.web.dev/
3. Entrer l'URL: `https://mithrandirea.github.io/`
4. Cliquer sur **"Analyser"**
5. Consulter les résultats Mobile et Desktop

### Avantages

- ✅ Teste depuis des serveurs Google (conditions réelles)
- ✅ Compare avec d'autres sites
- ✅ Données Field Data (utilisateurs réels si disponible)
- ✅ Suggestions d'optimisation détaillées

---

## Méthode 3: Lighthouse CI (Ligne de Commande)

### Installation

```powershell
# Installer Lighthouse globalement
npm install -g lighthouse

# Vérifier l'installation
lighthouse --version
```

### Lancer un Test

```powershell
# Naviguer vers le dossier du projet
cd "C:\Users\Mithrandir\Projets\Pro\Portfolio_github\MithrandirEa.github.io"

# Démarrer Live Server ou serveur local (port 5500 par défaut)
# Puis dans un autre terminal:

# Test Mobile
lighthouse http://127.0.0.1:5500/index.html --output html --output-path ./lighthouse-mobile.html --preset=perf --emulated-form-factor=mobile

# Test Desktop
lighthouse http://127.0.0.1:5500/index.html --output html --output-path ./lighthouse-desktop.html --preset=perf --emulated-form-factor=desktop
```

### Générer un Rapport JSON

```powershell
lighthouse http://127.0.0.1:5500/index.html --output json --output-path ./lighthouse-report.json
```

---

## Optimisations Déjà Implémentées

### 1. Images Optimisées

✅ **WebP + JPEG Fallback**
```html
<picture>
  <source srcset="assets/images/profile/profile.webp" type="image/webp">
  <img src="assets/images/profile/profile.jpg" loading="eager" width="300" height="300">
</picture>
```

✅ **Dimensions Explicites** (évite CLS)
```html
width="300" height="300"
```

✅ **Loading Strategy**
- `loading="eager"` pour hero image (above the fold)
- `loading="lazy"` pour images en bas de page (à implémenter plus tard)

### 2. Preload Image Critique

✅ **Preload Hero Image** (ajouté dans `<head>`)
```html
<link rel="preload" as="image" href="assets/images/profile/profile.webp" type="image/webp">
```

### 3. Fonts Optimisées

✅ **Preconnect Google Fonts**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

✅ **Font Display Swap**
```html
&display=swap
```

### 4. CSS Optimisé

✅ **Variables CSS** (pas de duplication)
✅ **BEM Naming** (sélecteurs efficaces)
✅ **Mobile-First** (CSS minimal pour mobile)

### 5. Animations Respectueuses

✅ **Prefers-Reduced-Motion**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

---

## Optimisations Supplémentaires (Si Score < 90)

### 1. Critical CSS Inline

Si Lighthouse suggère "Eliminate render-blocking resources":

1. Identifier le CSS critique (above the fold)
2. Inline dans `<head>`:
```html
<style>
  /* Critical CSS here */
  .hero { ... }
  .hero__container { ... }
</style>
```
3. Charger le reste en defer:
```html
<link rel="preload" href="assets/css/home.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 2. Minifier CSS/JS

```powershell
# Via NPM (csso pour CSS)
npm install -g csso-cli
csso assets/css/home.css -o assets/css/home.min.css

# Via NPM (terser pour JS)
npm install -g terser
terser assets/js/main.js -o assets/js/main.min.js --compress --mangle
```

Puis mettre à jour les liens dans HTML:
```html
<link rel="stylesheet" href="assets/css/home.min.css">
<script src="assets/js/main.min.js" defer></script>
```

### 3. Compression Serveur (GitHub Pages)

✅ GitHub Pages active automatiquement:
- **Gzip/Brotli** pour CSS, JS, HTML
- **Cache Headers** appropriés

Aucune action requise.

### 4. Service Worker (PWA)

Pour un caching avancé (Phase 7+):

```javascript
// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('portfolio-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/assets/css/main.css',
        '/assets/js/main.js',
        '/assets/images/profile/profile.webp'
      ]);
    })
  );
});
```

---

## Checklist Testing

### Avant Test

- [ ] Images de profil optimisées (< 30KB WebP, < 50KB JPEG)
- [ ] Live Server démarré (ou GitHub Pages déployé)
- [ ] Cache navigateur vidé (Ctrl+Shift+Delete)
- [ ] DevTools fermé puis réouvert

### Pendant Test

- [ ] Lighthouse exécuté en mode **Navigation**
- [ ] Test **Mobile** effectué
- [ ] Test **Desktop** effectué
- [ ] Rapports HTML générés et sauvegardés

### Après Test

- [ ] Score Performance ≥ 90
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s
- [ ] CLS < 0.1
- [ ] Opportunités d'optimisation notées
- [ ] Actions correctives identifiées si nécessaire

---

## Interpréter les Résultats

### Score 90-100 (Vert) ✅

**Excellent!** Pas d'optimisations nécessaires.

### Score 50-89 (Orange) ⚠️

**Bon, mais améliorable**:
- Optimiser les images prioritaires
- Réduire le CSS bloquant
- Minifier les ressources

### Score 0-49 (Rouge) ❌

**Nécessite optimisation urgente**:
- Revoir l'architecture CSS/JS
- Compresser agressivement les images
- Implémenter lazy loading
- Considérer CDN pour fonts

---

## Surveillance Continue

### Après Chaque Modification

1. Re-tester avec Lighthouse
2. Comparer avec score précédent
3. Documenter les régressions
4. Corriger immédiatement si score < 90

### Outils de Monitoring (Post-Déploiement)

- **Google Search Console**: Core Web Vitals réels
- **Cloudflare Analytics**: Performance globale
- **WebPageTest**: Tests multi-localisations

---

## Commandes Rapides

```powershell
# Démarrer Live Server (VS Code)
# Ctrl+Shift+P → "Live Server: Open with Live Server"

# Test Lighthouse rapide
lighthouse http://127.0.0.1:5500/index.html --only-categories=performance --quiet

# Test complet avec rapport
lighthouse http://127.0.0.1:5500/index.html --output html --output-path ./report.html --view
```

---

## Ressources

- **Lighthouse Documentation**: https://developer.chrome.com/docs/lighthouse/
- **Web.dev Guides**: https://web.dev/performance/
- **Core Web Vitals**: https://web.dev/vitals/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
