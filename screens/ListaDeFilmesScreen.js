import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Filme from '../components/Filme';
    
const filmes = [{ id: 1, usuario: 'teste1' },
{ id: 2, usuario: 'teste2' },
{ id: 3, usuario: 'teste3' },
{ id: 4, usuario: 'teste4' }];

export default class ListaDeFilmesScreen extends Component {
  render() {
    return (
      <FlatList data={filmes} 
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) =>
        <Filme filme={item}/>
      }
      />
    );
  }
}
