import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //Horizontal
    // justifyContent: 'center' //Vertical
  },
  titleContainer: {
    alignItems: 'center',
    borderColor: '#1ed760',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: '80%',
    borderRadius: 50
  },
  button: {
    backgroundColor: '#1ed760',
    color: "whitesmoke",
    borderRadius: 50
  },
});

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
    const { navigation } = this.props;
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Blendify</Text>
        </View>

        <View style={styles.content}>
          <Button
            title='Mis Blends'
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Blends')}
          />
          <Button
            title='Unirse a un Blend'
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Join')}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default Trips;
