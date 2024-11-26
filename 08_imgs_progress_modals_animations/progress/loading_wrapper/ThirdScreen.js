import {View, Button} from "react-native";
import styles from "./styles";
import LoadingWrapper from "./LoadingWrapper";

export default function FirstScreen({navigation}) {
  return (
    <LoadingWrapper>
      <View style={styles.container}>
        <Button title="First" onPress={() => navigation.navigate("First")}/>
        <Button title="Second" onPress={() => navigation.navigate("Second")}/>
      </View>
    </LoadingWrapper>
  );
}