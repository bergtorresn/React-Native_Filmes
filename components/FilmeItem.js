import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

const larguraDaTela = (Dimensions.get('screen').width / 2) - 15;

export default class FilmeItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Alert.alert(this.props.filme.title)} underlayColor='black'>
                <View style={styles.filmeItemView}>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + this.props.filme.poster_path }} style={styles.filmeItemCapa} />
                    <Text style={styles.filmeItemTitulo} >{this.props.filme.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    filmeItemView: {
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
    },
    filmeItemCapa: {
        width: larguraDaTela,
        height: 200
    },
    filmeItemTitulo: {
        width: larguraDaTela
    }
});
