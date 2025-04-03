import React from "react";
import { View } from 'react-native';
import { Header } from './Components/Header.js';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Header" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      </View>
    </View>
  );
};

export default App;