import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo';

class Join extends React.Component {
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
      <LinearGradient>
        <Button
          title="Unirse por QR"
          icon="photo-camera"
        />
        <Button
          title="Ingresar código"
          icon="lock-outline"
        />
      </LinearGradient>
    );
  }
}

export default Join;
