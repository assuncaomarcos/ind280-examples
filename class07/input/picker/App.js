import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const programmingLanguages = [
  {label: 'JavaScript', value: 'javascript'},
  {label: 'Python', value: 'python'},
  {label: 'Java', value: 'java'},
  {label: 'C++', value: 'cpp'}
];

const countries = [
  {label: 'Canada', value: 'canada'},
  {label: 'France', value: 'france'},
  {label: 'Japon', value: 'japan'},
  {label: 'Brésil', value: 'brazil'}
];

const themes = [
  {label: 'Clair', value: 'light'},
  {label: 'Sombre', value: 'dark'}
];

// Select component for Android
const SelectAndroid = ({label, selectedValue, onValueChange, options}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={styles.picker}
      mode="dropdown"
    >
      {options.map(option => (
        <Picker.Item key={option.value} label={option.label} value={option.value}/>
      ))}
    </Picker>
  </View>
);

// Select component for iOS
const SelectIOS = ({label, selectedValue, onValueChange, options}) => (
  <View style={styles.pickerHeight}>
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.pickerIOS}
        mode="dialog"
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value}/>
        ))}
      </Picker>
    </View>
  </View>
);


export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [selectedCountry, setSelectedCountry] = useState('canada');
  const [selectedTheme, setSelectedTheme] = useState('light');

  const SelectComponent = Platform.OS === 'ios' ? SelectIOS : SelectAndroid;

  return (
    <View style={styles.container}>
      <View style={styles.selectBlock}>
        <SelectComponent
          label={"Langage:"}
          selectedValue={selectedLanguage}
          onValueChange={setSelectedLanguage}
          options={programmingLanguages}
        />
      </View>

      <View style={styles.selectBlock}>
        <SelectComponent
          label={"Pays:"}
          selectedValue={selectedCountry}
          onValueChange={setSelectedCountry}
          options={countries}
        />
      </View>

      <View style={styles.selectBlock}>
        <SelectComponent
          label={"Thème:"}
          selectedValue={selectedTheme}
          onValueChange={setSelectedTheme}
          options={themes}
          enabled={selectedCountry === 'canada'}  // Disable Picker if country is not Canada
        />
      </View>
    </View>
  );
}