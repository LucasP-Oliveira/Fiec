import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SaudacaoFuncao from './SaudacaoFuncao';

class Layout1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cabeçalho</Text>
        </View>
        <View style={styles.content}>
          <SaudacaoFuncao nome="Conteúdo Principal" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Rodapé</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'coral',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'lightgreen',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Layout1;