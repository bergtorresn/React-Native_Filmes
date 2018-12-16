import { Navigation } from 'react-native-navigation';

export function registrarScreens() {
  Navigation.registerComponent('Launcher', () => require('../screens/LauncherScreen').default);
  Navigation.registerComponent('Login', () => require('../screens/LoginScreen').default);
  Navigation.registerComponent('Cadastro', () => require('../screens/CadastroScreen').default);
  Navigation.registerComponent('Home', () => require('../screens/ListaDeFilmesScreen').default);
  Navigation.registerComponent('Filme', () => require('../screens/DetalhesDoFilmeScreen').default);
  Navigation.registerComponent('Favoritos', () => require('../screens/FavoritosScreen').default);

}