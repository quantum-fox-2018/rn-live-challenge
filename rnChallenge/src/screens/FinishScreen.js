import React, { Component } from 'react'
import { Text, View} from 'react-native'
import ButtonCustom from '../components/ButtonCustom'

class FinishScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View>
      <Text> Finish Screen </Text>
      <ButtonCustom {...this.props} next="Welcome"/>
      </View>
    );
  }
}

export default FinishScreen;