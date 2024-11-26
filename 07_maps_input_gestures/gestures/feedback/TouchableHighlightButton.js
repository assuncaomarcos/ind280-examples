import {useState} from 'react';
import {Text, TouchableHighlight, Animated} from 'react-native';
import styles from './styles';

export default function TouchableHighlightButton() {
  const [buttonText, setButtonText] = useState("Appuyez ici");
  const animatedScale = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    setButtonText("Relâchez pour confirmer");
    Animated.spring(animatedScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setButtonText("Action Confirmée");
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressCancel = () => {
    setButtonText("Action Annulée");
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.buttonContainer, {transform: [{scale: animatedScale}]}]}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#3700b3"
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => setButtonText("Action Confirmée")}
        onPressCancel={handlePressCancel}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
    </Animated.View>
  );
}
