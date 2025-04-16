/*import React, { Component } from 'react';
import { View } from 'react-native';

// Importando o componente OlaMundo do arquivo components/OlaMundo.js
import OlaMundo from './components/olamundo';
// Importando o componente HelloWorld do arquivo components/HelloWorld.js
import { HelloWorld } from './components/Helloword';

class App extends Component {
  render() {
    return(
      <View>
        <OlaMundo name='John Doe'/>  { Componente OlaMundo }
        { <HelloWorld name='John Doe'/> Componente HelloWorld }
      </View>
    );
  }
}  

export default App; */

import { View } from 'react-native';
import { StyleSheet } from "react-native";
import DimensoesFixas from "./components/DimensoesFixas";

const App = () => {
  return (
    <View style={styles.container}>
    <DimensoesFixas/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})
