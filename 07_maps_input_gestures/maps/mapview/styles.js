import {StyleSheet, StatusBar, Platform} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },

  mapView: {
    alignSelf: "stretch",
    height: 450,
    margin: 30,
  },
});