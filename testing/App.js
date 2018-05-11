import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [],
      keyanswer: '',
      win: false,
      key:['background','border','clear','cursor','display','flex','font','grid','height','width']
    }
  };
  componentDidMount() {
    let generateBoard  = []
    let angka = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      for (let i = 0; i < 26; i++) {
        generateBoard.push(
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check(angka[i])}
              title={angka[i]}
              color="#030"
              />
          </View>
        )
      }
      this.setState({
         board: generateBoard
       })
  }

  check (word) {
    this.setState({
      keyanswer:this.state.keyanswer + word
    })
      for (let i = 0; i < this.state.key.length; i++) {
        if (this.state.key[i]  == this.state.keyanswer){
          this.setState({
            win: true
          })
        }
      }
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.win ? <Text>you win</Text>:<Text></Text>}
        <Text style={styles.title}>{this.state.keyanswer}</Text>
        <View style={styles.containerboard}>
          {this.state.board.map(data =>(
            data
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  title: {

  },
  containerboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  btn: {
    width:'11%',
    margin:5,
    borderRadius: 2,
  }
})
