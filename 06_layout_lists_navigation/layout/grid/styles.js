import {Platform, StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#edc7c7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});