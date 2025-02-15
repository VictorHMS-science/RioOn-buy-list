import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Card = ({ item, onDelete }) => (
  <View style={styles.card}>
    <Text style={styles.itemName}>{item.name}</Text>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete(item.id)}
    >
      <Text style={styles.deleteButtonText}>Excluir</Text>
    </TouchableOpacity>
  </View>
);

export default { Card };