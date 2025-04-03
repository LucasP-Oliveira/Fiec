import React from 'react';
import { View, Text } from 'react-native';

class SaudacaoClasse extends React.Component {
  render() {
    return (
      <View>
        <Text>Olá, {this.props.nome}!</Text>
      </View>
    );
  }
}

export default SaudacaoClasse;