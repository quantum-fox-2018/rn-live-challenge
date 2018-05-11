import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
class ButtonCustom extends Component {
  
  nextPage = () => {
    this.props.navigation.navigate(`${this.props.next}`)
  }
  render() {
    return (
        <Button
          title={this.props.status}
          color="green"
          width= "100"
          onPress={ this.nextPage }
          accessibilityLabel="Learn more about this purple button"
        />
    );
  }
}

export default ButtonCustom;