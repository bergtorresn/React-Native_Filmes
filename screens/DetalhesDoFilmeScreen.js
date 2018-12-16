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
import firebase from 'react-native-firebase'

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
    var user = firebase.auth().currentUser;

    const filmeParaSerSalvo = {
      'id': this.props.id, 'title': this.props.title, 'backdrop_path': this.props.backdrop_path, 'poster_path': this.props.poster_path, 'overview': this.props.overview
    };
    const filmesFavoritos = await AsyncStorage.getItem(user.uid.toString());

    let filmes = JSON.parse(filmesFavoritos);
    if (!filmes) {
      filmes = [];
      filmes.push(filmeParaSerSalvo)
    } else {
      let indexDoFilme = filmes.findIndex(x => x.id === this.props.id);
      if (indexDoFilme !== -1){
        filmes.splice(indexDoFilme, 1);
      } else {
        Alert.alert("filme add");
        filmes.push(filmeParaSerSalvo);
      }
    }

    await AsyncStorage.setItem(user.uid.toString(), JSON.stringify(filmes))
      .then(() => {
        //Alert.alert("filmes salvo com sucesso");
      })
      .catch(() => {
        Alert.alert("deu ruim");
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
