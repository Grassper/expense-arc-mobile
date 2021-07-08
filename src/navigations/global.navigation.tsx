import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// importing Colors
import Colors from '../constants/colors.constant';
// importing stacks
import SettingsStack from './settings.stack';

const defaultOptions = {
    activeBackgroundColor: Colors.background,
    activeTintColor: Colors.white
};

const Tab = createBottomTabNavigator();

const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={defaultOptions}>
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default GlobalNavigator;
