import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Account} from '@/root/src/components/screens/Account';
import {BackupAndSecurity} from '@/root/src/components/screens/Backup&Security';
import {
    Categories,
    CategorySummary
} from '@/root/src/components/screens/Categories';
import {Notification} from '@/root/src/components/screens/Notification';
import {Overview} from '@/root/src/components/screens/Overview';
import {Preference} from '@/root/src/components/screens/Preference';
import {TransactionDetail} from '@/root/src/components/screens/TransactionDetail';
import {TransactionList} from '@/root/src/components/screens/TransactionList';
import {HomeTabs} from '@/root/src/navigations/Tabs';

const Stack = createStackNavigator();

export const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen component={HomeTabs} name="HomeTabs" />
                <Stack.Screen component={Overview} name="Overview" />
                <Stack.Screen
                    component={TransactionList}
                    name="TransactionList"
                />
                <Stack.Screen
                    component={TransactionDetail}
                    name="TransactionDetail"
                />
                <Stack.Screen component={Account} name="Account" />
                <Stack.Screen component={Preference} name="Preference" />
                <Stack.Screen
                    component={BackupAndSecurity}
                    name="BackupAndSecurity"
                />
                <Stack.Screen component={Notification} name="Notification" />
                <Stack.Screen component={Categories} name="Categories" />
                <Stack.Screen
                    component={CategorySummary}
                    name="CategorySummary"
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
