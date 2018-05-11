import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import {Provider} from 'react-redux'
import Store from './src/store'
import Home from './src/components/Home'
import Board from './src/components/Board'
import Win from './src/components/Win'

const Navigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Board:{
    screen:Board,
    navigationOptions: {
      headerTitle: 'HangMan',
    }
  },
  Win:{
    screen:Win,
    navigationOptions:{
      headerTitle: 'Finish'
    }
  }
},{
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});