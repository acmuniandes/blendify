import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Input, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 32,
    color: "whitesmoke",
    textAlign: 'center',
    fontWeight: 'bold'
  },
  inputExteriorContainer: {
    margin: 8,
  },
  inputInteriorContainer:{
    borderColor: '#1ed760',
  },
  input:{
    color: 'whitesmoke'
  },
  buttonContainer:{
    padding: 16,
    width: '100%'
  },
  button:{
    backgroundColor: '#1ed760',
    color: "whitesmoke"
  },
  register: {
    color: "whitesmoke",
    fontSize: 16
  }
})

class LogIn extends React.Component {
  constructor(props) {
    super(props);
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
    const { navigation } = this.props
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <Text style={styles.title}> Inicia sesión </Text>
        <Input
          containerStyle={styles.inputExteriorContainer}
          inputContainerStyle={styles.inputInteriorContainer}
          inputStyle={styles.input}
          selectionColor='whitesmoke'
          placeholderTextColor='whitesmoke'
          placeholder="Correo electrónico"
          leftIcon={<Icon name='mail-outline' size={24} color='#1ed760' />}
        />
        <Input
          containerStyle={styles.inputExteriorContainer}
          inputContainerStyle={styles.inputInteriorContainer}
          inputStyle={styles.input}
          selectionColor='whitesmoke'
          placeholderTextColor='whitesmoke'
          placeholder="Contraseña"
          secureTextEntry={true}
          leftIcon={<Icon name='lock-outline' size={24} color='#1ed760' />}
        />
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          title='Iniciar sesión'
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.register}> ¿Aún no tienes cuenta? </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default LogIn;
