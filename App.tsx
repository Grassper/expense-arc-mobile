import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import GlobalNavigator from './navigations/global.navigation';
import store from './redux/store.redux';

enableScreens();

const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <GlobalNavigator />
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
