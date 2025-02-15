import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Alert, Text } from 'react-native';
import Components from '../Components';
import styles from './style';

export default function Home() {
  const [itemNome, setItemNome] = useState('');
  const [listaCompra, setlistaCompra] = useState([]);

  const addItem = () => {
    if (itemNome.trim() === '') {
      Alert.alert('Atenção', 'O nome do item não pode estar vazio.');
      return;
    }
    setlistaCompra((prevList) => [...prevList, { id: Date.now().toString(), name: itemNome }]);
    setItemNome('');
  };

  const deleteItem = (itemId) => {
    setlistaCompra((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const confirmDeleteItem = (itemId) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja excluir este item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => deleteItem(itemId),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RioOn</Text>
      <Text style={styles.text}>Lista de Compras</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do item"
          value={itemNome}
          onChangeText={setItemNome}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listaCompra}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Components.Card item={item} onDelete={confirmDeleteItem} />
        )}
      />
    </View>
  );
}

