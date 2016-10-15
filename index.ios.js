import React, { Component } from 'react';
import {
  AppRegistry,
  MapView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Drawer from 'react-native-drawer'; //source: https://github.com/root-two/react-native-drawer
import {ControlPanel} from "./src/Components/ControlPanel/ControlPanel"; //source: https://github.com/root-two/react-native-drawer
import Temperature from "./src/Views/Temperature/Temperature";

class weather extends Component {
  state = {};

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
        <Drawer
            ref={(ref) => this._drawer = ref}
            openDrawerOffset={100}
            content={<ControlPanel closeDrawer={this.closeControlPanel} />}
        >
            <Temperature openDrawer={this.openControlPanel} />
        </Drawer>
    );
  }
}

AppRegistry.registerComponent('weather', () => weather);
