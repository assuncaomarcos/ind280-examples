// Exemple démontrant plusieurs fonctionnalités de l'API Animated
import {useRef} from 'react';
import {View, Button, Animated} from 'react-native';
import styles from './styles';

const AnimatedAPIExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacité initiale
  const moveAnim = useRef(new Animated.Value(0)).current; // Position initiale

  const startAnimation = () => {
    // Démarrer plusieurs animations en parallèle
    Animated.parallel([
      // Animation d'opacité
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      // Animation de translation
      Animated.timing(moveAnim, {
        toValue: 150,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{translateY: moveAnim}],
        }}
      >
        <View style={styles.box}/>
      </Animated.View>
      <Button title="Démarrer l'animation" onPress={startAnimation}/>
    </View>
  );
};

export default AnimatedAPIExample;