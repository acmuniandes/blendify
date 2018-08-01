import React from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //Horizontal
    // justifyContent: 'center' //Vertical
  },
  titleContainer: {
    alignItems: 'center',
    borderColor: '#1ed760',
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
    const { navigation } = this.props;
    const { blends } = this.props; //props de navegación
    return (
      <LinearGradient style={styles.container} colors={this.gradientColors} locations={this.gradientStops}>
        <FlatList
          data={blends}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.blendContainer} onPress={navigation.navigate('Blend', item.blendReference)}>
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