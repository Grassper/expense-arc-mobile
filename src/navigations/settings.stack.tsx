import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/colors.constant';
import Account from '../screens/account/account.screen';
import BackupSecurity from '../screens/backup&Security/backup&Security.screen';
import Categories from '../screens/categories/categories.screen';
import Notification from '../screens/notification/notification.screen';
import Preference from '../screens/preference/preference.screen';
import Settings from '../screens/settings/settings.screen';

const defaultOptions = {
    headerTintColor: Colors.white,
    headerStyle: {
        backgroundColor: Colors.background
    },
    headerTitleStyle: {
        fontFamily: 'rr',
        color: Colors.white,
        fontSize: 26
    },
    title: ''
};

const Stack = createStackNavigator();

const SettingsStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={defaultOptions} headerMode="none">
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Preference" component={Preference} />
            <Stack.Screen name="BackupAndSecurity" component={BackupSecurity} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
};

export default SettingsStack;
