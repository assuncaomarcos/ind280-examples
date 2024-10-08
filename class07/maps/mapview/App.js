import {View} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const MONTREAL_AREA = {
  latitude: 45.3831,
  longitude: -73.4746,
  latitudeDelta: 0.3226,
  longitudeDelta: 0.4688,
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapView}
               initialRegion={MONTREAL_AREA}
               showsUserLocation
               followsUserLocation/>
    </View>
  );
}
