import React from 'react';
import {View} from 'react-native';
import ListFilter from './ListFilter';
import ListSort from './ListSort';
import styles from './styles';

export default function ListControls({onFilter, onSort, sortOrder}) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter}/>
      <ListSort onSort={onSort} sortOrder={sortOrder}/>
    </View>
  );
}