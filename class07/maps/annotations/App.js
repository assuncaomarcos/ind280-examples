import {Text, View, Button} from 'react-native';
import React, {useState, useRef} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import styles from './styles';

const DOWNTOWN_MONTREAL = {
  latitude: 45.50,
  longitude: -73.57,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const pointsOfInterest = [
  {
    id: 1,
    title: "École de Technologie Supérieure",
    description: "École d'ingénierie située dans le centre-ville de Montréal.",
    latitude: 45.4945,
    longitude: -73.5623
  },
  {
    id: 2,
    title: "Mont Royal",
    description: "Une colline emblématique de Montréal.",
    latitude: 45.5071,
    longitude: -73.5873
  },
  {
    id: 3,
    title: "Vieux-Port de Montréal",
    description: "Zone historique et touristique.",
    latitude: 45.5075,
    longitude: -73.5530
  },
  {
    id: 4,
    title: "Basilique Notre-Dame de Montréal",
    description: "Un des monuments les plus emblématiques de Montréal.",
    latitude: 45.5046,
    longitude: -73.5561
  },
  {
    id: 5,
    title: "Centre Bell",
    description: "L'arène de hockey et centre de divertissement de Montréal.",
    latitude: 45.4960,
    longitude: -73.5693
  }
];

export default function App() {
  const [mapType, setMapType] = useState('standard');
  const mapRef = useRef(null);

  const recenterMap = () => {
    mapRef.current.animateToRegion(DOWNTOWN_MONTREAL, 1000);
  };

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === 'standard' ? 'satellite' : 'standard'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carte avec des annotations</Text>
      <MapView
        ref={mapRef}
        style={styles.mapView}
        initialRegion={DOWNTOWN_MONTREAL}
        mapType={mapType}
        showsUserLocation
        followsUserLocation
      >
        {pointsOfInterest.map((poi) => (
          <Marker
            key={poi.id}
            coordinate={{latitude: poi.latitude, longitude: poi.longitude}}
            title={poi.title}
          >
            <Callout>
              <View>
                <Text>{poi.title}</Text>
                <Text>{poi.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View>
        <View style={styles.buttonContainer}>
          <Button title="Recentrer sur Montréal" onPress={recenterMap}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Changer le type de carte" onPress={toggleMapType}/>
        </View>
      </View>
    </View>
  );
}
