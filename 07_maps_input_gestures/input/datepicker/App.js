import {View} from 'react-native';
import {useState} from "react";
import styles from './styles';
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        label="Sélectionnez une date:"
        value={date}
        onChange={setDate}
      />
      <TimePicker
        label="Sélectionnez l'heure:"
        value={time}
        onChange={setTime}
      />
    </View>
  );
}

