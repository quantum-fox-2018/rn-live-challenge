import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import FinishScreen from '../screens/FinishScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const GamesStack = createStackNavigator({
  Games: GamesScreen,
});

GamesStack.navigationOptions = {
  tabBarLabel: 'Games',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-game-controller-a${focused ? '' : '-outline'}` : 'md-game-controller-a'}
    />
  ),
};

const FinishStack = createStackNavigator({
  Finish: FinishScreen,
});

FinishStack.navigationOptions = {
  tabBarLabel: 'Finish',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-done-all${focused ? '' : '-outline'}` : 'ios-done-all'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  GamesStack,
  FinishStack,
});
