import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import {  } from 'react-navigation';
import { db } from '../firebase'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  newGame = () => {
    db.ref('cssgame/words/').push({
      username: this.state.username
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="Input username"
          onChangeText={(username) => this.setState({username})}
        />
        <Button
          style={{
            
          }}
          onPress={this.newGame}
          title="New Game"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Home;