import {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

const ProgressExample = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 1) {
            clearInterval(timer);
            setLoading(false);
            return 1;
          }
          return prev + 0.1;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [loading]);

  const startLoading = () => {
    setProgress(0);
    setLoading(true);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Progress.Bar progress={progress} width={200}/>
      ) : (
        <>
          <Text style={styles.text}>Chargement terminé!</Text>
          <Button title="Recommencer le chargement" onPress={startLoading}/>
        </>
      )}
    </View>
  );
};

export default ProgressExample;