import {StyleSheet, Platform, StatusBar} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    }),
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  todoItem: {
    // width: 300,
    alignSelf: "stretch",
    height: 40,
    backgroundColor: "#ff9b84",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});