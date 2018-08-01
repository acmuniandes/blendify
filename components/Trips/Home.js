import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Modal } from 'react-native';
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

class Home extends React.Component {
  constructor() {
    super();

    this.gradientColors = ['#2B2C2B', '#0A0A0A'];
    this.gradientStops = [0, 1];
    this.invertStops(this.gradientStops);

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

  retrieveUid = async () => {
    try {
      const value = await AsyncStorage.getItem('@Blendify:uid');
      if (value !== null) {
        this.setState({uid: value})
        this.
      }
     } catch (error) {
       console.log('Error retrieving data', error);
     }
  }

  retrieveData = (uid) =>{
    db.collection('users').doc(uid).get().then( snapshot => {
      this.setState({ user_data: snapshot.data() })
    }).catch( error => {
      console.log('Error extrayendo información: ', error)
    });
  }

  render() {
    const { navigation } = this.props;
    const uid = this.state.uid;

    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <BlendifyTitle />

        <View style={styles.content}>
          <Text>¡Bienvenido de nuevo, {this.state.user_data.name}!</Text>
          <View>
            <BlendifyButton
              title={'Mis Blends: ' + uid}
              onPress={() => navigation.push('Blends')}
            />
            <BlendifyButton
              title={'Unirse a un Blend'}
              onPress={() => navigation.push('Join')}
            />
          <View>
        </View>
      </LinearGradient>
    );
  }
}

export default Home;
