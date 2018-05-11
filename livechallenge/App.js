import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Welcome from './src/screens/Welcome'
import Main from './src/screens/Main'
import Finish from './src/screens/Finish'
import { Provider } from 'react-redux'
import store from './src/stores/index'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator({
  Welcome: {
    screen: Welcome
  },
  Main: {
    screen: Main
  },
  Finish: {
    screen: Finish
  }
}, {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
)

export default class App extends React.Component{
  render() {
    return (
      <RootStack />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Sudah masuk testing
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
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
