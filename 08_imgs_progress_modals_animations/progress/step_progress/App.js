// Exemple d'utilisation de Progress.Bar avec plusieurs étapes
import {View, Button} from 'react-native';
import * as Progress from 'react-native-progress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './styles';

const Stack = createNativeStackNavigator();

const steps = 3;

const StepScreen = ({navigation, step}) => {
  return (
    <View style={styles.container}>
      <Button
        title={step < steps ? "Suivant" : "Terminer"}
        onPress={() => {
          if (step < steps) {
            navigation.navigate(`Step${step + 1}`);
          }
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {[...Array(steps).keys()].map((index) => (
          <Stack.Screen
            key={index}
            name={`Step${index + 1}`}
            options={{
              title: `Étape ${index + 1} sur ${steps}`,
              headerRight: () => (
                <Progress.Bar progress={(index + 1) / steps} width={100} height={10}/>
              ),
            }}
          >
            {(props) => <StepScreen {...props} step={index + 1}/>}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}