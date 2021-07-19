import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ExpenseOverview from '../screens/transactionStack/expenseOverview/expenseOverview.screen';
import Summary from '../screens/transactionStack/summary/summary.screen';

const Stack = createStackNavigator();

const OverviewStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Summary" component={Summary} />
            <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
        </Stack.Navigator>
    );
};

export default OverviewStack;
