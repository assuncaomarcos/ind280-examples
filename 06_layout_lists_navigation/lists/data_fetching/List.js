import {FlatList, Text} from "react-native";
import ListControls from "./ListControls";
import styles from "./styles";

export default function List({data, ...props}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<ListControls {...props}/>}
      renderItem={
        ({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )
      }
    />
  );
}