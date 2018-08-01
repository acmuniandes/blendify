import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#1ED760',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 2
  },
  leftContainer: {

  },
  rightContainer: {

  },
  title: {
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
  logo:{
    height: 80,
    width: 80
  }
});

class BlendifyTitle extends React.Component{
  render(){
    return(
      <View style={styles.titleContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Blendify</Text>
          <Text style={styles.subtitle}>Escucha, descubre y comparte</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image style={styles.logo} source={require('./../../assets/logo/black.png')}/>
        </View>
      </View>
    );
  }
}

export default BlendifyTitle;