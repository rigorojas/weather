import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class Menu extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>
                    Please Select a Project
                </Text>
                <TouchableOpacity
                    onPress={() => Actions.Temperature()}
                    style={styles.button}
                >
                    <Text>Temperature</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Actions.refresh({
                            key: 'Drawer',
                            open: false
                        })
                    }}
                    style={styles.button}
                >
                    <Text>Close Drawer</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
});
