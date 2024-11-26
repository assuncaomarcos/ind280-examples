# Guide d'installation et de configuration d'Android Studio pour Expo

Ce guide vous accompagne dans l'installation et la configuration d'**Android Studio**, ainsi que la mise en place d'un
émulateur Android pour tester vos applications React Native avec **Expo**. Nous allons également voir comment démarrer
votre projet Expo sur l'émulateur Android.

---

## 1. **Installer et configurer Android Studio**

### 1.1 **Téléchargement et installation d'Android Studio**

La première étape consiste à installer **Android Studio**, l'environnement de développement officiel pour Android.

- Rendez-vous sur le site officiel d'Android Studio et téléchargez la dernière version disponible :
  [Télécharger Android Studio](https://developer.android.com/studio)

- Une fois le fichier téléchargé, suivez les instructions pour installer Android Studio sur votre machine.

### 1.2 **Configurer le SDK Android**

Après l'installation d'Android Studio, il est nécessaire de configurer le **SDK Android**, qui contient les outils
nécessaires pour développer et tester des applications Android.

1. **Ouvrez Android Studio** et attendez que le programme se lance.

2. Dans l'écran d'accueil d'Android Studio, cliquez sur **More Actions** (ou **Actions supplémentaires** selon la langue
   de votre interface) et sélectionnez **SDK Manager**.

3. Une fois dans **SDK Manager** :
    - Allez dans **Settings > Languages & Frameworks > Android SDK**.
    - Sélectionnez la dernière version d'Android dans l'onglet **SDK Platforms** pour vous assurer que vous avez le SDK
      le plus récent.

Vous pouvez consulter les consignes détaillées pour configurer le SDK Android pour Expo dans la documentation
officielle :
[Configuration du SDK Android pour Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=expo-go).

### 1.3 **Configurer un émulateur Android**

Un émulateur Android vous permet de tester vos applications dans un environnement simulé, sans avoir besoin d'un
appareil physique.

1. Ouvrez **Virtual Device Manager** dans Android Studio en cliquant sur **More Actions** dans l'écran d'accueil
   d'Android Studio, puis sélectionnez **Virtual Device Manager**.

2. Cliquez sur **Create Virtual Device** pour créer un nouvel émulateur.

3. Choisissez un appareil (par exemple, un **Pixel 4**) dans la liste des modèles disponibles.

4. Sélectionnez ensuite une version d'Android à utiliser pour cet appareil virtuel. Il est recommandé de choisir la
   version la plus récente pour garantir une compatibilité avec les outils modernes.

5. Finalisez la création de l'émulateur en suivant les instructions et lancez l'émulateur une fois la configuration
   terminée.

---

## 2. **Démarrer le projet avec Expo sur l'émulateur Android**

### 2.1 **Démarrer le serveur Expo**

Maintenant que l'émulateur Android est configuré, vous pouvez démarrer votre projet Expo et le tester sur cet émulateur.

1. Accédez au répertoire de votre projet Expo dans le terminal et exécutez la commande suivante pour démarrer le serveur
   de développement :

   ```bash
   npx expo start
   ```

2. Cette commande lancera Expo DevTools dans votre navigateur. Vous y trouverez diverses options pour gérer et tester
   votre projet.

### 2.2 **Lancer l'émulateur Android**

- Une fois que le serveur Expo est démarré, appuyez sur la touche **a** dans le terminal (où Expo DevTools est lancé)
  pour ouvrir automatiquement l'émulateur Android.

- Si l'émulateur n'est pas déjà en cours d'exécution, Expo CLI le lancera automatiquement. Sinon, il s'attachera
  à l'émulateur déjà actif.

### 2.3 **Installation automatique de l'application Expo Go**

Lorsque vous démarrez l'émulateur Android avec Expo CLI, l'outil installera automatiquement l'application **Expo Go**
sur l'émulateur.

- **Expo Go** est l'application qui vous permet de charger et tester votre projet Expo directement sur l'émulateur ou un
  appareil physique.

- Une fois l'installation terminée, vous pourrez voir votre projet s'exécuter dans l'émulateur Android comme si vous le
  testiez sur un appareil réel.
