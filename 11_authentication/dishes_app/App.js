import React, {useEffect, useState, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import DishesScreen from './screens/DishesScreen';
import AuthContext from './context';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

// Auth Stack (SignIn)
const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Connexion" component={SignInScreen}/>
  </AuthStack.Navigator>
);

// App Stack (Dishes)
const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Plats" component={DishesScreen}/>
  </AppStack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  // Simulate fetching token
  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('jwtToken');
      setUserToken(token);
      setIsLoading(false);
    };

    loadToken();
  }, []);

  if (isLoading) {
    return <SplashScreen/>;
  }

  return (
    <AuthContext.Provider value={{userToken, setUserToken}}>
      <NavigationContainer>
        {userToken ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
