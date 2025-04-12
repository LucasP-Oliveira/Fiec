import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  height: 40%;
  width: 90%;
  border: ${props => props.borderColor ? `2px solid ${props.borderColor}` : 'none'};
  box-shadow: ${props => props.shadow ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  elevation: ${props => props.shadow ? 3 : 0};
  transform: scale(${props => props.highlight ? 1.05 : 1});
  transition: transform 0.3s ease;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const MyCard = ({ title, text, highlight, shadow, borderColor }) => (
  <CardContainer highlight={highlight} shadow={shadow} borderColor={borderColor}>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardContainer>
);