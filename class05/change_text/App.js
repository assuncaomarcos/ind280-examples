import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default function App() {
  const [message, setMessage] = useState("Appuyez sur le bouton");

  const changerTexte = () => {
    setMessage("Le texte a changé !");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Changer le texte" onPress={changerTexte}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
