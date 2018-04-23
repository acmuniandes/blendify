import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false
    }
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

  confirm = () => {
    this.setState({ confirmed: true })
  }

  render() {
    return (
      <LinearGradient colors={this.gradientColors} locations={this.gradientStops}>
        <Button
          title=""
          icon="arrow-back"
          onPress={() => "hola"}
        />
        <Notice confirm={this.confirm} />
      </LinearGradient>
    );
  }
}

export default Create;
