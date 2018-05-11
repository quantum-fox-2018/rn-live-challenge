import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      alpha: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }
  }
  static navigationOptions = {
    title: 'Games',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Suggest This Word</Text>
            <Text style={styles.getStartedText}>_ _ _ _ _</Text>

            <Text style={styles.getStartedText}>Used: ...</Text>
            <Text style={styles.getStartedText}>Turn left: 10</Text>
            <Text style={styles.getStartedText}>Game Status: ...</Text>
          </View>

          <TouchableOpacity>
            <View>
              <Text>     A B C D E F G     </Text>
              <Text>     H I J K L M N     </Text>
              <Text>     O P Q R S T U     </Text>
              <Text>       V W X Y Z     </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabNewGame: {
    paddingTop: 200,
    color: 'green',
    alignItems: 'center',
  }
});