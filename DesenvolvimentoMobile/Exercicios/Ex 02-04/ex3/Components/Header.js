import React from "react";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  height: 150px;
  background-color: #6200ee;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  elevation: 3;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Header = ({ title }) => (
  <HeaderContainer>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContainer>
);