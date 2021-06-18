import React from 'react';
import {Text, View} from 'react-native';

import {mockData} from './data/dummy.data';

const App: React.FC = () => {
    return (
        <View>
            {mockData.map(entries => (
                <Text key={entries.id}>{entries.id}</Text>
            ))}
        </View>
    );
};

export default App;
