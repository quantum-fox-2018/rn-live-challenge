import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, ScrollView
} from 'react-native';
import GuessWord from './Main/GuessWord';
import GameState from './Main/GameState';
import Keyboard from './Main/Keyboard';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  }

  render() {
    let keyboards = this.state.alphabet.map((alpha, index) => {
      return (<Keyboard alphabet={alpha} key={index}/>)
    })

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.gueses}>
            <GuessWord />
          </View>
          <View>
            <GameState />
          </View>
          <View style={styles.keyboardStyle}>
            {keyboards}
          </View>
        </View>
      </ ScrollView>
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
  },
  keyboardStyle: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  gueses: {
    flexWrap: 'nowrap'
  }
});

export default Main;