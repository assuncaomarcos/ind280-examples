// Exemple d'utilisation de modals d'activité avec ActivityIndicator
import {useState} from 'react';
import {View, Button, Modal, ActivityIndicator} from 'react-native';
import styles from './styles';

function Activity({visible, size = "large"}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <ActivityIndicator size={size}/>
      </View>
    </Modal>
  );
}

const ActivityModalExample = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleTask = () => {
    setModalVisible(true);
    // Simuler une tâche asynchrone avec setTimeout
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Button title="Commencer la tâche" onPress={handleTask}/>
      <Activity visible={isModalVisible}/>
    </View>
  );
};

export default ActivityModalExample;