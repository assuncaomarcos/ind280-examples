# Exemples du cours 10 : Node.js, MongoDB et Mongoose

Ce dossier contient des exemples illustrant l'utilisation combinée de **Node.js**,
**Express**, **MongoDB** et **Mongoose** pour créer une API REST.

## Contenu du dépôt

### 1. `docker-compose.yml`

Un fichier pour lancer un conteneur MongoDB. Ce conteneur est utilisé pour
stocker les données des utilisateurs et des recettes nécessaires à l'exécution des exemples.

### 2. `items_api`

Un projet démontrant une API REST construite avec Node.js, Express et JWT.
Cette API permet l'ajout, recherche et modification de produits.

### 3. `dishes_api`

Un projet démontrant une API REST construite avec Node.js, Express et JWT
qui permet l'ajout, recherche et modification de plâts.

---

## Remarque sur les fichiers `.env`

Dans ce dépôt, vous trouverez des fichiers nommés `.env_example`:

- À la **racine du projet**.
- Dans les dossiers **`items_api`** et **`dishes_api`**.

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
      (par exemple, `MONGO_URI`) par celles adaptées à votre environnement.

---

## Instructions pour exécuter les exemples

### 1. Démarrer le conteneur MongoDB

Exécutez la commande suivante pour démarrer MongoDB via Docker Compose :

```bash
docker-compose up -d
```

### 2. Lancer l'API

Accédez au répertoire `dishes_api`, par exemple, et installez les dépendances nécessaires avec :

```bash
npm install
```

Ensuite, démarrez le serveur API en mode développement :

```bash
npm run dev
```

---

## Exemples d'interaction avec l'API via `curl`

Le notebook Colab utilisé pendant le cours fournit des exemples détaillés pour interagir
avec l'API en utilisant l'outil `curl`. 