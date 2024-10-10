import {useState} from 'react';
import {Text, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';

export default function TouchableOpacityButton() {
  const [buttonText, setButtonText] = useState("Appuyez ici");
  const animatedOpacity = new Animated.Value(1);

  const handlePressIn = () => {
    setButtonText("Relâchez pour confirmer");
    Animated.timing(animatedOpacity, {
      toValue: 0.5,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setButtonText("Action Confirmée");
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressCancel = () => {
    setButtonText("Action Annulée");
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.buttonContainer, {opacity: animatedOpacity}]}>
      <TouchableOpacity
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => setButtonText("Action Confirmée")}
        onPressCancel={handlePressCancel}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
