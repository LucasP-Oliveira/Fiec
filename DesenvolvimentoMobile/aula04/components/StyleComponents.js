import styled from "styled-components/native";

//Container flexivel com props
export const Container = styled.View`
    flex: 1;
    justify-content: ${(props) =>  props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    backgroundColor: ${(props) => props.bgColor || "#f5f5f5"};
    padding: 20px;
    `

//Titulo com tamanho dinâmico

export const Title = styled.Text`
    font-size: ${(props) => props.size || "24px"};
    color: ${(props) => props.color || "#333"};
    margin-bottom: 20px;
    font-weight: ${(props) => props.bold ? "bold" : "normal"};

`;