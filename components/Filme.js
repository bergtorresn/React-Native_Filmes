import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

// Obs.: Para utlizar código js dentro da sintaxe JSX, deve implementar o código dentro de chaves {}
export default class ListaDeFilmesScreen extends Component {
    render() {
        return (
            <View style={styles.row}>
                <Text>{this.props.filme.usuario}</Text>
                <Image source={require('../resources/placeholder/placeholder_filme.png')} style={styles.imgFilme} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgFilme: {
        width: larguraDaTela,
        height: larguraDaTela
    },
    row: {
        marginTop: 30
    }
});
