import {Button, View} from "react-native";
import {RootSiblingParent} from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import styles from "./styles";

export default function PassiveNotifications() {
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Button title="Afficher la notification"
                onPress={() => {
                  Toast.show("Quelque chose s'est passée!", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                  });
                }}
        />
      </View>
    </RootSiblingParent>
  );
}