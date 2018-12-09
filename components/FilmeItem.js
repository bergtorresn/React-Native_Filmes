import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation'

const larguraDaTela = (Dimensions.get('screen').width / 2) - 15;

export default class FilmeItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={Navigation.push(this.props.componentId, {
                component: {
                    name: 'Filme',
                }
            })} underlayColor='black'>
                <View style={styles.filmeItemView}>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + this.props.filme.poster_path }} style={styles.filmeItemCapa} />
                    <Text style={styles.filmeItemTitulo}>{this.props.filme.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    filmeItemView: {
        flex: 1,
        marginTop: 10,
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
