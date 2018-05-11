import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native'

class Finish extends Component {
  static navigationOptions = {
    title: 'Home',
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
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Yay! You Win!!</Text>
        </View>
        <View>
          <Button
          style={styles.btn}
            onPress={()=> this.props.navigation.navigate('Home')}
            title="Play Again"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: '#006266',
    fontWeight: 'bold'
  },
  textContainer: {
    margin: 20
  },
  btn: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'white',
    width: 100,
    height: 100,
    backgroundColor: '#009432'
  },
})


export default Finish;