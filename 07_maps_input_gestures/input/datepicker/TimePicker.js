import {Platform, View, Text} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import styles from "./styles";

function AndroidTimePicker({label, value, onChange}) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text
        onPress={() => {
          DateTimePickerAndroid.open({
            value: value,
            mode: "time",
            is24Hour: true,
            onChange: (event, date) => {
              if (event.type === "set" && date) {
                onChange(date);
              }
            },
          });
        }}>
        {value.toLocaleTimeString()}
      </Text>
    </View>
  );
}

function IOSTimePicker({label, value, onChange}) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <DateTimePicker
        mode="time"
        display="spinner"
        value={value}
        onChange={(event, date) => {
          if (date) {
            onChange(date);
          }
        }}
      />
    </View>
  );
}

export default Platform.OS === 'android' ? AndroidTimePicker : IOSTimePicker;