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
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen name="Overview" component={Overview} />
                <Stack.Screen
                    name="TransactionList"
                    component={TransactionList}
                />
                <Stack.Screen
                    name="TransactionDetail"
                    component={TransactionDetail}
                />
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Preference" component={Preference} />
                <Stack.Screen
                    name="BackupAndSecurity"
                    component={BackupAndSecurity}
                />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen
                    name="CategorySummary"
                    component={CategorySummary}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
