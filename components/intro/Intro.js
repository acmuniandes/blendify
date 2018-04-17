import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';

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
}
});

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      activeSlide: null
    }
  }

  gradientColors = ['#2B2C2B', '#0A0A0A'];
  gradientStops = [0, 1];

  messages = [
    'Comparte tu música en el carro! Dale la oportunidad a todos de esucuchar algo que les guste y descubrir los gustos de los demás.',
    'Regístrate y comienza a armar tus playlist para tus viajes, es tan sencillo como escanear un código QR',
    'Las playlist se crean con base en los gustos de los usuarios que vayan en el viaje, así todos aportan algo de su música al viaje'
  ]

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

        <View style={styles.separator} />

        <View style={{ height: 300 }}>
          <Carousel
            layout='default'
            ref={(c) => { this._carousel = c; }}
            data={this.messages}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={styles.message}>{item}</Text>
                </View>
              );
            }}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          <Pagination
            dotsLength={this.messages.length}
            activeDotIndex={this.state.activeSlide}
            dotStyle={styles.dot}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default Intro;
