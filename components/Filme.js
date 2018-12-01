import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

export default class ListaDeFilmesScreen extends Component {
    render() {
        return (
            <View style={styles.row}>
                <Text>{this.props.filme.title}</Text>
                <Image source={{uri: "https://image.tmdb.org/t/p/w200" + this.props.filme.poster_path}} style={styles.imgFilme} />
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
