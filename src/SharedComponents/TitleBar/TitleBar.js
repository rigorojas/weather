import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class TitleBar extends Component {
    static propTypes = {
       openDrawerMenu: React.PropTypes.func.isRequired,
    };

    onButtonPress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <TouchableHighlight onPress={this.props.openDrawerMenu}>
                        <Text>|||</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>2</Text>
                </View>
                <View style={styles.activity}>
                    <Text style={styles.activityText}>3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 28,
        backgroundColor: "#666",
        flexWrap: "nowrap",
    },
    navigation: {
        flexGrow: 1,
    },
    navigationText: {
        textAlign: "left",
    },
    title: {
        flexGrow: 3,
    },
    titleText: {
        textAlign: "center",
    },
    activity: {
        flexGrow: 1,
    },
    activityText: {
        textAlign: "right",
    },
});
