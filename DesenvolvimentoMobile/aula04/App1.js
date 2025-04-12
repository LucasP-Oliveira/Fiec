import { View } from "react-native";
import styled from "styled-components/native";

//criando botões estilizado
const StyleButton = styled.TouchableOpacity`
  backgroundColor: #6200ee;
  padding: 15px 30px;
  border-radius: 5px;
  align-items: center;
`;

//Texto do botão estilizado
const ButtonText = styled.Text`
  color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
`;

export const MyButton = ({ title, onPress }) => (
  <StyleButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </StyleButton>
);

const App1 = () => {
  const handlePress = () => {
    alert("Pressionado");
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <MyButton
        title="Clique Aqui"
        onPress={handlePress}
      />

      <MyButton
        title={"Outro Botão"}
        onPress={() => console.log("Segundo Botão Pressionado")}
      />
    </View>
  );
};

export default App1;
