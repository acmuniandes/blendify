import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-elements';

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
    color: "whitesmoke"
  },
  logo:{

  }
});

class Intro extends React.Component {

  gradientColors = [];
  gradientStops = [];

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      activeSlide: 0
    }
    this.gradientColors = ['#2B2C2B', '#0A0A0A'];
    this.gradientStops = [0, 1];
    this.invertStops(this.gradientStops);
  }

  messages = [
    'Comparte tu música en el carro! Dale la oportunidad a todos de esucuchar algo que les guste y descubrir los gustos de los demás.',
    'Regístrate y comienza a armar tus playlist para tus viajes, es tan sencillo como escanear un código QR',
    'Las playlist se crean con base en los gustos de los usuarios que vayan en el viaje, así todos aportan algo de su música al viaje',
    {
      end: true
    }
  ];

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
    const { navigation } = this.props
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <View style={styles.titleContainer}>
          <Image style={styles.logo} source={require('./../../assets/logo/black.png')}/>
          <Text style={styles.title}>Blendify</Text>
          <Text style={styles.subtitle}>Escucha, descubre y comparte</Text>
        </View>

        <View style={{ height: 300 }}>
          <Carousel
            layout='default'
            ref={(c) => { this._carousel = c; }}
            data={this.messages}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            renderItem={({ item }) => {
              return (
                item.end ?
                  <View>
                    <Button
                      title="Continuar"
                      containerStyle={styles.buttonContainer}
                      buttonStyle={styles.button}
                      onPress={() => navigation.navigate('LogIn')}
                    />
                  </View> :
                  <View>
                    <Text style={styles.message}>{item}</Text>
                  </View>
              );
            }}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
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
