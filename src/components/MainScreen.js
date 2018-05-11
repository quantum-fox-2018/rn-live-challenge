import React, { Component } from 'react'
import { Text, View, getParam, Keyboard, TextInput, Button } from 'react-native'

class MainScreen extends Component {
  constructor() {
    super()
    this.state = {
      letter_used: [],
      turns_left: 0,
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


  handleChange(){

  }

  render() {
    return (
      <View>
        <Text>Guess</Text>
      <TextInput
        onChange={this.handleChange}
      />
      </View>
    );
  }
}

export default MainScreen