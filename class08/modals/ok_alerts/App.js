// Exemple d'utilisation de Modal et Alert.alert pour des actions différentes
import React, {useState} from 'react';
import {
  View,
  Button,
  Alert,
  Modal,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const ModalAlertExample = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalAction = () => {
    setModalVisible(true);
  };

  const handleAlertAction = () => {
    Alert.alert(
      "Confirmation",
      "Voulez-vous continuer ?",
      [
        {
          text: "Non",
          onPress: () => console.log("Action annulée"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => console.log("Action confirmée"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Afficher Modal personnalisé" onPress={handleModalAction}/>
      <View style={{height: 20}}/>
      <Button title="Afficher Alert non formaté" onPress={handleAlertAction}/>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Voulez-vous continuer ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  console.log("Action annulée");
                }}
              >
                <Text style={styles.buttonText}>Non</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={() => {
                  setModalVisible(false);
                  console.log("Action confirmée");
                }}
              >
                <Text style={styles.buttonText}>Oui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAlertExample;