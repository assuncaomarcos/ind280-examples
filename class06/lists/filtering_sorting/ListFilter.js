import React from "react";
import {View, TextInput} from "react-native";
import styles from "./styles";

export default function ListFilter({onFilter}) {
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Rechercher"
        style={styles.filter}
        onChangeText={onFilter}
      />
    </View>
  );
}