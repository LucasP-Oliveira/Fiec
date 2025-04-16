import styled from "styled-components"
import { Title } from "./components/StyledComponents"
import { View } from "react-native";

const StyleButton = styled.TouchableOpacity`
  backgroundColor: ${(props) => props.diasbled ? "#ccc" : props.size === "small" ? "#ffa500" : "#008000"};
  padding: 15px 30px;
  border-radius: ${(props) => props.rounded ? "50px" : "5px"};
  align-items: ${(props) => props.align || "center"};
  opacity: ${(props) => props.diasbled ? 0.7 : 1};
`;

const ButtonText = styled.Text`
  color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
`;

export const MyButton = ({ title, onPress, size, disabled, rounded}) => (
  <StyleButton onPress={onPress} size={size} disabled={disabled} rounded={rounded}>
    <ButtonText>{title}</ButtonText>
  </StyleButton>
);



const App = () => {
  const handlePress = () => {
    alert("Pressionado");
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Title size="28px" bold>Botões Dinâmicos</Title>
      <MyButton
        title="Pequeno"
        onPress={handlePress}
        size="20px"
        />
      <MyButton
        title="Grande"
        onPress={() => console.log("Grande Pressionado")}
        size="40px"
      />
      <MyButton
        title="Desabilitado"
        onPress={() => console.log("Desabilitado Pressionado")}
        disabled
      />
      <MyButton
        title="Arredondado"
        onPress={() => console.log("Arredondado Pressionado")}
        rounded
      />
    </View>
  );
};

export default App;