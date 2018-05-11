import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Playing from './screens/Playing'

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
      for (let i = 1; i < 26; i++) {
        generateBoard.push(
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('a')}
              title='a'
              color="#0f0"
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
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.win ? <Text>you win</Text>:<Text></Text>}
        <Text style={styles.title}>{this.state.keyanswer}</Text>
        <View style={styles.containerboard}>

          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('b')}
              title='b'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('c')}
              title='c'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('d')}
              title='d'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('e')}
              title='e'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('f')}
              title='f'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('g')}
              title='g'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('h')}
              title='h'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('i')}
              title='i'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('j')}
              title='j'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('k')}
              title='k'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('l')}
              title='l'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('m')}
              title='m'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('n')}
              title='n'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('o')}
              title='o'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('p')}
              title='p'
              color="#0a0"
              />
          </View>

          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('q')}
              title='q'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('r')}
              title='r'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('s')}
              title='s'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('t')}
              title='t'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('u')}
              title='u'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('v')}
              title='v'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('w')}
              title='w'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('x')}
              title='x'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('y')}
              title='y'
              color="#0a0"
              />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={()=>this.check('z')}
              title='z'
              color="#0a0"
              />
          </View>
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
