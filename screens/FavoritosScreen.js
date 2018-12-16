import React, { Component } from 'react';
import {
    FlatList,
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import firebase from 'react-native-firebase'

const larguraDaTela = (Dimensions.get('screen').width / 2) - 15;

export default class FavoritosScreen extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            filmes: []
        }
    }

    componentDidMount() {
        (async () => {
            await this.getFilmesFavoritos();
        })();
    }

    async getFilmesFavoritos() {
        var user = firebase.auth().currentUser;
        const filmesDoUsuario = await AsyncStorage.getItem(user.uid.toString());
        let favoritos = JSON.parse(filmesDoUsuario);

        this.setState({
            filmes: favoritos
        });
    }

    render() {
        return (
            <FlatList style={styles.listaFlatList} numColumns='2' data={this.state.filmes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity underlayColor='black' onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Filme',
                                passProps: item
                            }
                        })
                    }}>
                        <View style={styles.filmeItemView}>
                            <Image source={{ uri: "https://image.tmdb.org/t/p/w200" + item.poster_path }} style={styles.filmeItemCapa} />
                            <Text style={styles.filmeItemTitulo}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    listaFlatList: {
        flex: 1,
    },
    filmeItemView: {
        flex: 1,
        marginLeft: 10,
    },
    filmeItemCapa: {
        width: larguraDaTela,
        height: 200
    },
    filmeItemTitulo: {
        width: larguraDaTela,
        marginBottom: 15
    }
});
