import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { Input, Icon } from 'react-native-elements';
import BlendifyButton from './../BlendifyComponents/Button';

import firebase from './../../firebase';
import { db } from './../../firebase';

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
  login: {
    color: "whitesmoke",
    fontSize: 16,
    textDecorationLine: 'underline'
  }
})


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
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

  register = () =>{
    const email = this.state.email
    firebase.auth().createUserWithEmailAndPassword(email, this.state.password).then( userCredentials => {

      const data = {
        name: this.state.name,
        email,
        blends: []
      }

      const setDoc = db.collection('users').doc(userCredentials.user.uid).set(data);

      this.storeUid(userCredentials);
    })
    .catch(error => {
      console.log(error)
      //ufff
    })
  }

  storeUid = async (userCredentials) =>{
    try{
      await AsyncStorage.setItem('@Blendify:uid', userCredentials.user.uid);
      navigation.navigate('AppNav');
    }catch(error){
      console.log('Hubo un error guardando en la BD', error);
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <Text style={styles.title}> Regístrate </Text>
        <Input
          containerStyle={styles.inputExteriorContainer}
          inputContainerStyle={styles.inputInteriorContainer}
          inputStyle={styles.input}
          selectionColor='whitesmoke'
          placeholderTextColor='whitesmoke'
          placeholder="Nombre"
          leftIcon={<Icon name='account-circle' size={24} color='#1ed760' />}
          onChangeText={(name) => this.setState({name})}
        />
        <Input
          containerStyle={styles.inputExteriorContainer}
          inputContainerStyle={styles.inputInteriorContainer}
          inputStyle={styles.input}
          selectionColor='whitesmoke'
          placeholderTextColor='whitesmoke'
          placeholder="Correo electrónico"
          leftIcon={<Icon name='mail-outline' size={24} color='#1ed760' />}
          onChangeText={(email) => this.setState({email})}
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
          onChangeText={(password) => this.setState({password})}
        />
        <BlendifyButton
          title='Registrarse'
          onPress={this.register}
          wide={true}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.login}> ¿Ya tienes cuenta? </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default SignUp;
