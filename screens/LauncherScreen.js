import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { navegarParaLogin, navegarParaHome } from '../utils/Navegacao'
import firebase from 'react-native-firebase'

usuarioLogado = async () => {
    try {
        const user = await firebase.auth().currentUser.uid;
        if (user !== null) {
            return true;
        }
        return false;
    } catch (error) {
        Alert.alert("Aviso", error);
    }
}

export default class LauncherScreen extends Component {

    componentDidMount() {
        if (usuarioLogado) {
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