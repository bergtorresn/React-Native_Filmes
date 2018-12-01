import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableHighlight,
    Alert
} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

export default class FilmeItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => Alert.alert(this.props.filme.title)} underlayColor='black'>
                <View style={styles.row}>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + this.props.filme.poster_path }} style={styles.imgFilme} />
                    <Text>{this.props.filme.title}</Text>
                </View>
            </TouchableHighlight>

        );
    }
}

const styles = StyleSheet.create({
    imgFilme: {
        width: 200,
        height: 200
    },
    row: {
        marginTop: 30,
    }
});
