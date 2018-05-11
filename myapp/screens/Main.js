import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Main extends Component {
  static navigationOptions = {
    title: 'Guess CSS Game',
    headerStyle: {
      backgroundColor: '#006266',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor() {
    super()
    this.state = {
      words: ['style', 'margin', 'padding'],
      letterUsed: [],
      problem: '',
      turnLeft: 5,
      answer: '',
      gameStatus: 'Good Guess!',
      dictio: [ 'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z' ]
    }
  }

  guess =(input)=>{
    if(this.state.turnLeft !== 0) {
      let usedWord = [...this.state.letterUsed]
      usedWord.push(input)
      let turn = this.state.turnLeft-1
      this.setState({
        ...this.state,
        letterUsed: usedWord,
        turnLeft: turn
      })
    }else {
      this.props.navigation.navigate('Finish')
    }
  }

  componentDidUpdate () {
    console.log("used word===", this.state.letterUsed)
  }

  componentDidMount () {
    let random = Math.floor(Math.random() * this.state.words.length)
    let wordPicked = this.state.words[random]
    let indexWord = Math.floor(Math.random() * wordPicked.length)
    let blankWords = wordPicked[indexWord]
    let wordSplit = wordPicked.split('').map(value => {
      let temp = ''
      if(blankWords === value) {
        temp += ' _ '
      }
      console.log('temp==', temp)
      return temp
    })

    this.setState({
      ...this.state,
      problem: wordSplit,
      answer: wordPicked
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxGuess}>
        <Text style={styles.guessWord}>{this.state.problem}</Text>
        </View>
        <Text style={styles.title}> Player: {this.props.navigation.getParam('username', 'playerone')}</Text>
        <Text style={styles.title}>Answer: {this.state.answer}</Text>
        <Text style={styles.title}>Used Letters: {this.state.letterUsed.join(',')}</Text>
        <Text style={styles.title}>Turns Left: {this.state.turnLeft}</Text>
        <Text style={styles.title}>Game Status: {this.state.gameStatus}</Text>
        
        <View style={styles.board}>
          {
            this.state.dictio.map((value, indx) => {
              if(this.state.letterUsed.indexOf(value) !== -1) {
                return (
                  <View key={'test-'+ indx} style={styles.lettersUsed}>
                    <TouchableOpacity
                      disabled={true}
                    >
                      <Text style={styles.text}>{this.state.dictio[indx]}</Text>
                    </TouchableOpacity>
                  </View>
                )
    
              }
              return (
                <View key={'test-'+ indx} style={styles.letters}>
                  <TouchableOpacity
                    onPress={() => this.guess(value)}
                  >
                    <Text style={styles.text}>{this.state.dictio[indx]}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 2
  },
  guessWord: {
    fontSize: 30
  },
  board: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  letters: {
    backgroundColor:'green',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10
  },
  lettersUsed: {
    backgroundColor:'red',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  boxGuess: {
    width: 200,
    borderBottomWidth: 2 
  }
})

export default Main;