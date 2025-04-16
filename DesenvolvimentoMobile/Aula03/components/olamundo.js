import React, { Component } from "react";
import { Text, View } from "react-native";

class OlaMundo extends Component {
    render() {
        return (
            <View>
                <Text>Olá</Text>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}
export default OlaMundo;