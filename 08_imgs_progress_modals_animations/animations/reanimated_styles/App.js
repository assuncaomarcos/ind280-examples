import {Text, View, Pressable} from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import styles from "./styles";

const App = () => {
  const radius = useSharedValue(30);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const color = useSharedValue(0);

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(color.value, [0, 1], ["green", "red"]);
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      borderRadius: radius.value,
      transform: [{scale: scale.value}],
      backgroundColor: backgroundColor.value,
    };
  }, []);

  const onPressIn = () => {
    radius.value = withSpring(20);
    opacity.value = withSpring(0.7);
    scale.value = withSpring(0.9);
  };

  const onLongPress = () => {
    scale.value = withSpring(0.8);
    color.value = withSpring(1);
  };

  const onPressOut = () => {
    radius.value = withSpring(30);
    opacity.value = withSpring(1);
    scale.value = withSpring(1, {damping: 50});
    color.value = withSpring(0);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonContainer, animatedStyles]}>
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Appuyez sur moi</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default App;