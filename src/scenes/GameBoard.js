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

class GameBoard extends Component {
  componentDidMount() {
    let randomWord = this.props.game.randomWords
    this.props.generataBoard(randomWord)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess CSS Props</Text>
        <View>

        </View>

        <Button
          title="Game End"
          onPress={() => this.props.navigation.navigate('GameEnd')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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