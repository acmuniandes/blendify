import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';
import Intro from './components/Intro/Intro';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Trips from './components/Trips/Trips';
import Blends from './components/Trips/Blends/Blends';
import Join from './components/Trips/Join/Join';

const AppNav = StackNavigator({
  Trips: {
    screen: Trips
  },
  Blends: {
    screen: Blends
  },
  Join: {
    screen: Join
  }
}, {
    headerMode: 'none'
  });

const InitStack = StackNavigator({
  Intro: {
    screen: Intro
  },
  LogIn: {
    screen: LogIn
  },
  SignUp: {
    screen: SignUp
  }
}, {
    initialRouteName: 'Intro',
    headerMode: 'none'
  });

const SwitchFlow = SwitchNavigator(
  {
    InitStack: InitStack,
    AppNav: AppNav
  },
  {
    initialRouteName: 'InitStack'
  }
);

class App extends React.Component {
  render() {
    return (
      <SwitchFlow />
    );
  }
}

export default App;
