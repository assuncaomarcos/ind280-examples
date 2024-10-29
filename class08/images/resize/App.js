import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

const etsLogo = require('./assets/ets_logo_fr.png');

export default function App() {
  const [imageSize, setImageSize] = useState(150);

  return (
    <View style={styles.container}>
      <Image
        source={etsLogo}
        style={{width: imageSize, height: imageSize}}
      />
      <Text style={styles.sizeText}>Largeur : {imageSize}px | Hauteur : {imageSize}px</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={300}
        step={1}
        value={imageSize}
        onValueChange={(value) => setImageSize(value)}
      />
    </View>
  );
}