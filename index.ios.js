import React, { Component } from 'react';
import {
  AppRegistry,
  MapView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Api from "./src/api"


class weather extends Component {

  state = {
    pin: {
      latitude: 0,
      longitude: 0
    },
    city: '',
    temperature: '',
    description: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          annotations={[this.state.pin]}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
        >
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
      </View>
    );
  }

  onRegionChangeComplete = (region) => {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
    Api(region.latitude, region.longitude)
    .then((data) => {
      this.setState(data);
    });
  };
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => weather);
