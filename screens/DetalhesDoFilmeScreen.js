import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

export default class DetalhesDoFilmeScreen extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.filmeDetalheView}>
          <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + this.props.backdrop_path }}
            style={styles.filmeDetalheCapa} />
          <TouchableOpacity onPress={this.gerenciarStorage}
            underlayColor='black'
            style={styles.filmeDetalheBtnFavoritar}>
            <Text>Salvar</Text>
          </TouchableOpacity>
          <Text style={styles.filmeDetalheTitulo}>{this.props.title}</Text>
          <Text style={styles.filmeDetalheSinopse}>{this.props.overview}</Text>
        </View>
      </ScrollView>
    );
  }

  gerenciarStorage = async () => {
    const filmeParaSerSalvo = {
      'id': 15, 'title': "filme", 'backdrop_path': "/blv65adWsJQZ5Iog0OU5opVf6Oa.jpg", 'overview': "Filmão da porra"
    };
    const filmesFavoritos = await AsyncStorage.getItem('filmes');
    let filmes = JSON.parse(filmesFavoritos);
    if (!filmes) {
      filmes = [];
      filmes.push(filmeParaSerSalvo)
    } else {
      filmes.push(filmeParaSerSalvo);
    }
    Alert(filmes.count);

    await AsyncStorage.setItem('filmes', JSON.stringify(filmes))
      .then(() => {
        Alert("filmes salvo com sucesso");
      })
      .catch(() => {
        Alert("deu ruim");
      })
  }
}

const styles = StyleSheet.create({
  filmeDetalheView: {
    flex: 1
  },
  filmeDetalheCapa: {
    width: larguraDaTela,
    height: larguraDaTela
  },
  filmeDetalheTitulo: {
    width: larguraDaTela,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  filmeDetalheSinopse: {
    width: larguraDaTela,
    fontSize: 18,
    marginTop: 20
  },
  filmeDetalheBtnFavoritar: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    width: 50,
    height: 50,
    marginRight: 5,
    marginTop: -60,
    marginBottom: 5
  }
});
