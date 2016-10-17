import React, { Component } from 'React';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Blank extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Blank View</Text>
                <Text style={styles.text}>Nothing to see here</Text>
                <Text style={styles.text}>Move it along</Text>
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
