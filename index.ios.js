import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    MapView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Drawer from 'react-native-drawer'; //source: https://github.com/root-two/react-native-drawer
import {ControlPanel} from "./src/Components/ControlPanel/ControlPanel"; //source: https://github.com/root-two/react-native-drawer
import Temperature from "./src/Views/Temperature/Temperature";

class weather extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    state = {
        routes: {
            home: {
                title: 'Home',
                component: Temperature,
                passProps: {
                    openDrawer: this.openControlPanel
                }
            }
        }
    };

    getNav = () => {
        return (
            <View>
                <Text style={{textAlign: "center"}}>This is my title</Text>
            </View>
        );
    }

    renderScene = (route, navigator) => {
        return <route.component
            {...route.passProps}
            navigator={navigator}
        />
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={100}
                content={<ControlPanel
                    closeDrawer={this.closeControlPanel}
                />}
            >
                <Navigator //https://www.lullabot.com/articles/navigation-and-deep-linking-with-react-native
                    ref={component => this._navigator = component}
                    navigationBar={this.getNav()}
                    initialRoute={this.state.routes.home}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    }
}

AppRegistry.registerComponent('weather', () => weather);
