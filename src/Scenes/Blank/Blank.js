import React, { Component } from 'React';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from "./styles";
import Button from 'react-native-button';

export default class Blank extends Component {
    render() {
      return (
        <View style={{margin: 128}}>
            <Button
                onPress={() => {
                    Actions.refresh({
                        key: 'Drawer',
                        open: value => !value
                    })
                }}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Go To Drawer
            </Button>
            <Button
                onPress={() => Actions.Temperature()}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Temperature Page
            </Button>
        </View>
      )
    }
};
