import React from 'react';
import {Platform, View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  box: {
    // width: 300,
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: '#edc7c7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});