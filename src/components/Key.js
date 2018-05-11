import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Key extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.keyboard}>{this.props.keyChar}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5D6A7',
    margin: 2
  },
  keyboard: {
    textAlign: 'center',
    fontSize: 32,
    width: 40,
    height: 40,
  }
});

export default Key;