import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import TemplateStack from './stack.navigation';

const Tab = createBottomTabNavigator();

const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={TemplateStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default GlobalNavigator;
