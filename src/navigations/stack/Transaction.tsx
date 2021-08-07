import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Overview} from '@/root/src/components/screens/Overview';
import {TransactionDetail} from '@/root/src/components/screens/TransactionDetail';
import {TransactionList} from '@/root/src/components/screens/TransactionList';
import {TransactionSummary} from '@/root/src/components/screens/TransactionSummary';

const Stack = createStackNavigator();

export const TransactionStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="TransactionSummary"
                component={TransactionSummary}
            />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
            />
            <Stack.Screen name="TransactionList" component={TransactionList} />
        </Stack.Navigator>
    );
};
