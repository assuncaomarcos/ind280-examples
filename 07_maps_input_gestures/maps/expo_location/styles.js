import {StyleSheet, StatusBar, Platform} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  box: {
    alignSelf: 'stretch',
    backgroundColor: '#ebe2e2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonContainer: {
    marginTop: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});