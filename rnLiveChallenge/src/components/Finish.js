import React, { Component } from 'react';
import { 
  Text, View,
  Button, StyleSheet 
} from 'react-native';

class Finish extends React.Component {
  render() {
    return (
      <View>
        <Text>Win / Lose</Text>
        <Button 
          title="Play Again"
        />
      </View>
    );
  }
}

export default Finish;