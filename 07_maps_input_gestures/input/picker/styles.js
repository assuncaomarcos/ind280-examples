import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },
  selectBlock: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold"
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    height: 250,
  },
  pickerHeight: {
    height: 200,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerIOS: {
    height: 100,
    width: '100%'
  }
});
