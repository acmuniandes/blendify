import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Input, Icon } from 'react-native-elements';
import BlendifyButton from './../BlendifyComponents/Button';
import firebase from './../../firebase';

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
  register: {
    color: "whitesmoke",
    fontSize: 16,
    textDecorationLine: 'underline'
  }
})

const db = firebase.firestore();

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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

  logIn = () =>{
    
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {

      db.collection('users').doc(userCredentials.user.uid).get().then( snapshot => {

        this.storeUid(userCredentials);

      }).catch( error => {
        console.log('Error extrayendo información: ', error)
      })

    })
    .catch(error =>{
      //Alert
      console.log('Error haciendo login: ', error)
    })
  }

  storeUid = async (userCredentials) =>{
    const { navigation } = this.props
    try{
      await AsyncStorage.setItem('@Blendify:uid', userCredentials.user.uid);
      navigation.navigate('AppNav');
    }catch(error){
      console.log('Hubo un error guardando en la BD', error);
    }
  }

  componentDidMount = () => {
    this.invertStops(this.gradientStops);
  }

  render() {
    const { navigation } = this.props;
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
          title='Iniciar sesión'
          wide={true}
          onPress={this.logIn}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.register}> ¿Aún no tienes cuenta? </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default LogIn;
