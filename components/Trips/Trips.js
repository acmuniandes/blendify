import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import BlendifyButton from './../BlendifyComponents/Button';
import BlendifyTitle from './../BlendifyComponents/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //Horizontal
    // justifyContent: 'center' //Vertical
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Trips extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: ''
    }
    this.retrieveUid();
  }

  gradientColors = ['#2B2C2B', '#0A0A0A'];
  gradientStops = [0, 1];

  invertStops = stops => {
    for (var i = 0; i < stops.length; i++) {
      stops[i] = 1 - stops[i];
    }
    this.gradientColors.reverse();
    this.gradientStops.reverse();
  }

  componentDidMount = () => {
    this.invertStops(this.gradientStops);
  }

  retrieveUid = async () => {
    try {
      const value = await AsyncStorage.getItem('@Blendify:uid');
      if (value !== null) {
        this.setState({uid: value})
        console.log(value);
      }
     } catch (error) {
       console.log('Error retrieving data', error);
     }
  }

  render() {
    const { navigation } = this.props;
    const uid = this.state.uid;

    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <BlendifyTitle />

        <View style={styles.content}>
          <BlendifyButton
            title={'Mis Blends: ' + uid}
            onPress={() => navigation.navigate('Blends')}
          />
          <BlendifyButton
            title={'Unirse a un Blend'}
            onPress={() => navigation.navigate('Join')}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default Trips;
