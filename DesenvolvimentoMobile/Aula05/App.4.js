import React, {Component} from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

class App extends Component{
  
  state = {
    tarefas: [],
    novaTarefa: ""
  };

  adicionarTarefa = () => {
    if(this.state.novaTarefa.trim()) {
      this.setState(prevState => ({
        tarefas: [
        ...prevState.tarefas,
        prevState.novaTarefa,
      ],
      novaTarefa: " ",
      }));
    }
  }

  renderItem = ({ item }) => <Text style={styles.item}>{item}
  </Text>;

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nova Tarefa"
          value={this.state.novaTarefa}
          onChangeText={novaTarefa => this.setState({novaTarefa})}
          onSubmitEditing={this.adicionarTarefa}
        />

        <Button
          title="Adicionar"
          onPress={this.adicionarTarefa}
        />

        <FlatList
          data={this.state.tarefas}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />


      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
})

export default App;