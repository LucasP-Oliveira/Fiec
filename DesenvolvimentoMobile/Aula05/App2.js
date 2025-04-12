import React, {Component} from "react";
import { View, Text, Button, StyleSheet, Switch} from "react-native";

class App extends Component {
  state = {
    ligado: false
  };

  toggleSwitch = () => {
    this.setState(prevState => ({
      ligado: !prevState.ligado
    }));
  }

  render() {
    return(
      <View style={styles.container}> 
        <Text style={styles.texto}>Status: 
          {
          this.state.ligado ? " ligado" : " desligado"
          }
        </Text>

        <Switch
          value={this.state.ligado}
          onValueChange={this.toggleSwitch}
        />  

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
})

export default App;