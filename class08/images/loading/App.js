import {Image, View} from 'react-native';
import styles from "./styles";

const etsLogo = require('./assets/ets_logo_fr.png');
const dogPicture = "https://picsum.photos/id/237/200/300";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={etsLogo}/>
      <Image style={styles.image} source={{uri: dogPicture}}/>
    </View>
  );
}
