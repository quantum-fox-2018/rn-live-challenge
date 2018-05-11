import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generataBoard } from '../store/game/actions';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import Keyboard from '../components/Keyboard';

class GameBoard extends Component {
  componentDidMount() {
    let randomWord = this.props.game.randomWords
    this.props.generataBoard(randomWord)
  }

  render() {
    let { gameWord, turnsLeft, gameStatus } = this.props.game

    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            {gameWord.join('  ')}
          </Text>
          <Text>Used: </Text>
          <Text>Turns Left: {turnsLeft}</Text>
          <Text>Game Status {gameStatus}</Text>
        </View>

        <Keyboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  generataBoard
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);