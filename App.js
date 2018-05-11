import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './components/Home';
import Game from './components/Game';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text style={{
          flex: 1,
          fontSize: 24,
          fontWeight: 'bold',
          justifyContent: 'flex-start',
          marginTop: 30
        }}>Guess CSS Props</Text>
        <Home/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createStackNavigator({
  Home: {
    screen: App
  },
  Game: {
    screen: Game
  }
});