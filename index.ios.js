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
import {DrawerMenu} from "./src/SharedComponents/DrawerMenu/DrawerMenu"; //source: https://github.com/root-two/react-native-drawer
import Blank from "./src/Scenes/Blank/Blank";


class weather extends Component {
    state = {};

    closeDrawerMenu= () => {
        this._drawer.close();
    };

    openDrawerMenu= () => {
        this._drawer.open();
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
                content={<DrawerMenu closeDrawer={this.closeDrawerMenu} />}
            >
                <Navigator
                    initialRoute={
                        {
                            scene: Blank,
                            passProps: {
                                openDrawerMenu: this.openDrawerMenu
                            }
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
