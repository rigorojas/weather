import React from 'react';
import {Text} from 'react-native';
import Drawer from 'react-native-drawer';
import {Menu} from './Menu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export class Side extends React.Component {
    render(){
        const state = this.props.navigationState;
        const children = this.props.navigationState.children;
        return(
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={() => Actions.refresh(
                    {
                        key:state.key,
                        open: true
                    }
                )}
                onClose={() => Actions.refresh(
                    {
                        key:state.key,
                        open: false
                    }
                )}
                type="displace"
                content={<Menu
                    closeDrawer={() => {this.onClose}}
                />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                    main: {
                        opacity:Math.max(0.54,1-ratio)
                    }
                })}
            >
                <DefaultRenderer
                    navigationState={children[children.length - 1]}
                    onNavigate={this.props.onNavigate}
                />
            </Drawer>
        );
    }
}
