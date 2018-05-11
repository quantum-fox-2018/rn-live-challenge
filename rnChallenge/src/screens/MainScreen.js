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
      library: ['rama', 'diansyah', 'blablabla']
    };
  }

  guessWords = (word) => {
    let index = this.state.guessWords.findIndex( wordGuess => wordGuess === word)
    if (index === -1) {
      this.setState({
        guessWords: [...this.state.guessWords, word]
      })
    }
  }
  
  render() {
    let alphabet = this.state.alphabets.map( (alphabet, index) => 
      <Keyboard alphabet={alphabet} key={index} guessWords={this.guessWords}/>
    )
    return (
      <View >
      <Text> Main Screen </Text>
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

  },
  alphaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    borderTopColor: 'blue',
    borderTopWidth: 1,
    borderRightColor: 'blue',
    borderRightWidth: 1,
    borderLeftColor: 'blue',
    borderLeftWidth: 1,
  }
})
export default MainScreen;