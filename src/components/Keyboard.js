import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputKey } from '../store/game/actions';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native';
import Key from './Key';

class Keyboard extends Component {
  constructor() {
    super(),
    this.state = {
      keyboard: 'abcdefghijklmnopqrstuvwxyz',
      usedWord: []
    }
  }

  pressedKey = (item) => {
    let currentState = this.props.game.gameWord
    console.log(currentState)
    this.setState(prevState => ({
      usedWord: [...prevState.usedWord, item]
    }))
    this.props.inputKey(item, currentState)
  }

  render() {
    let arrKey = this.state.keyboard.split('')
    let usedWord = this.state.usedWord

    return (
      <View style={styles.container}>
        <Text>Used word(s): {usedWord.join(', ')}</Text>
        <FlatList
          numColumns={7}
          data={arrKey}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => this.pressedKey(item)}>
              <Key keyChar={item} />
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputKey
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard);