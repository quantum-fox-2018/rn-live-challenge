import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { navigate } from 'react-navigation';
import { db } from '../firebase';
import Game from './Game';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  newGame = () => {
    db.ref('cssgame/users/').push({
      username: this.state.username
    })
    // this.props.navigation.push('Game')
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
          onPress={() => this.props.navigation.navigate('Game')}
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