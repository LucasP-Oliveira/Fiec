import React from 'react';
import { View, ScrollView } from 'react-native';
import CardUsuario from './components/Card/CardUsuario';
import SaudacaoArrow from './components/Saudacao/SaudacaoArrow';
import SaudacaoClasse from './components/Saudacao/SaudacaoClasse';
import SaudacaoFuncao from './components/Saudacao/SaudacaoFuncao';
import Layout1 from './components/Layout/Layout1';
import Layout2 from './components/Layout/Layout2';
import Layout3 from './components/Layout/Layout3';
import Layout4 from './components/Layout/Layout4';

function App() {
  return (
    <ScrollView>
      <View>
        <SaudacaoClasse nome="João" />
        <SaudacaoFuncao nome="Maria" />
        <SaudacaoArrow nome="Carlos" />
        <CardUsuario nome="Ana" idade="30" cidade="São Paulo" />
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 />
      </View>
    </ScrollView>
  );
}

export default App;