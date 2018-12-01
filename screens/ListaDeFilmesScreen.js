import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

export default class ListaDeFilmesScreen extends Component {
  render() {
    return (
      <View>
        <Image source={require('../resources/placeholder/placeholder_filme.png')} style={styles.imgFilme}/>
      </View>
    );
  }
}
// Utilizando imagem local
// <Image source={require('diretorio')}/> como require é uma func js tem que chamar ela dentro de {}

const styles = StyleSheet.create({
  imgFilme: {
    width: larguraDaTela,
    height: larguraDaTela
  }
});
