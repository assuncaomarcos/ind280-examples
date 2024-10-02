# Guide d'installation et d'utilisation d'Expo CLI

## Introduction

Ce guide explique comment installer et utiliser Expo CLI pour créer et démarrer un projet React Native.
Expo CLI simplifie le développement d'applications mobiles en vous permettant d'utiliser un environnement préconfiguré,
sans avoir à configurer de nombreux outils et dépendances manuellement.

---

## 1. **Préparation de l'environnement**

Avant de commencer, assurez-vous que votre machine répond aux exigences minimales pour le développement avec Expo. Vous
pouvez consulter la liste des [exigences système](https://docs.expo.dev/get-started/installation/) sur la documentation
officielle d'Expo.

### Vérifiez que vous avez les outils suivants installés :

- **Node.js** (version 12 ou plus récente) : Expo utilise Node.js pour exécuter le serveur de développement et gérer les
  dépendances.
- **Git** : Pour cloner des projets et gérer le code source.

Vérifiez que vous avez installé Node.js et Git en exécutant les commandes suivantes dans votre terminal :

```bash
node -v
git --version
```

Ces commandes devraient afficher les versions installées. Si ce n’est pas le cas,
installez [Node.js](https://nodejs.org/) et [Git](https://git-scm.com/).

---

## 2. **Création d'un projet avec Expo CLI**

Expo CLI est l'outil de ligne de commande principal pour travailler avec les projets Expo. Il est désormais recommandé
d'utiliser `npx` pour créer et gérer des projets Expo, plutôt que d'installer Expo CLI globalement.

### Créez un projet avec Expo CLI en utilisant `npx` :

Pour créer un nouveau projet Expo, il suffit d'exécuter la commande suivante. Cette commande téléchargera
automatiquement la version la plus récente d'Expo CLI via `npx` et créera un nouveau projet basé sur le modèle que vous
choisissez.

```bash
npx create-expo-app@latest NomDuProjet --template
```

- **NomDuProjet** : Remplacez ce texte par le nom de votre projet. Par exemple, `MonPremierProjet`.
- **--template** : Expo fournit plusieurs modèles pour démarrer rapidement un projet. Pour ce guide, nous allons choisir
  le modèle **Blank** (vide), qui est un projet minimal sans configuration supplémentaire.

### Exemple :

```bash
npx create-expo-app@latest MonPremierProjet --template blank
```

Cette commande va créer un dossier `MonPremierProjet` contenant tous les fichiers et configurations nécessaires pour
démarrer votre application React Native avec Expo.

---

## 3. **Démarrer le projet**

Une fois le projet créé, suivez ces étapes pour démarrer le serveur de développement :

1. **Accédez au dossier du projet** :

   Après avoir créé le projet, utilisez la commande `cd` pour vous déplacer dans le dossier du projet :

   ```bash
   cd MonPremierProjet
   ```

2. **Démarrez le serveur de développement** :

   Expo CLI offre un serveur de développement interactif qui vous permet de tester votre application sur un appareil
   physique ou un émulateur en temps réel. Pour démarrer ce serveur, exécutez la commande suivante :

   ```bash
   npx expo start
   ```

   Cette commande ouvrira Expo DevTools dans votre navigateur. Ce tableau de bord vous permet de visualiser des
   informations utiles sur votre projet et d'accéder rapidement à des fonctions comme le lancement de l'application sur
   un appareil mobile ou un simulateur.

---

## 4. **Utilisation d'Expo Go pour tester sur un appareil physique**

Pour tester votre projet sur un appareil mobile, téléchargez l'application **Expo Go** depuis le **Play Store** ou
l'**App Store**.

- Scannez le **QR code** affiché dans Expo DevTools ou dans votre terminal pour ouvrir votre projet directement sur
  votre appareil.
- Si vous rencontrez des problèmes de connexion réseau, utilisez l'option `--tunnel` pour exposer le serveur local via
  un tunnel sécurisé :

  ```bash
  npx expo start --tunnel
  ```

Cela vous permettra de contourner les éventuels problèmes liés à la configuration réseau locale.

---

## 5. **Informations supplémentaires sur le serveur de développement**

Lorsque vous démarrez le serveur de développement, Expo CLI affichera des informations importantes dans votre terminal
et dans Expo DevTools. Ces informations incluent :

- L'URL du projet pour les tests sur appareils.
- Les raccourcis clavier pour interagir avec le serveur (par exemple, pour relancer le projet ou ouvrir une console de
  débogage).
- Des messages de statut indiquant si le projet a été correctement lancé.

Vous pourrez voir des mises à jour en direct dès que vous modifierez le code source de votre projet. Expo CLI utilise un
système de **rechargement à chaud** pour appliquer instantanément les changements dans l'application.

---


Pour plus d’informations sur Expo et les fonctionnalités avancées, consultez
la [documentation officielle d'Expo](https://docs.expo.dev/).