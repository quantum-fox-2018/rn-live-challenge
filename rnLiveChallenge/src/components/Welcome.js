import React, { Component } from 'react';
import { 
  Text, View,
  Button, StyleSheet 
} from 'react-native'

class Welcome extends React.Component {
  render() {
    return (
      <View>
        <Button>New Game</Button>
      </View>
    );
  }
}

export default Welcome;