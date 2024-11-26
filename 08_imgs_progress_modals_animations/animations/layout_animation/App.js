// Exemple d'utilisation de LayoutAnimation
import {useState} from 'react';
import {View, Button, LayoutAnimation, Platform, UIManager} from 'react-native';
import styles from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const LayoutAnimationExample = () => {
  const [boxVisible, setBoxVisible] = useState(true);

  const toggleBox = () => {
    // Configurer l'animation de mise en page
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBoxVisible(!boxVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Afficher/Cacher la boîte" onPress={toggleBox}/>
      {boxVisible && <View style={styles.box}/>}
    </View>
  );
};

export default LayoutAnimationExample;