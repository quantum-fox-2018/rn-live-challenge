import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

class GameBoard extends Component {
  constructor() {
    super()
    this.state = {
      randomWords: [
        'flex',
        'font',
        'grid'
      ],
      gameStatus: false,
      letterUsed: [],
      turnsLeft: 3
    }
  }

  componentDidMount() {
    this.gameSetup()
  }

  gameSetup = () => {
    let index = Math.floor(Math.random() * 2)
    let arrWord = this.state.randomWords[index].split('')
    let gamwWord = ''
    console.log(arrWord)

    for (let i in arrWord) {
      let removeIdx = Math.floor(Math.random() * arrWord.length)
      if (i === removeIdx) {
        gameWord.push(arrWord[i])
      } else {

      }
    }
  }

  render() {
    return (
      <View>
        <Text>Game Board</Text>
        <Button
          title="Game End"
          onPress={() => this.props.navigation.navigate('GameEnd')}
        />
      </View>
    );
  }
}

export default GameBoard;