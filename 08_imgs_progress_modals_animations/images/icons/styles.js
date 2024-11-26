import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 60,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    })
  },

  picker: {
    alignSelf: "stretch"
  },

  icons: {
    alignSelf: "stretch",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  itemIcon: {
    padding: 10,
    color: "gray",
  },

  itemText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
});