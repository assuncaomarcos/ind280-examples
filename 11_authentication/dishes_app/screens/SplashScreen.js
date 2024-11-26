import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff"/>
      <Text>Chargement...</Text>
    </View>
  );
}

