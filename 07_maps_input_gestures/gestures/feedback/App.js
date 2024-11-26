import {View, Text} from 'react-native';
import TouchableHighlightButton from './TouchableHighlightButton';
import TouchableOpacityButton from './TouchableOpacityButton';
import PressableButton from './PressableButton';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Démonstration des Boutons</Text>

      <Text style={styles.subtitle}>TouchableHighlight:</Text>
      <TouchableHighlightButton/>

      <Text style={styles.subtitle}>TouchableOpacity:</Text>
      <TouchableOpacityButton/>

      <Text style={styles.subtitle}>Pressable:</Text>
      <PressableButton/>
    </View>
  );
}
