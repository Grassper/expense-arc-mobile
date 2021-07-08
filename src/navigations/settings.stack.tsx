import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// importing colors
import Colors from '../constants/colors.constant';
// importing screens
import Settings from '../screens/settings/settings.screen';

const defaultOptions = {
    headerTintColor: Colors.white,
    headerStyle: {
        backgroundColor: Colors.background
    },
    title: ''
};

const Stack = createStackNavigator();

const SettingsStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};

export default SettingsStack;
