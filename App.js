import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './componenst/Home'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          flex: 1,
          fontSize: 24,
          fontWeight: 'bold',
          justifyContent: 'flex-start',
          marginTop: 20
        }}>Guess CSS Props</Text>
        <Home/>
      </View>
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
});