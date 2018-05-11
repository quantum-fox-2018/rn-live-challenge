import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import WelcomeScreen from './src/screens/WelcomeScreen'
import MainScreen from './src/screens/MainScreen'
import FinishScreen from './src/screens/FinishScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator({
  Home: {
    screen: WelcomeScreen
  },
  Main: {
    screen: MainScreen,
  },
  Finish: {
    screen: FinishScreen
  }
}, {
  navigationOptions: {
    headerTitle: "GUESS CSS Props",
    headerStyle: {
      padding: 8,
      },
    }
})

export default class App extends Component {
  render() {
    return (
      <RootStack />
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
