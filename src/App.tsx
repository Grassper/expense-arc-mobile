/* eslint-disable global-require */
import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import GlobalNavigator from './navigations/global.navigation';
import store from './redux/store.redux';

enableScreens();

const fetchFonts = (): Promise<void> => {
    return Font.loadAsync({
        ml: require('./assets/fonts/Montserrat-Light.ttf'),
        mr: require('./assets/fonts/Montserrat-Regular.ttf'),
        mm: require('./assets/fonts/Montserrat-Medium.ttf'),
        ms: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        mb: require('./assets/fonts/Montserrat-Bold.ttf'),
        rl: require('./assets/fonts/RobotoSlab-Light.ttf'),
        rr: require('./assets/fonts/RobotoSlab-Regular.ttf'),
        rm: require('./assets/fonts/RobotoSlab-Medium.ttf'),
        rs: require('./assets/fonts/RobotoSlab-SemiBold.ttf'),
        rb: require('./assets/fonts/RobotoSlab-Bold.ttf')
    });
};

const App: React.FC = () => {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={err => console.log(err)}
            />
        );
    }

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <GlobalNavigator />
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
