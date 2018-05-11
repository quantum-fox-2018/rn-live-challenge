import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
class ButtonCustom extends Component {
  
  nextPage = () => {
    console.log(this.props)
    this.props.navigation.navigate(`${this.props.next}`)
  }
  render() {
    return (
        <Button
          title="Learn More"
          color="green"
          width= "80%"
          onPress={ this.nextPage }
          accessibilityLabel="Learn more about this purple button"
        />
    );
  }
}

export default ButtonCustom;