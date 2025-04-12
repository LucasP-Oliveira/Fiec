import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardUsuario = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
      <Text>Cidade: {props.cidade}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 200,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardUsuario;