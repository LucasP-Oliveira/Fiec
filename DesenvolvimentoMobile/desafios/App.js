import React from 'react';
import { View, ScrollView } from 'react-native';
import Desafio1 from './components/Desafio1';
import Desafio2 from './components/Desafio2';

function App() {
  return (
    <ScrollView>
      <View>
        <Desafio1 />
        <Desafio2 />
      </View>
    </ScrollView>
  );
}

export default App;