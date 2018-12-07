import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

export default class DetalhesDoFilmeScreen extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.filmeDetalheView}>
          <Image source={{ uri: "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg" }} style={styles.filmeDetalheCapa} />
          <TouchableOpacity onPress={() => Alert.alert("Like e Deslike")} underlayColor='black' style={styles.filmeDetalheBtnFavoritar}>
          </TouchableOpacity>
          <Text style={styles.filmeDetalheTitulo}>Animais Fantásticos: Os Crimes de Grindelwald</Text>
          <Text style={styles.filmeDetalheSinopse}>Comédia de artes marciais seguindo um grupo de lendas do kung fu se unindo para enfrentar os bandidos. As lendas incluem VINCENT ZHAO reprisando seu papel como "Wong Fei Hung" com DENNIS TO retratando o mestre do "Wing Chun" "Ip Man", DANNY CHAN KWOK KWAN como "Chen Zhen" e ANDY ON como mestre "Huo Yuan Jia".</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filmeDetalheView: {
    flex: 1,
    marginTop: 30,
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
  },
  filmeDetalheSinopse: {
    marginTop: 10,
    width: larguraDaTela,
    fontSize: 18,
  },
  filmeDetalheBtnFavoritar: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  }

});

