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

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    state = {
        currentRoute: null,
        routes: {
            temperature: {
                id: 'temperature',
                title: 'Temperature',
                component: Temperature,
                passProps: {
                    openDrawer: this.openControlPanel
                }
            },
            blank: {
                id: 'blank',
                title: 'Blank',
                component: Blank,
                passProps: {
                    openDrawer: this.openControlPanel
                }
            }
        }
    };

    componentWillMount = () => {
        this.setCurrentRoute("Blank");
    }

    setCurrentRoute = (route) => {
        this.setState({
            currentRoute: route
        });
    }

    getNav = () => {
        return (
            <View>
                <Text>This is my title</Text>
            </View>
        );
    };

    renderScene = (route, navigator) => {
        return <route.component
            {...route.passProps}
            navigator={navigator}
        />
    };

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
                <Navigator //https://www.lullabot.com/articles/navigation-and-deep-linking-with-react-native
                    initialRoute={{
                        id: this.state.currentRoute
                    }}
                    renderScene={
                        this.navigatorRenderScene
                    }
                />
            </Drawer>
        );
    };

    navigatorRenderScene = (route, navigator) => {
        _navigator = navigator;
        switch (route.id) {
            case 'Blank':
                return(<Blank navigator={navigator} title="Blank" />);
            case 'Temperature':
                return(<Temperature
                    navigator={navigator}
                    title="Blank"
                    openDrawer={this.openControlPanel}
                />);
        }
    }


}

AppRegistry.registerComponent('weather', () => weather);
