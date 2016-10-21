import React, { Component } from 'React';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class Blank extends Component {

    onButtonPress = () => {
        this.props.navigator.push({
            component: "Temperature",
            title: "Temperature",
            passProps: {
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Blank View</Text>
                <Text style={styles.text}>Nothing to see here</Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.text}>Move it along</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    text: {
        color: "green"
    }
});

export default Blank;
