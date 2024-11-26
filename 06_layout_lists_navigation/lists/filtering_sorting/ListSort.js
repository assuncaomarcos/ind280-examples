import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListSort({onSort, sortOrder}) {
  const toggleSortOrder = () => {
    onSort(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <TouchableOpacity onPress={toggleSortOrder}>
      {sortOrder === 'asc' ? (
        <Icon name="sort-alpha-asc" size={20} color="black"/>
      ) : (
        <Icon name="sort-alpha-desc" size={20} color="black"/>
      )}
    </TouchableOpacity>
  );
}