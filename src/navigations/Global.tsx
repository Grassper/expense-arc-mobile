import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';
import {
    HomeStack,
    SettingsStack,
    TransactionStack
} from '@/root/src/navigations/stack';

const Tab = createBottomTabNavigator();

export const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: Colors.background,
                        height: 75,
                        borderTopWidth: 0
                    }
                }}>
                <Tab.Screen
                    name="Overview"
                    component={HomeStack}
                    options={{
                        tabBarButton: props => (
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            <TabButton label="home" name="home" {...props} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Transaction"
                    component={TransactionStack}
                    options={{
                        tabBarButton: props => (
                            <TabButton
                                label="Transaction"
                                name="swap"
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...props}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsStack}
                    options={{
                        tabBarButton: props => (
                            <TabButton
                                label="Settings"
                                name="setting"
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...props}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
