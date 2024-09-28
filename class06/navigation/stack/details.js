import {Button, StatusBar, View, Text} from "react-native";
import styles from "./styles";

export default function Details({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text>Écran de détail</Text>
      <Button title="Home" onPress={() => navigation.goBack("Home")}/>
    </View>
  );
}