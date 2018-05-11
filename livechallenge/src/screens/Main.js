import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'

class Main extends Component {
  render () {
    return (
      <View>
        
        <Text>_</Text>
        <Text>_</Text>
        <Text>_</Text>
        <Text>_</Text>
        <Text>_</Text>

        <Text>Used: </Text>
        <Text>Turn left: </Text>
        <Text>Game Status: </Text>
        <Button
          title="A"/>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main