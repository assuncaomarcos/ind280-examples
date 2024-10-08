import React, {useState, useEffect} from "react";
import {Text, View, Button} from "react-native";
import * as Location from "expo-location";
import {API_KEY} from '@env';
import styles from "./styles";

const MAPS_API_URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function App() {
  const [address, setAddress] = useState("Chargement...");
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState("Chargement...");
  const [watchLocation, setWatchLocation] = useState(null);

  const requestLocationPermission = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission d'accès à la géolocalisation refusée");
      return false;
    }
    return true;
  };

  const fetchCurrentLocation = async () => {
    try {
      const {coords} = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      setErrorMsg(null);
    } catch (error) {
      setErrorMsg("Impossible de récupérer la position actuelle");
    }
  };

  const fetchLocationDetails = async ({latitude, longitude}) => {
    try {
      const response = await fetch(`${MAPS_API_URL}${latitude},${longitude}`);
      const {results} = await response.json();
      if (results.length > 0) {
        setAddress(results[0].formatted_address);
      }
    } catch (error) {
      setErrorMsg("Erreur lors de la récupération des détails");
    }
  };

  useEffect(() => {
    const initializeLocation = async () => {
      const permissionGranted = await requestLocationPermission();
      if (permissionGranted) {
        await fetchCurrentLocation();
      }
    };
    initializeLocation();
  }, []);

  useEffect(() => {
    fetchLocationDetails(location);
  }, [location]);

  const startWatchingPosition = async () => {
    try {
      const watchId = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10, // Mise à jour tous les 10 mètres
        },
        (position) => {
          setLocation(position.coords);
          setErrorMsg(null);
        }
      );
      setWatchLocation(watchId);
    } catch (error) {
      setErrorMsg("Erreur lors de l'activation du suivi de la position");
    }
  };

  const stopWatchingPosition = () => {
    if (watchLocation) {
      watchLocation.remove();
      setWatchLocation(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Géolocalisation avec Expo Location</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Obtenir la position actuelle"
          onPress={fetchCurrentLocation}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Suivre la position en temps réel"
          onPress={startWatchingPosition}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Arrêter le suivi"
          onPress={stopWatchingPosition}/>
      </View>
      {location ? (
        <View style={styles.box}>
          <Text style={styles.text}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
          <Text style={styles.text}>
            Adresse: {address}
          </Text>
        </View>
      ) : errorMsg ? (
        <Text style={styles.text}>Erreur: {errorMsg}</Text>
      ) : (
        <Text style={styles.text}>Aucune donnée de localisation</Text>
      )}
    </View>
  );
}
