# Exemples du cours 11 : Authentification et Autorisation

Ce dossier contient des exemples pratiques sur l'authentification et l'autorisation,
illustrant l'utilisation combinée de **Node.js**, **Express**, **JWT** et
**React Native**. Ces exemples démontrent comment créer une API REST sécurisée et
une application mobile qui interagit avec cette API.

## Contenu du dépôt

### 1. `docker-compose.yml`

Un fichier pour lancer un conteneur MongoDB. Ce conteneur est utilisé pour
stocker les données des utilisateurs et des recettes nécessaires à l'exécution des exemples.

### 2. `api_with_auth`

Un projet démontrant une API REST construite avec Node.js, Express et JWT.
Cette API permet :

- L'inscription et l'authentification des utilisateurs avec un e-mail et un mot de passe.
- La génération d'un JWT pour accéder aux routes protégées.
- La récupération d'informations sur des recettes.

### 3. `dishes_app`

Une application React Native intégrée à l'API REST. Elle permet :

- L'authentification des utilisateurs via e-mail et mot de passe.
- L'utilisation du JWT fourni pour effectuer des requêtes sécurisées vers l'API.
- L'affichage des informations sur les recettes récupérées depuis l'API.

---

## Remarque sur les fichiers `.env`

Dans ce dépôt, vous trouverez des fichiers nommés `.env_example` à deux endroits:

- À la **racine du projet**.
- Dans le dossier **`api_with_auth`**.

Ces fichiers servent d'exemples pour créer vos propres fichiers `.env`, qui
contiennent des informations sensibles comme les clés secrètes et les URL de
connexion à la base de données. Les fichiers `.env` ne sont pas inclus dans le
dépôt pour des raisons de sécurité.

### Utilisation des fichiers `.env_example`

1. **Copiez le fichier exemple :**
    - Dupliquez le fichier `.env_example` et renommez-le en `.env` :
      ```bash
      cp .env_example .env
      ```

2. **Modifiez les valeurs nécessaires :**
    - Dans le fichier `.env`, remplacez les valeurs des variables d'environnement
      (par exemple, `MONGO_URI`, `JWT_SECRET`) par celles adaptées à votre environnement.

### Exemple de fichier `.env`

Voici un aperçu des variables couramment configurées dans le fichier `.env` :

```dotenv
# Fichier .env
MONGO_URI=mongodb://root:password@localhost:27017/database_name?authSource=admin
JWT_SECRET=your_secret_key
```

---

## Instructions pour exécuter les exemples

### 1. Démarrer le conteneur MongoDB

Exécutez la commande suivante pour démarrer MongoDB via Docker Compose :

```bash
docker-compose up -d
```

### 2. Lancer l'API

Accédez au répertoire `api_with_auth` et installez les dépendances nécessaires avec :

```bash
npm install
```

Ensuite, démarrez le serveur API en mode développement :

```bash
npm run dev
```

### 3. Lancer l'application React Native

Accédez au répertoire `dishes_app` et assurez-vous que l'adresse de l'API est
correctement configurée dans le fichier `config.js`. Modifiez la clé `API_BASE_URL`
pour qu'elle pointe vers l'adresse où l'API est accessible (par exemple,
`http://10.0.2.2:3000` pour un émulateur Android).

Installez les dépendances nécessaires :

```bash
npx expo install
```

Démarrez l'application avec :

```bash
npx expo start
```

---

## Exemples d'interaction avec l'API via `curl`

Le notebook Colab utilisé pendant le cours fournit des exemples détaillés pour interagir avec l'API en utilisant l'outil
`curl`. Ces exemples incluent :

- **Inscription d'un utilisateur** : Envoi d'une requête `POST` avec un e-mail, un mot de passe et un nom pour créer un
  nouvel utilisateur.
- **Connexion d'un utilisateur** : Envoi d'une requête `POST` avec les informations d'identification pour obtenir un
  jeton JWT.
- **Accès aux routes protégées** : Utilisation du JWT dans l'en-tête `Authorization` pour interroger des routes
  sécurisées, comme la récupération des recettes.
