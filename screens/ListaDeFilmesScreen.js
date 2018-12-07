import React, { Component } from 'react';
import {
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';
import FilmeItem from '../components/FilmeItem';

export default class ListaDeFilmesScreen extends Component {

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
          <FilmeItem filme={item} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  listaFlatList: {
      flex: 1,
  }
});
