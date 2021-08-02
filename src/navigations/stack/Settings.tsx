import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Account} from '@/root/src/components/screens/Account';
import {BackupAndSecurity} from '@/root/src/components/screens/Backup&Security';
import {Categories} from '@/root/src/components/screens/Categories';
import {Notification} from '@/root/src/components/screens/Notification';
import {Preference} from '@/root/src/components/screens/Preference';
import {Settings} from '@/root/src/components/screens/Settings';

const Stack = createStackNavigator();

export const SettingsStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Preference" component={Preference} />
            <Stack.Screen
                name="BackupAndSecurity"
                component={BackupAndSecurity}
            />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
};
