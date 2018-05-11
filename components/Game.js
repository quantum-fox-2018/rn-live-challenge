import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getWords } from '../store/words/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      used: [],
      words: [],
      word: '',
      isWin: false
    }
  }
  componentDidMount() {
    this.props.getWords()
    this.randomWord()
  }
  randomWord = () => {
    let random = Math.floor((Math.random() * this.props.words.data.length))
    this.state.word = this.props.words.data[random]
  }
  press = (letter) => {
    this.state.used.push(letter)
    let word = this.state.word
    let random = Math.floor((Math.random() * word.length))
    let hidden = kata.splice(random, 1)

    if(hidden.indexOf(input) == -1){
      used.push(letter)
    } else {
      this.setState({
        isWin: true
      })
    }
  }
  render() {
    let random = Math.floor((Math.random() * this.props.words.data.length))
    return (
      <View style={{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <Text style={{fontSize: 24}}>{this.state.word}</Text>
        <Text>{this.state.used}</Text>
        <FlatList
          style={{
            flex: 1,
            width: 100
          }}
          data={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => 
          <Button
            onPress={()=>this.press(item)}
            title={item}
          />
          }
        />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);