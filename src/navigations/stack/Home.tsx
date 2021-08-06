import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Home} from '@/root/src/components/screens/Home';
import {Overview} from '@/root/src/components/screens/Overview';
import {TransactionDetail} from '@/root/src/components/screens/TransactionDetail';
import {TransactionList} from '@/root/src/components/screens/TransactionList';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
            />
            <Stack.Screen name="TransactionList" component={TransactionList} />
        </Stack.Navigator>
    );
};
