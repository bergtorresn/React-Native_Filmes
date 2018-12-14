import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { navegarParaLogin, navegarParaHome } from '../utils/Navegacao'
import firebase from 'react-native-firebase'

export default class LauncherScreen extends Component {

    componentDidMount() {
        var user = firebase.auth().currentUser;
        if (user !== null) {
            navegarParaHome();
        } else {
            navegarParaLogin();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})