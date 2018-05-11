import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class FinishScreen extends React.Component {
  static navigationOptions = {
    title: 'Finish',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity>
          <Text onPress={ () => this.props.navigation.navigate('Games')}>Play Again</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
