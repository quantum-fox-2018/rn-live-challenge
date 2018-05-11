import React, { Component } from 'react';
import { 
  Text, View,
  Button, StyleSheet 
} from 'react-native';

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Main')} 
          title="New Game"
          style={styles.width}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    width: 200,
    color: '#841584'
  }
});


export default Welcome;