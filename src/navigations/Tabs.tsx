import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {Home} from '@/root/src/components/screens/Home';
import {Settings} from '@/root/src/components/screens/Settings';
import {TransactionSummary} from '@/root/src/components/screens/TransactionSummary';
import {TabButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';

const Tab = createBottomTabNavigator();

export const HomeTabs: React.FC = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: Colors.background,
                    height: 75,
                    borderTopWidth: 0
                }
            }}>
            <Tab.Screen
                component={Home}
                name="Home"
                options={{
                    tabBarButton: props => (
                        <TabButton label="home" name="home" {...props} />
                    )
                }}
            />
            <Tab.Screen
                component={TransactionSummary}
                name="Transaction"
                options={{
                    tabBarButton: props => (
                        <TabButton label="Transaction" name="swap" {...props} />
                    )
                }}
            />
            <Tab.Screen
                component={Settings}
                name="Settings"
                options={{
                    tabBarButton: props => (
                        <TabButton label="Settings" name="setting" {...props} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};
