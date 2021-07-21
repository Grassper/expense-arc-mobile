import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Overview from '../screens/overview/overview.screen';
import SactionList from '../screens/sactionList/sactionList.screen';
import Summary from '../screens/summary/summary.screen';

const Stack = createStackNavigator();

const OverviewStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Summary" component={Summary} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="SactionList" component={SactionList} />
        </Stack.Navigator>
    );
};

export default OverviewStack;
