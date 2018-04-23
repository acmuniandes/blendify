import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo';

class Trips extends React.Component {
  constructor() {
    super();
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
  render() {
    return (
      <LinearGradient colors={this.gradientColors} locations={this.gradientStops}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Blendify</Text>
        </View>
        <View style={styles.separator} />

        <Button
          title='Crear viaje'
        />
        <Button
          title='Unirse a un viaje'
        />
      </LinearGradient>
    );
  }
}

export default Trips;
