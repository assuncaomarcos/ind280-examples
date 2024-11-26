import {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from './styles';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isEnabled ? 'Le commutateur est activé' : 'Le commutateur est désactivé'}
      </Text>

      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
}