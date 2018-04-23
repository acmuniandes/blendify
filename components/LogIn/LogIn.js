import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Input, Icon } from 'react-native-elements';


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
    return (
      <View >
        <Text> Iniciar sesión </Text>
        <Input
          placeholder="Correo electrónico"
          leftIcon={<Icon name='mail-outline' size={24} color='black'/>}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          leftIcon={<Icon name='lock-outline' size={24} color='black'/>}
        />
        <Button
          title='Iniciar sesión'
        />
        <Text> ¿Aún no tienes cuenta? </Text>
      </View>
    );
  }
}

export default LogIn;
