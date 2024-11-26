import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./home";
import Details from "./details";
import Custom from "./custom";
import {Button} from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen
          name="Custom"
          component={Custom}
          options={({route}) => ({
            headerRight: () => {
              return (
                <Button
                  title="Buy"
                  onPress={() => {
                  }}
                  disabled={route.params.available === 0}/>
              )
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
