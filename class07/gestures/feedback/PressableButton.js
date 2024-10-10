import {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

export default function PressableButton() {
  const [buttonText, setButtonText] = useState("Appuyez ici");

  const handlePressIn = () => {
    setButtonText("Relâchez pour confirmer");
  };

  const handlePressOut = () => {
    setButtonText("Action Confirmée");
  };

  const handleLongPress = () => {
    setButtonText("Longue pression détectée");
  };

  const handlePressCancel = () => {
    setButtonText("Action Annulée");
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#3700b3' : '#6200ee',
          },
          styles.button,
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        onPressCancel={handlePressCancel}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}
