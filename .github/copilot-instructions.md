# Règles de Versionnage et Git (GitHub Flow)

## Conventions de Nommage des Branches
- Ne propose jamais de commandes pour travailler ou faire des commits directement sur la branche `main`.
- Les noms de branches doivent suivre ce format : `type/courte-description-en-kebab-case`.
- Les types autorisés pour les préfixes de branches sont : `feature`, `bugfix`, `hotfix`, `chore`.

## Conventions de Commits (Conventional Commits)
- Format exigé : `type(portée): description brève`.
- Types autorisés : `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.
- Exemple de bon commit : `feat(facturation): ajout du calcul de la tva`.

## Versionnage
- Le projet utilise le Semantic Versioning (SemVer) : `vMAJOR.MINOR.PATCH`.