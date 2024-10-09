import {StyleSheet, Platform, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  observations: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  resultText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
