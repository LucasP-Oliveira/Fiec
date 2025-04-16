import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Layout3 extends React.Component {
  render() {
    return (
      <View style={styles.grid}>
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 4</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 5</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 6</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 20,
    margin: 5,
    width: '30%',
    alignItems: 'center',
  },
});

export default Layout3;