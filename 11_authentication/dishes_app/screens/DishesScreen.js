import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context';
import CONFIG from '../config';
import styles from '../styles';

export default function DishesScreen() {
  const {setUserToken} = useContext(AuthContext);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/dishes`, {
          headers: {Authorization: `Bearer ${token}`},
        });

        const data = await response.json();

        if (response.ok) {
          setDishes(data);
        } else {
          Alert.alert('Error', data.message || 'Failed to fetch dishes.');
        }
      } catch (error) {
        Alert.alert('Error', 'Unable to fetch dishes. Please try again later.');
      }
    };

    fetchDishes();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('jwtToken');
    setUserToken(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Plats</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <View style={styles.dish}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>{item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</Text>
          </View>
        )}
      />
      <Button title="Déconnexion" onPress={handleLogout}/>
    </View>
  );
}