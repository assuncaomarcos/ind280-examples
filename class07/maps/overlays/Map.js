import {View, Button} from 'react-native';
import {useState, useRef} from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

export default function Map({defaultRegion, children}) {
  const [mapType, setMapType] = useState('standard');
  const mapRef = useRef(null);

  const recenterMap = () => {
    mapRef.current.animateToRegion(defaultRegion, 1000);
  };

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === 'standard' ? 'satellite' : 'standard'));
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.mapView}
        initialRegion={defaultRegion}
        mapType={mapType}
        showsUserLocation
        followsUserLocation
      >
        {children}
      </MapView>
      <View>
        <View style={styles.buttonContainer}>
          <Button title="Recentrer la carte" onPress={recenterMap}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Changer le type de carte" onPress={toggleMapType}/>
        </View>
      </View>
    </>
  );
}