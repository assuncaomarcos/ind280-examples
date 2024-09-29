import {StyleSheet, Platform, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    ...Platform.select({
      ios: {paddingTop: 50},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  item: {
    margin: 5,
    padding: 5,
    alignSelf: 'stretch',
    color: '#4e4747',
    backgroundColor: '#d4e6d4',
    borderWidth: 1
  },
  filter: {
    height: 20,
    width: 150,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})