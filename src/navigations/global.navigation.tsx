import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import TabComponent from '@/root/src/components/tab.component';
import Colors from '@/root/src/constants/colors';

import OverviewStack from './overview.stack';
import SettingsStack from './settings.stack';
import TrackersStack from './trackers.stack';
import TransactionStack from './transaction.stack';

const Tab = createBottomTabNavigator();

const GlobalNavigator: React.FC = () => {
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
                    component={OverviewStack}
                    options={{
                        tabBarButton: props => (
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            <TabComponent label="home" name="home" {...props} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Transaction"
                    component={TransactionStack}
                    options={{
                        tabBarButton: props => (
                            <TabComponent
                                label="Transaction"
                                name="swap"
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...props}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Trackers"
                    component={TrackersStack}
                    options={{
                        tabBarButton: props => (
                            <TabComponent
                                label="Trackers"
                                name="clockcircleo"
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
                            <TabComponent
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

export default GlobalNavigator;
