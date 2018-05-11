import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet
} from 'react-native';

class Keyboard extends Component {
  render () {
    return (
      <TouchableHighlight 
        style={styles.wordCard}
      >
        <Text style={styles.txtWord}>a</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  txtWord: {
    fontSize: 10
  }
});

export default Keyboard;