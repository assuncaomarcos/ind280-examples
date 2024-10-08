import {StyleSheet, StatusBar, Platform} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  title: {
    alignSelf: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10
  },

  mapView: {
    alignSelf: "stretch",
    height: 450
  },

  buttonContainer: {
    marginTop: 10,
  },
});