import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet
} from 'react-native';
import Keyboard from './Main/Keyboard'

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Guess Your Words</Text>
        <View>
          <Text>
            Guess Words
          </Text>
        </View>
        <View>
          <Text>
            Game State
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Keyboard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    width: 200,
    color: '#841584'
  }
});

export default Main;