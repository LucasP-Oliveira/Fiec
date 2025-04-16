import React, { useState } from 'react';
import { View } from 'react-native';
import { SelectList } from './Components/SelectList.js';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelected = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <View style={{ flex: 1 }}>
      <SelectList
        items={items}
        selectedItem={selectedItem}
        onItemSelected={handleItemSelected}
      />
    </View>
  );
};

export default App;