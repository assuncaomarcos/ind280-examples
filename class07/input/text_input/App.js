import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import styles from './styles';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    observations: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data: ", formData);
    setSubmitted(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulaire de Saisie</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        value={formData.phone}
        onChangeText={(value) => handleChange('phone', value)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry={true}
      />

      <TextInput
        multiline
        style={styles.observations}
        numberOfLines={4}
        placeholder="Observations"
        value={formData.observations}
        onChangeText={(value) => handleChange('observations', value)}
        autoCapitalize="none"
      />

      <Button title="Soumettre" onPress={handleSubmit}/>

      {submitted && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Données soumises :</Text>
          <Text>Nom : {formData.name}</Text>
          <Text>Email : {formData.email}</Text>
          <Text>Téléphone : {formData.phone}</Text>
          <Text>Mot de passe : {formData.password}</Text>
          <Text>Observations : {formData.observations}</Text>
        </View>
      )}
    </ScrollView>
  );
}