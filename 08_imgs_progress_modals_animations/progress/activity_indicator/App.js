import {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff"/>
      ) : (
        <Text style={styles.text}>Les données sont chargées!</Text>
      )}
    </View>
  );
};

export default LoadingExample;
