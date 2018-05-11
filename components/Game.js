import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getWords } from '../store/words/actions';
import { connect } from 'react-redux';

class Game extends Component {
  constructor() {
    super()
    this.setState = {
      words: []
    }
  }
  componentDidMount() {
    this.props.getWords()
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getWords
}, dispatch)

export default Game;