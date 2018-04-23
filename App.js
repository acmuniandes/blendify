import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Intro from './components/Intro/Intro';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {
  render() {
    return(
      <LogIn/>
    );
  }
}

export default App;
