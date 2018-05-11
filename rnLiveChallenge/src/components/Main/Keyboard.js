import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { matchWords } from '../../store/Guess/guess.action'

class Keyboard extends Component {
  hitButton = () => {
    // maximum call stack
    let alphabet = this.props.alphabet
    console.log(alphabet)
    let sendData = {
      winStatus: false,
      guessWords: alphabet
    }
    console.log(senData)
    // this.props.matchWords(alphabet)
  }

  render () {
    let alphabet = this.props.alphabet
    return (
      <TouchableHighlight
        // onPress={this.hitButton}
        style={styles.wordCard}
      >
        <Text style={styles.txtWord}>{alphabet}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wordCard: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#24db13',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtWord: {
    fontSize: 40 
  }
});

// const mapDispatchToProps = (dispatch) => ({
//   matchWords
// }, dispatch) 

// export default connect(null, mapDispatchToProps)(Keyboard);
export default Keyboard;