import React from 'react';
import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Mon Application</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bienvenue sur l'application</Text>

        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Section 1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Section 2</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Section 3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Section 4</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2024 Mon Application</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f05',
    ...Platform.select({
      ios: {paddingTop: 40},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  header: {
    backgroundColor: '#a25e8f',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#e0e0e0',
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#a25e8f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});