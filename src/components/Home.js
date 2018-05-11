import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, StyleSheet} from 'react-native'
export default class Welcome extends Component {
 
  main(){
    this.props.navigation.navigate('Board',{
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20}}>
        HANGZMAN
        </Text>
        <Button
        onPress={()=>this.main()}
        title="PLAY"
        />
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

AppRegistry.registerComponent('AwesomeProject', () => Welcome)