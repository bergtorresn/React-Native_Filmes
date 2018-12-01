import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

const larguraDaTela = Dimensions.get('screen').width;

/*
Observações:

Para utlizar código js dentro da sintaxe JSX, deve implementar o código dentro de chaves {}
*/
export default class ListaDeFilmesScreen extends Component {
  render() {
    const filmes = [{ id: 1, usuario: 'teste1' },
    { id: 2, usuario: 'teste2' },
    { id: 3, usuario: 'teste3' },
    { id: 4, usuario: 'teste4' }];
    return (
      <FlatList data={filmes} renderItem={({ item }) =>
        <View style={styles.row}>
          <Text>{item.usuario}</Text>
          <Image source={require('../resources/placeholder/placeholder_filme.png')} style={styles.imgFilme} />
        </View>
      } keyExtractor={item => item.id.toString()}
      />
    );
  }
}


const styles = StyleSheet.create({
  imgFilme: {
    width: larguraDaTela,
    height: larguraDaTela
  },
  row: {
    marginTop: 30
  }
});
