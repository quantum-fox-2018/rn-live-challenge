import React, { Component } from 'react'
import { Text, View} from 'react-native'
import Keyboard from '../components/Keyboard'
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      alphabets: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z']
    };
  }
  render() {
    let alphabet = this.state.alphabets.map( alphabet => 
      <Keyboard alphabet={alphabet}/>
    )
    return (
      <View>
      <Text> Main Screen </Text>
      {
        alphabet
      }
      </View>
    );
  }
}

export default MainScreen;