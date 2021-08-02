import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Home} from '@/root/src/components/screens/Home';
import {Overview} from '@/root/src/components/screens/Overview';
import {Transaction} from '@/root/src/components/screens/Transaction';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
    );
};
