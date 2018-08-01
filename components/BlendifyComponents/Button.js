import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  buttonContainer:{
    padding: 16,
    width: '100%',
    borderRadius: 48
  },
  button:{
    backgroundColor: '#1ed760',
    borderRadius: 48
  }
})

class BlendifyButton extends React.Component{

  constructor(){
    super();
  }

  render(){

    const { onPress, title, wide } = this.props;

    return(
      <View style={wide ? {'width' : '100%'} : {}}>
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={{color: 'whitesmoke'}}
          title={title}
          onPress={onPress}
        />
      </View>
    )
  }

}


export default BlendifyButton;