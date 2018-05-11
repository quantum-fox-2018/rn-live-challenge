import React, { Component } from 'react'
import { Text, View, getParam, Keyboard, TextInput, Button } from 'react-native'
import EndScreen from './EndScreen';

class MainScreen extends Component {
  constructor() {
    super()
    this.state = {
      letter_used: [],
      turns_left: 10,
      answer: 'style',
      notif: false,
      youranswer: '',
      status_winner: ''
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    // alert('Keyboard Shown');
  }

  _keyboardDidHide() {
    // alert('Keyboard Hidden');
  }

  checkPlaying(){
    if(this.state.turns_left===0){
      let status_winner = this.state.status_winner
      status_winner===false
      this.setState({status_winner:status_winner})
      alert('You Lose')
      // return(
      //   <EndScreen status_winner={status_winner}/>
      // )
    }
    else if(this.state.answer===this.state.youranswer){
      status_winner===true
      this.setState({status_winner:status_winner})
      alert('You Win')
      // return(
      //   <EndScreen status_winner={status_winner}/>
      // )
    }
   
  }

  

  render() {
    const { turns_left } = this.state
    return (
      <View>
        <TextInput
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => this.setState({ youranswer: text, turns_left: turns_left-1 })}
        />
        {this.checkPlaying()}
        <Text>Turns Left: {turns_left}</Text>
      </View>

    );
  }
}

export default MainScreen