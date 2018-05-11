import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Main extends Component {
  static navigationOptions = {
    title: 'Guess CSS Game',
    headerStyle: {
      backgroundColor: '#006266',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View>
        <Text>Main page</Text>
        <Text>{this.props.navigation.getParam('username', 'playerone')}</Text>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Finish')}
        >
            <Text style = {styles.text}>
               Finish page
            </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Main;