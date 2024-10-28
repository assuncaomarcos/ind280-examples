import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    }),
  },
  buttonContainer: {
    height: 100,
    width: 300,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.4,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
