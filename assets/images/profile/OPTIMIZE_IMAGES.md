# Optimisation des Images de Profil

## État Actuel

- `profile.webp`: **94.6 KB** (cible: < 30 KB)
- `profile.jpg`: **129.87 KB** (cible: < 50 KB)

## Objectif

Réduire la taille des fichiers pour améliorer les performances (LCP < 2.5s) tout en maintenant une qualité visuelle acceptable.

---

## Méthode 1: Squoosh.app (Recommandé) ⭐

### Étapes pour WebP

1. Ouvrir https://squoosh.app/
2. Glisser-déposer `profile.webp`
3. Dans le panneau de droite:
   - Sélectionner **WebP**
   - Régler **Quality: 75-80**
   - Activer **Effort: 6** (meilleur ratio qualité/taille)
4. Ajuster la qualité jusqu'à obtenir **< 30 KB**
5. Comparer visuellement les deux images
6. Télécharger et remplacer `profile.webp`

### Étapes pour JPEG

1. Glisser-déposer `profile.jpg`
2. Dans le panneau de droite:
   - Sélectionner **MozJPEG**
   - Régler **Quality: 85-90**
   - Activer **Progressive**
   - Régler **Smoothing: 0**
3. Ajuster jusqu'à obtenir **< 50 KB**
4. Vérifier la qualité visuelle
5. Télécharger et remplacer `profile.jpg`

---

## Méthode 2: TinyPNG / TinyJPG

### Compression en Ligne

1. Ouvrir https://tinypng.com/ ou https://tinyjpg.com/
2. Glisser-déposer les images
3. Télécharger les versions compressées (réduction ~60-70%)
4. Vérifier les tailles finales
5. Si nécessaire, repasser dans Squoosh pour ajustement fin

**Note**: TinyPNG supporte WebP et JPEG.

---

## Méthode 3: ImageMagick (Ligne de Commande)

### Installer ImageMagick

```powershell
# Via Chocolatey
choco install imagemagick

# Via Scoop
scoop install imagemagick

# Ou télécharger depuis https://imagemagick.org/
```

### Compresser WebP

```powershell
# Naviguer vers le dossier
cd "C:\Users\Mithrandir\Projets\Pro\Portfolio_github\MithrandirEa.github.io\assets\images\profile"

# Compresser WebP (quality 80)
magick convert profile.webp -quality 80 -define webp:method=6 profile-optimized.webp

# Vérifier la taille
Get-Item profile-optimized.webp | Select-Object Name, Length
```

### Compresser JPEG

```powershell
# Compresser JPEG (quality 85)
magick convert profile.jpg -quality 85 -interlace Plane -sampling-factor 4:2:0 profile-optimized.jpg

# Vérifier la taille
Get-Item profile-optimized.jpg | Select-Object Name, Length
```

**Si encore trop lourd**, réduire la qualité par paliers de 5 jusqu'à atteindre la cible.

---

## Méthode 4: Photoshop / GIMP

### Photoshop

1. Ouvrir l'image dans Photoshop
2. Fichier → Exporter → Exporter sous...
3. **Pour WebP**:
   - Format: WebP
   - Qualité: 75-80
   - Méthode: Plus lent (meilleure compression)
4. **Pour JPEG**:
   - Format: JPEG
   - Qualité: 8-9 (sur 12)
   - Progressive activé
5. Enregistrer et vérifier la taille

### GIMP (Gratuit)

1. Ouvrir l'image dans GIMP
2. Fichier → Exporter sous...
3. **Pour WebP**:
   - Extension: `.webp`
   - Qualité: 75-80
   - Cocher "Use lossless encoding" = NON
4. **Pour JPEG**:
   - Extension: `.jpg`
   - Qualité: 85-90
   - Cocher "Progressive"
5. Exporter et vérifier la taille

---

## Vérification Post-Compression

### Vérifier les Tailles

```powershell
Get-Item "profile.*" | Select-Object Name, Length, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}}
```

### Objectifs à Atteindre

- ✅ `profile.webp` < 30 KB
- ✅ `profile.jpg` < 50 KB
- ✅ Qualité visuelle acceptable (pas de compression visible à l'œil nu)
- ✅ Dimensions 300x300px préservées

### Test Visuel

1. Ouvrir `index.html` dans un navigateur
2. Vérifier que la photo de profil est nette et sans artefacts
3. Tester sur mobile et desktop
4. Zoomer pour vérifier les détails du visage

---

## Impact Performance

### Avant Optimisation

- WebP: 94.6 KB
- JPEG: 129.87 KB
- **Total**: 224.47 KB (mais seul 1 fichier chargé selon support navigateur)

### Après Optimisation (Cible)

- WebP: < 30 KB
- JPEG: < 50 KB
- **Gain**: ~65-68% de réduction

### Bénéfices Attendus

- ⚡ Amélioration du LCP (Largest Contentful Paint)
- 📱 Chargement plus rapide sur mobile
- 💰 Économie de bande passante
- 🎯 Score Lighthouse > 90

---

## Checklist Finale

- [ ] `profile.webp` compressé < 30 KB
- [ ] `profile.jpg` compressé < 50 KB
- [ ] Dimensions 300x300px vérifiées
- [ ] Qualité visuelle validée sur navigateur
- [ ] Test mobile et desktop effectué
- [ ] Lighthouse re-testé avec nouveau score LCP

---

## Notes Importantes

⚠️ **Sauvegarde**: Avant de remplacer les fichiers, créer une copie de sauvegarde:

```powershell
Copy-Item profile.webp profile-original.webp
Copy-Item profile.jpg profile-original.jpg
```

💡 **Compromis Qualité/Taille**: 
- Commencer avec une qualité élevée (80-85)
- Réduire progressivement jusqu'à atteindre la taille cible
- Toujours vérifier visuellement sur plusieurs devices

🎯 **Priorité**: WebP est prioritaire car c'est le format chargé par la majorité des navigateurs modernes (Chrome, Firefox, Edge, Safari 14+).
