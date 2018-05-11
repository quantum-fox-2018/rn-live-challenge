import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Keyboard extends Component {

  constructor () {
    super()
    this.state = {
      color: 'green',
    }
  }
  guess = () => {
    this.props.guessWords(this.props.alphabet)
    this.setState({
      color: 'red'
    })
  }
  render() {
    return (
      <View style={{
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
      }}>
        <Button 
        title={this.props.alphabet}
        color={this.state.color}
        onPress={this.guess}
        />
      </View>
    );
  }
}



export default Keyboard;