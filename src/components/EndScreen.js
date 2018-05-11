import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, Button, TouchableNativeFeedback, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { getData } from '../store/game/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class EndScreen extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }




  render() {
   const status_winner = this.props.status_winner
    return (
      <View>
        {
          status_winner ? (
            <Text>YAY wou win</Text>
          )
          : (
            <Text>Oh no, You Lost</Text>
          )
        }
       
      </View>
    )
  }
}




export default EndScreen;