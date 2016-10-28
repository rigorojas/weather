'use strict';
import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import Temperature from "../../Scenes/Temperature/Temperature";

export class DrawerMenu extends Component {
    static propTypes = {
        navigator: React.PropTypes.object.isRequired,
        closeDrawer: React.PropTypes.func.isRequired
    };

    onButtonPressTemperature = () => {
        this.props.navigator.push({
            scene: Temperature,
            title: "Temperature",
            passProps: {
            }
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Please Select a Project</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onButtonPressTemperature}
                >
                    <Text>Temperature</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.closeDrawer}
                >
                    <Text>Close Drawer</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
});
