import {Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Profile from "./profile";
import Messages from "./messages";
import Notifications from "./notifications";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={Profile}/>
          <Tab.Screen name="Messages" component={Messages}/>
          <Tab.Screen name="Notifications" component={Notifications}/>
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Profile" component={Profile}/>
          <Drawer.Screen name="Messages" component={Messages}/>
          <Drawer.Screen name="Notifications" component={Notifications}/>
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

