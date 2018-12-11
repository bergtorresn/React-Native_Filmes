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
    try {
      const value = await AsyncStorage.getItem('testando');
      if (value !== null) {
        await AsyncStorage.removeItem('testando');
        Alert.alert("desmarcou");
      } else {
        await AsyncStorage.setItem('testando', 'teste');
        Alert.alert("marcou");
      }
    } catch (error) {
      Alert.alert(error);
    }
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
