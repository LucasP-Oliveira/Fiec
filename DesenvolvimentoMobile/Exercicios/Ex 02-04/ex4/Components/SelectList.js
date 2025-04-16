import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

const ListItem = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  background-color: ${props => props.selected ? '#e0e0e0' : '#fff'};
`;

const ListItemText = styled.Text`
  font-size: 16px;
  margin-top: 100px;
`;

export const SelectList = ({ items, selectedItem, onItemSelected }) => {
  const handleItemPress = (item) => {
    onItemSelected(item);
  };

  return (
    <ScrollView>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onPress={() => handleItemPress(item)}
          selected={selectedItem === item}
        >
          <ListItemText>{item}</ListItemText>
        </ListItem>
      ))}
    </ScrollView>
  );
};