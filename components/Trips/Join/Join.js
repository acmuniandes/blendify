import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //Horizontal
    // justifyContent: 'center' //Vertical
  },
  titleContainer: {
    alignItems: 'center',
    borderColor: '#1ED760',
    width: '100%',
    paddingBottom: 8,
    borderBottomWidth: 2
  },
  title: {
    paddingTop: 16,
    color: '#FFFFFF',
    textAlign: 'left',
    width: '100%',
    fontSize: 60
  },
  subtitle: {
    textAlign: 'left',
    width: '100%',
    color: '#FFFFFF'
  },
  content: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    paddingTop: 88
  },
  message: {
    color: '#FFF',
    padding: 16,
    fontSize: 28
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#1ed760'
  },
  buttonContainer: {
    padding: 16,
    width: '100%'
  },
  button: {
    backgroundColor: '#1ed760',
    //color: "whitesmoke"
  },
});

class Join extends React.Component {
  
  gradientColors = [];
  gradientStops = [];

  constructor(props) {
    super(props);
    this.gradientColors = ['#2B2C2B', '#0A0A0A'];
    this.gradientStops = [0, 1];
    this.invertStops(this.gradientStops);
  }

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
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
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
