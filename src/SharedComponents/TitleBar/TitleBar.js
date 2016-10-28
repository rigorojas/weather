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
                <View>
                    <TouchableHighlight onPress={this.props.openDrawerMenu}>
                        <Text>|||</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>2</Text>
                </View>
                <View>
                    <Text>3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 28,
        backgroundColor: "#666"
    }
});
