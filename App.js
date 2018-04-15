import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {

  gradientColors = ['#2B2C2B', '#0A0A0A'];
  gradientStops = [0, 1];

  invertStops = stops => {
    for (var i = 0; i < stops.length; i++) {
      stops[i] = 1 - stops[i];
    }
    this.gradientColors.reverse();
    this.gradientStops.reverse();
  }

  componentWillMount = () => {
    this.invertStops(this.gradientStops);
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Blendify</Text>
          <Text style={styles.subtitle}>Escucha, descubre y comparte</Text>
        </View>

        <View style={styles.separator}/>

        <View>
          <Text style={styles.content}>
            ¡Si ven este texto ya están listos para el lunes!
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    borderColor: '#1ed760',
    width: '100%',
    borderBottomWidth: 2
  },
  title: {
    paddingTop: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 64
  },
  subtitle: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  content: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    paddingTop: 88
  }
});
