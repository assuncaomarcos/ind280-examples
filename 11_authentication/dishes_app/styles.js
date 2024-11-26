import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    alignSelf: "stretch",
  },
  screenTitle: {fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'},
  input: {borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5},
  dish: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},
  dishName: {fontSize: 18, fontWeight: 'bold'},
});
