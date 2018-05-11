/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import store from './src/store/index';
import Welcome from './src/components/Welcome';
import Main from './src/components/Main';
import Finish from './src/components/Finish';

const RootStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main'
    }
  },
  Finish: {
    screen: Finish,
    navigationOptions: {
      title: 'Finish'
    }
  }
},{
  initialRouteName: 'Welcome'
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}

/* <View style={styles.container}>
  <Text style={styles.welcome}>
    Welcome to React Native!
  </Text>
  <Text style={styles.instructions}>
    To get started, coba Edit
  </Text>
  <Text style={styles.instructions}>
    {instructions}
  </Text>
</View> */

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
