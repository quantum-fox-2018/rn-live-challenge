import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Keyboard from '../components/Keyboard'
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      alphabets: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'],
      guessWords: [],
      life: 5,
      library: ['rama', 'diansyah', 'blablabla'],
      guessText: '',
      guessTextSecret: '',
      status: ''
    };
  }
  componentDidMount() {
    let max = this.state.library.length
    let indexWord = Math.floor(Math.random() * Math.floor(max))
    this.setState({
      guessText: this.state.library[indexWord]
    },
      this.hiddenText(this.state.library[indexWord])
    )
  }

  hiddenText (text) {
    let hiddenText = ''
    for (let i=0; i< text.length; i++) {
      hiddenText+= '_ '
    }
    this.setState({
      guessTextSecret: hiddenText
    })
  }

  guessWords = (word) => {
    let index = this.state.guessWords.findIndex( wordGuess => wordGuess === word)
    if (index === -1) {
      this.setState({
        guessWords: [...this.state.guessWords, word]
      })
      this.checkGuess(word)
    }
  }
  checkGuess = (word) => {
    
    let guess = this.state.guessText.indexOf(word)
    if (guess === -1) {
      let newLife = +this.state.life - 1
      this.setState({
        life: newLife,
        status: 'oops anda salah'
      })
      if (newLife === 0) {
        this.props.navigation.navigate('Finish', {
          status: 'kalah'
        })
      }
    } else {
      let guessArray = []
      for(let i=0; i<this.state.guessText.length; i++) {
        if(word === this.state.guessText[i]) {
          guessArray.push(i)
        }
      }
      console.log(guessArray)
      let splitArr = this.state.guessTextSecret.split(' ')
      let textArr = this.state.guessText.split('')
      for (let i=0; i<guessArray.length; i++) {
        splitArr.splice(guessArray[i], 1, textArr[guessArray[i]])
      }
      let finalArr = ''
      for(let i=0; i< splitArr.length;i++) {
        finalArr+= splitArr[i] + ' '
      }
      this.setState({
        guessTextSecret: finalArr,
        status: 'selamat huruf ada'
      })
      let checkAnswer = finalArr.indexOf('_')
      if(checkAnswer === -1){
        this.props.navigation.navigate('Finish', {
          status: 'menang'
        })
      }
     
    }
  }
  render() {
    let alphabet = this.state.alphabets.map( (alphabet, index) => 
      <Keyboard alphabet={alphabet} key={index} guessWords={this.guessWords}/>
    )
    return (
      <View >
      <View style={styles.parentContainer}>
        <Text style = {styles.textStyle}> { this.state.guessTextSecret} </Text>
        <Text style = {styles.textStyle}> Your life: { this.state.life} </Text>
        <Text style = {styles.textStyle}> Status: { this.state.status} </Text>
      </View>
      <View style={styles.alphaContainer}>
        {
          alphabet
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    width: 300,
    marginBottom: 8,
  }
})
export default MainScreen;