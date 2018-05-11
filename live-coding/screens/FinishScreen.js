import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class FinishScreen extends React.Component {
  static navigationOptions = {
    title: 'Finish',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>On Dev For Finish</Text>
        </View>
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
