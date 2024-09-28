import {Button, StatusBar, View, Text} from "react-native";
import styles from "./styles";

export default function Produ({navigation, route}) {
  const {title} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text>{title}</Text>
      <Button title="Home" onPress={() => navigation.goBack("Home")}/>
    </View>
  );
}