import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class GameState extends Component {
  render() {
    let { guessWords, turns } = this.props.guess
    let gWords = guessWords.split('').join(',')
    console.log(gWords)
    return (
      <View style={styles.statesG}>
        <Text>Used: {gWords}</Text>
        <Text>Turn Left: {turns}</Text>
        <Text>Game Status: </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statesG: {
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => ({
  guess: state.guess
})

export default connect(mapStateToProps, null)(GameState);