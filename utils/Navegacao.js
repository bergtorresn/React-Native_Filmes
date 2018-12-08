import { Navigation } from 'react-native-navigation'

export const navegarParaLogin = () => Navigation.setRoot({
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: 'Login'
                    },
                }
            ],
        }
    }
});

export const navegarParaHome = () => Navigation.setRoot({
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
})