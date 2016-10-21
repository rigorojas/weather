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
import Blank from "./src/Views/Blank/Blank";

class weather extends Component {
    state = {
        currentRoute: "Blank"
    };

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    getNav = () => {
        return (
            <View>
                <Text>This is my title</Text>
            </View>
        );
    };

    //https://www.lullabot.com/articles/navigation-and-deep-linking-with-react-native
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                captureGestures
                negotiatePan={false}
                side="right"
                openDrawerOffset={60}
                content={<ControlPanel
                    closeDrawer={this.closeControlPanel}
                />}
            >
                <Navigator
                    initialRoute={
                        {
                            component: this.state.currentRoute
                        }
                    }
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    };

    renderScene = (route, navigator) => {
        console.log("route: ", route)
        console.log("navigator: ", navigator)
        const Component = route.component;
        console.log("Component: ", Component)
		return(
            <{Component} {...route.passProps} navigator={navigator} route={route} />
        );
    };

    renderSceneX = (route, navigator) => {
        switch (route.component) {
            case 'Blank':
                return(<Blank
                    navigator={navigator}
                />);
            case 'Temperature':
                return(<Temperature
                    navigator={navigator}
                    openDrawer={this.openControlPanel}
                />);
        }
    }
}

AppRegistry.registerComponent('weather', () => weather);
