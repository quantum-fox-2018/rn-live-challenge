import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewWord, getRandomWord} from '../stores/game/action'

class Main extends Component {

  randomIt = () => {
    const selectedWord = this.props.randomWords[0]
    this.props.getRandomWord(selectedWord)
  }

  componentDidMount () {
    this.randomIt()
  }

  render () {
    const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const buttonList = alphabets.map((huruf, index) => 
      <Button
        title={huruf}
        key={index}
        onPress={
          () => {
            this.props.addNewWord(huruf)
          }
        }
      />
      
      const hiddenWord = this.props.selectedWord.map(
        value => <Text>* </Text>
      )
    )
    return (
      <View>
        <Text>Guess This : </Text>
        <Text> {this.props.selectedWord} </Text>
        <Text>Word Used: {this.props.wordUsed} </Text>
        <Text>Turn left: </Text>
        <Text>Game Status: </Text>
        
        {buttonList}
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({
  wordUsed: state.game.wordUse,
  randomWords: state.game.randomWords,
  selectedWord: state.game.selectedWord
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNewWord,
  getRandomWord
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Main)