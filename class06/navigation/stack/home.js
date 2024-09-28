import {Button, StatusBar, View, Text} from "react-native";
import styles from "./styles";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Écran d'accueil</Text>
      <Button title="Détails"
              onPress={() => navigation.navigate('Details')}/>
      <Button
        title="Product 1"
        onPress={() => navigation.navigate('Custom', {title: "Product 1", available: 1})}/>
      <Button
        title="Product 2"
        onPress={() => navigation.navigate('Custom', {title: "Product 2", available: 0})}/>
    </View>
  )
}