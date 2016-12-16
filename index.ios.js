import React from 'react';
import {AppRegistry, StyleSheet, Text} from 'react-native';
import {Router, Scene, Actions, DefaultRenderer, Reducer} from 'react-native-router-flux';
import {Side} from './src/SharedComponents/SideMenu/Side.js';
import Blank from "./src/Scenes/Blank/Blank.js";
import Temperature from "./src/Scenes/Temperature/Temperature.js";

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};

class weather extends React.Component {
    state = {};
    render() {
        return (
            <Router
                createReducer={reducerCreate}
                sceneStyle={{backgroundColor:'#99F799'}}
            >
                <Scene
                    key="Drawer"
                    component={Side}
                    open={false}
                >
                    <Scene
                        key="root"
                    >
                        <Scene
                            key="Blank"
                            component={Blank}
                            title="Blank"
                            hideNavBar={true}
                            initial={true}
                        />
                        <Scene
                            key="Temperature"
                            component={Temperature}
                            title="Temperature"
                            hideNavBar={false}
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    };
}

AppRegistry.registerComponent('weather', () => weather);
//watchman watch-del-all && rm -rf node_modules && npm install && npm start -- --reset-cache
