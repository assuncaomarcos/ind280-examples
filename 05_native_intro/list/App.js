import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('Ajoutez un élément à la liste');

  const ajouterElement = () => {
    if (text.length > 0) {
      setItems([...items, {key: `${items.length}`, value: text}]);
      setText('');
      setMessage('Élément ajouté avec succès');
    } else {
      setMessage('Le champ de texte est vide');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Entrez un élément"
        value={text}
        onChangeText={setText}
      />

      <Button title="Ajouter" onPress={ajouterElement}/>

      <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight},
    })
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  item: {
    backgroundColor: '#c0bdbd',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  itemText: {
    fontSize: 18,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
    color: '#1f455b',
  },
});
