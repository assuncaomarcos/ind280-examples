## Guide : Créer un projet Vite+React

Ce guide vous expliquera comment créer un projet React en utilisant Vite, un outil de construction rapide et moderne pour les applications JavaScript.

### Étape 1 : Installation de Node.js (version 18+ ou 20+)

1. **Vérifiez l'installation de Node.js :**

   - Avant de commencer, assurez-vous que Node.js est installé sur votre ordinateur. Vous aurez besoin de la version 18 ou supérieure.
   - Vous pouvez vérifier la version installée en exécutant la commande suivante dans votre terminal ou invite de commande :

   ```bash
   node -v
   ```

2. **Téléchargez et installez Node.js :**
   - Si Node.js n'est pas installé ou si vous avez une version inférieure, téléchargez la version 18 ou 20 depuis le site officiel : [https://nodejs.org/fr](https://nodejs.org/fr).

### Étape 2 : Accéder au répertoire de vos projets

- **Naviguez vers le répertoire :**

  - Ouvrez votre terminal ou invite de commande.
  - Accédez au répertoire où vous souhaitez placer votre nouveau projet React. Vous pouvez utiliser la commande `cd` pour naviguer dans vos dossiers.

  ```bash
  cd chemin/vers/votre/dossier
  ```

### Étape 3 : Créer un projet Vite

1. **Exécutez la commande suivante pour créer un projet Vite avec le modèle React :**

   ```bash
   npm create vite@latest mon-projet-react --template react
   ```

   - Cette commande initialise un nouveau projet React utilisant Vite dans un dossier nommé `mon-projet-react`.

### Étape 4 : Installer les dépendances

1. **Accédez au répertoire du projet :**

   ```bash
   cd mon-projet-react
   ```

2. **Installez les dépendances nécessaires :**

   ```bash
   npm install
   ```

   - Cette commande installe toutes les dépendances définies dans le fichier `package.json` de votre projet.

### Étape 5 : Exécuter l'application

1. **Démarrez le serveur de développement :**

   ```bash
   npm run dev
   ```

   - Cette commande démarre l'application en mode développement. Vous devriez voir une URL locale (généralement `http://localhost:3000`) où votre application est accessible dans votre navigateur.
