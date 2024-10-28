import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

const Stack = createNativeStackNavigator();
StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
        <Stack.Screen name="Third" component={ThirdScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
