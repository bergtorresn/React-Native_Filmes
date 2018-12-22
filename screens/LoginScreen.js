import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import firebase from 'react-native-firebase'
import { Navigation } from 'react-native-navigation'

export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      senha: ""
    }
  }

  entrarNaConta = async () => {
    try {
      const { email, senha } = this.state;

      await firebase.auth().signInWithEmailAndPassword(email, senha);
      
      Navigation.setStackRoot(this.props.componentId, {
        component: {
          name: 'Home',
        }
      });
    } catch (error) {
      Alert.alert("Aviso", error);
    }
  }

  render() {
    return (
      <View style={styles.loginView}>
        <TextInput placeholder="Digite o seu e-mail"
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          style={styles.loginInput} />
        <TextInput placeholder="Digite a sua senha"
          value={this.state.senha}
          secureTextEntry
          onChangeText={senha => this.setState({ senha })}
          style={styles.loginInput} />
        <TouchableOpacity onPress={this.entrarNaConta}
          style={styles.loginButton}>
          <Text style={styles.loginTextButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: 'Cadastro',
            }
          })
        }}
          style={styles.loginButton}>
          <Text style={styles.loginTextButton}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  loginInput: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#EEE',
    marginBottom: 20
  },
  loginButton: {
    height: 45,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#069',
    marginBottom: 10
  },
  loginTextButton: {
    fontWeight: 'bold',
    color: '#FFF'
  }
})
