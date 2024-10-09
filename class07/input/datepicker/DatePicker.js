import {Platform, View, Text} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import styles from "./styles";

function AndroidDatePicker({label, value, onChange}) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text
        onPress={() => {
          DateTimePickerAndroid.open({
            value: value,
            mode: "date",
            onChange: (event, date) => {
              if (event.type === "set" && date) {
                onChange(date);
              }
            },
          });
        }}>
        {value.toLocaleDateString()}
      </Text>
    </View>
  );
}

function IOSDatePicker({label, value, onChange}) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <DateTimePicker
        mode="date"
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

export default Platform.OS === 'android' ? AndroidDatePicker : IOSDatePicker;