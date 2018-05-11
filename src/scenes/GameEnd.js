import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class GameEnd extends Component {
  render() {
    return (
      <View>
        <Text>Game End</Text>
        <Button
          title="Main Menu"
          onPress={() => this.props.navigation.navigate('MainMenu')}
        />
      </View>
    );
  }
}

export default GameEnd;