/** @format */

import { Navigation } from 'react-native-navigation';
import { registrarScreens } from './utils/RegistrarScreens';

registrarScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "Launcher"
          }
        }]
      }
    }
  });
});