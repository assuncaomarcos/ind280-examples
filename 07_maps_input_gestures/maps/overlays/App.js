import {Text, View} from 'react-native';
import {Polyline, Polygon} from 'react-native-maps';
import styles from './styles';
import Map from "./Map";

const DOWNTOWN_MONTREAL = {
  latitude: 45.50,
  longitude: -73.57,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

// Coordonnées pour la Polyline (ligne entre deux points d'intérêt)
const polylineCoordinates = [
  {latitude: 45.4945, longitude: -73.5623}, // École de Technologie Supérieure
  {latitude: 45.5071, longitude: -73.5873}, // Mont Royal
];

// Coordonnées pour le Polygon (zone autour du centre-ville)
const polygonCoordinates = [
  {latitude: 45.5017, longitude: -73.5720},
  {latitude: 45.5017, longitude: -73.5600},
  {latitude: 45.5155, longitude: -73.5600},
  {latitude: 45.5155, longitude: -73.5720},
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemple avec des overlays</Text>
      <Map defaultRegion={DOWNTOWN_MONTREAL}>
        <Polyline
          coordinates={polylineCoordinates}
          strokeColor="blue"
          strokeWidth={4}
        />
        <Polygon
          coordinates={polygonCoordinates}
          fillColor="rgba(255, 0, 0, 0.3)"
          strokeColor="red"
          strokeWidth={2}
        />
      </Map>
    </View>
  );
}
