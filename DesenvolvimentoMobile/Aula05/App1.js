import React, {Component} from "react";
import { View, Text, Button, StyleSheet} from "react-native";

class App extends Component {
  //Inicializando  o State
  constructor(props) {
    super(props);
    this.state = {
      contador : 0
    };
  }

  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementar = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return(
      <View style={Styles.container}>
        <Text style={Styles.texto}>Contador: {this.state.contador}</Text>

        <View style={Styles.contador}>
          <Button
            title="+"
            onPress={this.incrementar}
          />

          <Button
            title="-"
            onPress={this.decrementar}
          />  
        </View>
      </View>
    );
  }
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
