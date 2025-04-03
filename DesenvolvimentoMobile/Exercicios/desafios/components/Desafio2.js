import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Desafio2 = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = () => {
    alert(`Texto digitado: ${inputText}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title="Enviar" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
});

export default Desafio2;