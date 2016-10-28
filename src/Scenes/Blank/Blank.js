import React, { Component } from 'React';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import TitleBar from "../../SharedComponents/TitleBar/TitleBar";
import Temperature from "../Temperature/Temperature";


export default class Blank extends Component {
    onButtonPress = () => {
        this.props.navigator.push({
            scene: Temperature,
            title: "Temperature",
            passProps: {
            }
        });
    }

    render() {
        const {openDrawerMenu} = this.props;
        return (
            <View style={styles.container}>
                <TitleBar openDrawerMenu={openDrawerMenu} />
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.text}>Temperature</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 28,
        backgroundColor: "#ccc",
    },
    text: {
        backgroundColor: "#ddd",
        fontSize: 50,
        color: "#333",
        textAlign: "center",
    },
});
