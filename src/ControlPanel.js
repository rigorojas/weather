'use strict';
import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export class ControlPanel extends Component {
    static propTypes = {
       closeDrawer: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Major US Cities</Text>
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
