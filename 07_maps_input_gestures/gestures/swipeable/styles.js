import {StyleSheet, Platform, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select(
      {
        ios: {paddingTop: 40},
        android: {paddingTop: StatusBar.currentHeight},
      }
    )
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
  },
  itemText: {
    fontSize: 18,
  },
  trashButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
  },
});
