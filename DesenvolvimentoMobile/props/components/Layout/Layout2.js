import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SaudacaoClasse from './SaudacaoClasse';

function Layout2() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarText}>Menu</Text>
      </View>
      <View style={styles.content}>
        <SaudacaoClasse nome="Conteúdo Principal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    backgroundColor: '#222',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout2;