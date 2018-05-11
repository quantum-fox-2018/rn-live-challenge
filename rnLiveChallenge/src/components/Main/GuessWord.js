import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View, Text, StyleSheet
} from 'react-native';

class GuessWord extends Component {
  render() {
    let { randomWords } = this.props.guess
    console.log(this.props.guess)
    let text = randomWords[0].split('').map((word, index) => {
      return (<Text style={styles.txtWord} key={index}> {word} </Text>)
    })
    return (
      <View style={styles.container}>
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexWrap: 'nowrap'
  },
  txtWord: {
    fontSize: 30 
  }
});

const mapStateToProps = (state) => ({
  guess: state.guess
})

export default connect(mapStateToProps, null)(GuessWord);