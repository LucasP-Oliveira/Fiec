import styled from "styled-components/native";

//Tirulo com tamanho dinâmico

export const Title = styled.Text`
    font-size: ${(props) => props.justify || "24px"};
    color: ${(props) => props.color || "#333"};
    margin-bottom: 20px;
    font-weight: ${(props) => props.bold ? "bold" : "normal"};
`;