import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, Button, TouchableNativeFeedback, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { getData } from '../store/character/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class EndScreen extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  fetchData() {
    this.props.getData()
  }

  componentDidMount() {
    this.fetchData()
  }

  newGame() {
    this.setState({ game_status: true })
  }


  render() {
    const { game_status } = this.state
    return (
      <View>
        {
          game_status ? (
            <MainScreen game_status={game_status}/>
          ) : (
              <Button
                onPress={() => this.newGame()}
                title="New Game"
                color="green"
                accessibilityLabel="New Game For Good Lyfe"
              />
            )

        }
      </View>
    )
  }
}



const mapStateToProps = state => ({
  games: state.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);