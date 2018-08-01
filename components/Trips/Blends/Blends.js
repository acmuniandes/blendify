import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //Horizontal
    // justifyContent: 'center' //Vertical
  },  
  date: {

  },
  id: {

  },
  iconContainer:{

  },
  blendContainer:{

  }
});

class Blends extends React.Component {
  constructor() {
    super();
    this.gradientColors = ['#2B2C2B', '#0A0A0A'];
    this.gradientStops = [0, 1];
    this.invertStops(this.gradientStops);
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

  render() {
    const { navigation } = this.props;
    const { blends } = this.props; //props de navegación
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <FlatList
          data={blends}
          renderItem={({ item }) => {return(
          <View>
              <TouchableOpacity style={styles.blendContainer} onPress={navigation.push('Blend', item.blendReference)}>
                <View>
                  <Text style={styles.date}>{item.dateCreated}</Text>
                  <Text style={styles.id}>{item.id}</Text>
                </View>
                <View>
                  <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>{item.participantsLength}</Text>
                    <Icon
                      title={'account-circle'}
                      color='#1ed760'
                    />
                  </View>
                  <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>{item.songsLength}</Text>
                    <Icon
                      title={'album'}
                      color='#1ed760'
                    />
                  </View>                
                </View>
              </TouchableOpacity>
            </View>
          );}
          }
        />
      <Button
        title={''}
        icon='add'
      />
      </LinearGradient>
    );
  }
}

export default Blends;