import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import ButtonCustom from '../components/ButtonCustom'

class FinishScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log(this.props.navigation.getParam('status'))
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {
        this.props.navigation.getParam('status') === 'kalah'?
        <Text style={styles.textStyle}>Anda belum beruntung</Text>:<Text style={styles.textStyle}>Selamat anda menang</Text>
      }
      <ButtonCustom {...this.props} next="Home" status="Main Lagi?"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    width: 300,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default FinishScreen;