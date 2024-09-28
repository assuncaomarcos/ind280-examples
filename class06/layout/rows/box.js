import {Text, View} from "react-native";
import React from "react";
import styles from './styles';

export default function Box({children}) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}