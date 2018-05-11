import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class Main extends Component {
    constructor() {
        super()
        this.state={
            kata:[],
            letterUsed:null,
            turnleft:5,
            gamestatus:true,
            wordUsed:[],
            cobaWord:''
        }
    }
    componentDidMount(){
        let target = this.props.board.randomWord[Math.floor(Math.random()*(this.props.board.randomWord.length-1))].toUpperCase()
        console.log(target)
        let coba = ''
        let random = Math.floor(Math.random()*(target.length-1))
        target = target.split('').map((e,i)=>{
            if(i==random){
                coba=e
                return '_'
            }else{
                return e
            }
        })
        this.setState({
            ...this.state,
            letterUsed:target.join(''),
            cobaWord:coba,
            kata:this.props.board.kata,
        })
    }
    gamePlay(i){
        let turn = this.state.turnleft
        console.log(i)
        turn--
        if(i==this.state.cobaWord){
            this.props.navigation.navigate('Win',{
                status: 'ANDA MENANG'
            }) 
        }else if(turn==0){
            this.props.navigation.navigate('Win',{
                status: 'ANDA KALAH'
            })
        }else{
            let wordUsedMove = this.state.wordUsed
            wordUsedMove.push(i)
            this.setState({
                ...this.state,
                wordUsed:wordUsedMove,
                turnleft:turn
            })
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <View >
            <Text style={{fontSize:30}}>
            {this.state.letterUsed}
            </Text>
            <Text>
            Used: {this.state.wordUsed.join(',')}
            </Text>
            <Text>
            Turn Left: {this.state.turnleft}
            </Text>
        </View>
        <View style={styles.board}>
          {
            this.state.kata.map((e,i)=>{
              if(this.state.wordUsed.indexOf(e)!==-1){
                  return (
                      <TouchableHighlight
                      key={i}
                      style={styles.disable}
                      disabled={true}
                      >
                      <Text
                      style={styles.text}
                      >{e}</Text>
                      </TouchableHighlight>
                  )
              }else {
                  return (
                      <TouchableHighlight
                      key={i}
                      style={styles.column}
                      onPress={()=>this.gamePlay(e)}
                      >
                      <Text
                      style={styles.text}
                      >{e}</Text>
                      </TouchableHighlight>
                  )
              }
            })
          }
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    board:{
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 360
    },
    boardHeader:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    column:{
        justifyContent: 'center',
        backgroundColor:'green',
        margin:5,
        width:45,
        height:45
    },
    disable:{
        justifyContent: 'center',
        backgroundColor:'red',
        margin:5,
        width:45,
        height:45
    },
    text:{
        textAlign: 'center'
    }
})

mapStateToProps = (state) => ({
   board:state
})
  
mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    },dispatch)
)
export default connect(mapStateToProps,mapDispatchToProps)(Main)