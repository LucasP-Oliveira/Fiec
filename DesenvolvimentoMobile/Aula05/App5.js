//igual ao app1 feito com useState

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  //Declaração do state
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1)
  };

  const decrementar = () => {
    setContador(contador - 1)
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.texto}>Contador: {contador}</Text>

      <View style={Styles.contador}>
        <Button
          title="+"
          onPress={incrementar}
        />

        <Button
          title="-"
          onPress={decrementar}
        />
      </View>
    </View>
  )

}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto:{
    fontSize: 24,
    marginBottom: 20,
  },
  botoes:{
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },

});

export default App;