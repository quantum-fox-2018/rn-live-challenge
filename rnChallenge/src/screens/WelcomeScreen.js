import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={ styles.containerButton}>
        <ButtonCustom next="Main" {...this.props} status="Mulai"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default WelcomeScreen;