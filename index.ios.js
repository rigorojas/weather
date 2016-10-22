import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    MapView,
    StyleSheet,
    Text,
    View
} from 'react-native';
//watchman watch-del-all && rm -rf node_modules && npm install && npm start -- --reset-cache
import Drawer from 'react-native-drawer'; //source: https://github.com/root-two/react-native-drawer
import {ControlPanel} from "./src/Components/ControlPanel/ControlPanel"; //source: https://github.com/root-two/react-native-drawer
import Blank from "./src/Scenes/Blank/Blank";


class weather extends Component {
    state = {
        currentRoute: Blank
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
                content={<ControlPanel closeDrawer={this.closeControlPanel} />}
            >
                <Navigator
                    initialRoute={
                        {
                            scene: this.state.currentRoute
                        }
                    }
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    };

    renderScene = (route, navigator) => {
		return(
            <route.scene
                {...route.passProps}
                navigator={navigator}
                route={route}
            />
        );
    };
}

AppRegistry.registerComponent('weather', () => weather);
