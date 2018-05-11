import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/store';

import {
  createStackNavigator
} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MenuScreen from './src/scenes/MainMenu';
import BoardScreen from './src/scenes/GameBoard';
import EndScreen from './src/scenes/GameEnd';

const RootStack = createStackNavigator({
  GameBoard: {
    screen: BoardScreen,
    title: 'Game Board'
  },
  MainMenu: {
    screen: MenuScreen,
    title: 'Main Menu'
  },
  GameEnd: {
    screen: EndScreen,
    title: 'Game End'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}

