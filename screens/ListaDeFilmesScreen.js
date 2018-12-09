import React, { Component } from 'react';
import {
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';
import FilmeItem from '../components/FilmeItem';
import { Navigation } from 'react-native-navigation'

export default class ListaDeFilmesScreen extends Component {

  static get options() {
    return {
      topBar: {
        title: {
          text: "Filmes"
        },
      }
    };
  }

  constructor() {
    super();
    this.state = {
      filmes: []
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
          <FilmeItem filme={item} onPress={this.navegarParaDatalheDoFilme} />
        }
      />
    );
  }

  navegarParaDatalheDoFilme = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'Filme',
      }
    });
  }
}

const styles = StyleSheet.create({
  listaFlatList: {
    flex: 1,
  }
});
