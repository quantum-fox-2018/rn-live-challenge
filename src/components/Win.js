import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
export default class Finish extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 10}}>
          FINISH
        </Text>
        <Text style={{fontSize: 20}}>
          {this.props.navigation.state.params.status}
        </Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})