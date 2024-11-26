import {Platform, StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  item: {
    margin: 5,
    padding: 5,
    alignSelf: 'stretch',
    color: '#4e4747',
    backgroundColor: '#d4e6d4',
    textAlign: 'center',
    borderWidth: 1
  }
});