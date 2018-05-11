import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }
  render() {
    return (
      <View style={styles.alphaContainer}>
        <Text>{this.props.alphabet}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alphaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomColor: 'blue',
  }
})

export default Keyboard;