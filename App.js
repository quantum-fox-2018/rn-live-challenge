import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen'
import MainScreen from './src/components/MainScreen'
import EndScreen from './src/components/EndScreen'
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Main: MainScreen,
  End: EndScreen
});


export default class App extends React.Component {
  render() {
    return (
      // <View>
        <Provider store={store}><RootStack /></Provider>
      //     <RootStack2 />
      // </View>  
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
