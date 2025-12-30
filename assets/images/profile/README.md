# Photo de Profil - Instructions

## 📋 Fichiers Requis

Ce dossier doit contenir votre photo de profil optimisée pour le web :

```
assets/images/profile/
├── profile.webp         # Format moderne (300x300px)
├── profile.jpg          # Fallback JPEG (300x300px)
└── README.md            # Ce fichier
```

## 🎨 Spécifications Photo

### Format et Taille
- **Dimensions** : 300x300px (carré)
- **Format principal** : WebP (meilleure compression)
- **Format fallback** : JPEG/JPG (compatibilité navigateurs anciens)
- **Poids cible** : 
  - WebP : < 30 KB
  - JPEG : < 50 KB

### Qualité
- **WebP** : Quality 80-85
- **JPEG** : Quality 85-90
- **Photo** : Haute résolution, nette, bien éclairée
- **Background** : Neutre ou professionnel (idéalement uni)

## 🛠️ Méthodes de Préparation

### Option 1 : Squoosh (Recommandé - En ligne)

1. **Aller sur** : [https://squoosh.app/](https://squoosh.app/)
2. **Upload** votre photo originale (haute résolution)
3. **Redimensionner** :
   - Width: 300px
   - Height: 300px
   - Method: Lanczos3 (meilleure qualité)
   - Cocher "Maintain aspect ratio" si nécessaire, puis recadrer
4. **Format WebP** (panneau de droite) :
   - Compression: 80-85
   - Preview le poids (< 30 KB)
5. **Télécharger** comme `profile.webp`
6. **Changer format** en panneau droit vers "MozJPEG"
7. **Compression** : 85-90
8. **Télécharger** comme `profile.jpg`

### Option 2 : Photoshop/GIMP

**Photoshop :**
1. Ouvrir votre photo
2. Image → Image Size → 300x300px
3. Recadrer si nécessaire (outil Crop, ratio 1:1)
4. File → Export → Save for Web
5. Format JPEG, Quality 85-90
6. Save as `profile.jpg`
7. Utiliser plugin WebP ou convertir en ligne

**GIMP :**
1. Ouvrir la photo
2. Image → Scale Image → 300x300px
3. Filters → Enhance → Sharpen (léger)
4. File → Export As → `profile.jpg`
5. Quality 85-90
6. Convertir en WebP avec un outil en ligne

### Option 3 : CLI (ImageMagick)

Si vous avez ImageMagick installé :

```bash
# Redimensionner et créer JPEG
convert photo-originale.jpg -resize 300x300^ -gravity center -extent 300x300 -quality 90 profile.jpg

# Créer version WebP
convert profile.jpg -quality 85 profile.webp
```

### Option 4 : Services en Ligne

**TinyPNG** : [https://tinypng.com/](https://tinypng.com/)
- Upload photo 300x300px
- Téléchargement automatique optimisé

**CompressJPEG** : [https://compressjpeg.com/](https://compressjpeg.com/)
- Compression intelligente
- Qualité ajustable

**CloudConvert** : [https://cloudconvert.com/](https://cloudconvert.com/)
- Conversion vers WebP
- Redimensionnement simultané

## 📸 Conseils Photo Professionnelle

### Do's ✅
- **Éclairage naturel** : Lumière douce, pas de flash direct
- **Background neutre** : Uni ou légèrement flouté
- **Tenue professionnelle** : Sobre et appropriée
- **Expression** : Sourire naturel et confiant
- **Cadrage** : Visage et épaules, regard camera
- **Résolution originale** : Minimum 600x600px avant redimensionnement

### Don'ts ❌
- ❌ Photos floues ou mal éclairées
- ❌ Selfies avec téléphone visible
- ❌ Background chargé ou distrayant
- ❌ Filtres Instagram excessifs
- ❌ Photos de vacances ou informelles
- ❌ Recadrage trop serré (visage coupé)

### Alternatives si pas de photo

**Options gratuites :**
- **UI Avatars** : [https://ui-avatars.com/](https://ui-avatars.com/)
  - Générateur d'avatars avec initiales
  - Exemple : `https://ui-avatars.com/api/?name=Clement+Scipion&size=300&background=14213D&color=FCA311`

- **Boring Avatars** : [https://boringavatars.com/](https://boringavatars.com/)
  - Avatars géométriques colorés

- **Dicebear** : [https://www.dicebear.com/](https://www.dicebear.com/)
  - Multiples styles d'avatars

## ✅ Vérification

Après ajout des fichiers :

1. **Poids** : Vérifier < 30 KB (WebP) et < 50 KB (JPEG)
2. **Dimensions** : Exactement 300x300px
3. **Qualité visuelle** : Nette et professionnelle
4. **Test navigateur** : 
   - Chrome/Edge : WebP chargé
   - Safari/Firefox : WebP ou JPEG selon support
5. **Lighthouse** : Vérifier score performance > 90

## 🔗 Code HTML (Déjà Implémenté)

Le code HTML dans `index.html` utilise déjà `<picture>` pour :
- WebP en priorité (format moderne)
- JPEG en fallback (compatibilité)
- `loading="eager"` (chargement immédiat, hero section)
- `width` et `height` (éviter layout shift)

```html
<picture>
  <source srcset="assets/images/profile/profile.webp" type="image/webp">
  <img src="assets/images/profile/profile.jpg" 
       alt="Clément SCIPION - Développeur Python" 
       class="hero__photo"
       width="300" 
       height="300"
       loading="eager">
</picture>
```

---

**Action requise** : Ajouter vos fichiers `profile.webp` et `profile.jpg` dans ce dossier.
