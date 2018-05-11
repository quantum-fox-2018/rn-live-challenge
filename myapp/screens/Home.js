import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native'

class Home extends Component {
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

  constructor () {
    super ()
    this.state ={
      username: ''
    }
  }

  setPlayer =() => {
    this.props.navigation.navigate('Main', {
      username: this.state.username
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter player username</Text>
        <View style={styles.textContainer}>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            onChangeText = {(name) => this.setState({username:name})}
            value={this.state.username}
            placeholder="username.."
            />
        </View>
        <Button
          style={styles.btnPlay}
          onPress = {this.setPlayer}
          title = "New Game"
          color = "#009432"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 20
  },
  textContainer: {
    margin: 20,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  input: {
    width: 200,
    paddingLeft: 20,
    paddingRight: 20
  },
  btnPlay: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20
  }
})

export default Home;