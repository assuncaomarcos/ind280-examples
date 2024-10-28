import {View, Button} from "react-native";
import styles from "./styles";
import LoadingWrapper from "./LoadingWrapper";

export default function FirstScreen({navigation}) {
  return (
    <LoadingWrapper>
      <View style={styles.container}>
        <Button title="First" onPress={() => navigation.navigate("First")}/>
        <Button title="Third" onPress={() => navigation.navigate("Third")}/>
      </View>
    </LoadingWrapper>
  );
}