import React from 'react';
import { View } from 'react-native';
import { MyCard } from './Components/MyCard.js';

const App2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyCard
        title="Card Destacado"
        text="Este card tem destaque e sombra."
        highlight
        shadow
        borderColor="blue"
      />
      <MyCard
        title="Card Padrão"
        text="Este é um card padrão."
      />
    </View>
  );
};

export default App2;