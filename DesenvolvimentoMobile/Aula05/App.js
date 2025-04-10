import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const App = () => {
  //state e metados 
  //useState o estado que ele vai ter
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erros, setErros] = useState({});
  //metado de validação
  const validarEmail = (email) => {
    //recebe design pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
  };
  //metado para submit
  const handleSubmit = () => {
    //const para erros vazia
    const novosErros = {};
    //verificando array nome
    if (!nome.trim()) {
      novosErros.nome = "Nome é Obrigátorio";
    }
    //verificando email se ! mostar que é obrigário
    if (!email.trim()) {
      novosErros.email = "Email é Obrigátorio";
      // se tiver algo vai ir para a parte de verificar se está permitido pelo design pattern
    } else if (!validarEmail(email)) {
      novosErros.email = "Email Inválido";
    }
    //se for maior que 0 
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }
    //volta array zerado
    setErros({});

    //textos que vai mostrar na tela atraves do nome e email
    Alert.alert(
      "Formulário Enviado!",
      `Nome: ${nome} \nEmail: ${email}`,
      //configuração do botão
      [{
        text: "Ok", onPress: () => {
          setNome("");
          setEmail("");
        }
      }]
    );
  };

  /*duas estilizações styles.input(padrão) && styles.inputError(so pega essa se existir erro) se não ele ignora*/


  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, erros.nome && styles.inputError]}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome && <Text style={styles.textoError}>
        {erros.nome}</Text>}

      <TextInput
        style={[styles.input, erros.email && styles.inputError]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email && <Text style={styles.textoError}>
        {erros.email}</Text>}

      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "98%",
    left: 5,
  },
  inputError: {
    borderColor: "red",
  },
  textoError: {
    color: "red",
    marginBottom: 10,
  },
});

export default App;