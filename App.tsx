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
        ml: require('./fonts/Montserrat-Light.ttf'),
        mr: require('./fonts/Montserrat-Regular.ttf'),
        mm: require('./fonts/Montserrat-Medium.ttf'),
        ms: require('./fonts/Montserrat-SemiBold.ttf'),
        mb: require('./fonts/Montserrat-Bold.ttf'),
        rl: require('./fonts/RobotoSlab-Light.ttf'),
        rr: require('./fonts/RobotoSlab-Regular.ttf'),
        rm: require('./fonts/RobotoSlab-Medium.ttf'),
        rs: require('./fonts/RobotoSlab-SemiBold.ttf'),
        rb: require('./fonts/RobotoSlab-Bold.ttf')
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
