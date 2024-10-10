import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons';
import styles from './styles';

const generateItem = (index) => ({
  id: index + 1,
  name: `Item ${index + 1}`
});

const initialItems = Array.from({length: 20}, (_, index) => generateItem(index));

export default function App() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const renderRightActions = (id) => (
    <TouchableOpacity style={styles.trashButton} onPress={() => removeItem(id)}>
      <FontAwesome name="trash" size={24} color="white"/>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <Swipeable renderRightActions={() => renderRightActions(item.id)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.title}>Swipe to Delete</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </GestureHandlerRootView>
  );
}