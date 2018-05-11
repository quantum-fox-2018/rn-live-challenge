import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

class Finish extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Game is finished</Text>
        <Button
        title="play again"
        onPress = {
          () => {
            this.props.navigation.navigate('Main')
          }
        }></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Finish