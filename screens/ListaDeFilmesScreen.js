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
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import firebase from 'react-native-firebase'

const larguraDaTela = (Dimensions.get('screen').width / 2) - 15;

export default class ListaDeFilmesScreen extends Component {

  static get options() {
    return {
      topBar: {
        title: {
          text: "Filmes"
        },
        leftButtons: [
          {
            id: 'btnSair',
            text: 'Sair',
          }
        ],
        rightButtons: [
          {
            id: 'btnFavoritos',
            text: 'Favoritos',
          }
        ],
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      filmes: []
    }
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'btnSair') {
      firebase.auth().signOut();
      Navigation.setStackRoot(this.props.componentId, {
        component: {
          name: 'Login',
        }
      });
    } else {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'Favoritos',
        }
      });    
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a8b15cb8e4b148e23a32afe20e64cde9&language=pt-BR")
      .then(resposta => resposta.json())
      .then((json) => {
        this.setState({
          filmes: json.results
        });
      }).catch((error) => {
        console.error(error);
        Alert.alert("Aviso", "Não foi possível estabelecer uma conexão com o servidor, por favor tente novamente.");
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
    marginBottom: 15,
    fontWeight: 'bold',
    marginTop: 5
  }
});
