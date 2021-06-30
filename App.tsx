import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import store from './redux/store.redux';

const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <View>
                    <Text>Hello</Text>
                </View>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
