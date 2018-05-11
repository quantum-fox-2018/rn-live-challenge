import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewWord, getRandomWord, resetGame} from '../stores/game/action'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wordNow: [],
      correctCount: 0,
      winStatus: false
    }
  } 

  randomIt = () => {
    let randomNumber = Math.floor((Math.random() * 2) + 0);
    const selectedWord = this.props.randomWords[randomNumber]
    this.props.getRandomWord(selectedWord)

    let hiddenWord = []
    for (let i = 0; i < selectedWord.length; i++) {
      hiddenWord.push("_ ") 
    }
    this.setState({
      wordNow: hiddenWord
    })
  }

  componentDidMount () {
    this.props.resetGame()
    this.randomIt()
  }

  componentDidUpdate () {
    if (this.state.correctCount === this.props.selectedWord.length) {
      alert('you win')
      this.setState({
        winStatus: true,
        correctCount: 0
      })
    }
  }
  
  wordPressed = (huruf) => {
    for (let i = 0; i < this.props.selectedWord.length; i++) {
      if (this.props.selectedWord[i] === huruf) {
        let wordNow = this.state.wordNow
        wordNow[i] = this.props.selectedWord[i]
        let correctCount = this.state.correctCount
        correctCount += 1
        this.setState({
          wordNow: wordNow,
          correctCount: correctCount
        })
      }
    }
    
    if (this.state.correctCount === this.props.selectedWord.length) {
      alert('you win')
      this.setState({
        winStatus: true
      })
    }
    this.props.addNewWord(huruf)
  }

  render () {
    const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const buttonList = alphabets.map((huruf, index) => 
      <Button
        title={huruf}
        key={index}
        onPress={
          () => {
            this.wordPressed(huruf)
          }
        }
      />
    )

    return (
      <View>
        
        {
            this.state.winStatus ? <Button
            title="you win"
            onPress={
              () => {
                this.props.navigation.navigate('Finish')
              }
            }/>
            : 
            <ScrollView>
          <Text>Guess This : </Text>
          <Text>{this.state.wordNow}</Text>
          <Text>Word Used: {this.props.wordUsed} </Text>
          <Text>Correct Count: {this.state.correctCount}</Text>
          <Text>Turn left: </Text>
          <Text>Game Status: </Text>
          
          {buttonList}
        </ScrollView>
          }
          
          
        
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
  getRandomWord,
  resetGame
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Main)