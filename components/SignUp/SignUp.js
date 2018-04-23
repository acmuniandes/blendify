import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Input, Icon } from 'react-native-elements';


class SignUp extends React.Component {
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
        <Text>Registrarse</Text>
        <Input
          placeholder="Nombre"
          leftIcon={<Icon name='account-circle' size={24} color='black' />}
        />
        <Input
          placeholder="Correo electrónico"
          leftIcon={<Icon name='mail-outline' size={24} color='black' />}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          leftIcon={<Icon name='lock-outline' size={24} color='black' />}
        />
        <Button
          title='Iniciar sesión'
        />
        <Text>¿Ya tienes una cuenta?</Text>
      </LinearGradient>
    );
  }
}

export default SignUp;