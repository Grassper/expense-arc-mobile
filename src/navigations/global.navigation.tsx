import {Entypo, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';
import OverviewStack from './overview.stack';
import SettingsStack from './settings.stack';
import TrackersStack from './trackers.stack';
import TransactionStack from './transaction.stack';

const Tab = createBottomTabNavigator();

const TabContainer = styled.View`
    align-items: center;
`;

const TabText = styled.Text`
    color: ${Colors.white};
    margin-top: 10px;
`;

const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: Colors.background,
                        height: 75,
                        paddingHorizontal: 35,
                        paddingVertical: 15,
                        flexDirection: 'row',
                        borderTopWidth: 0
                    }
                }}>
                <Tab.Screen
                    name="Overview"
                    component={OverviewStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <TabContainer>
                                <Entypo
                                    name="home"
                                    size={24}
                                    color={
                                        focused ? Colors.white : Colors.whiteTab
                                    }
                                />
                                {focused && <TabText>Home</TabText>}
                            </TabContainer>
                        )
                    }}
                />
                <Tab.Screen
                    name="Transaction"
                    component={TransactionStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <TabContainer>
                                <MaterialCommunityIcons
                                    name="swap-horizontal"
                                    size={24}
                                    color={
                                        focused ? Colors.white : Colors.whiteTab
                                    }
                                />
                                {focused && <TabText>Transaction</TabText>}
                            </TabContainer>
                        )
                    }}
                />
                <Tab.Screen
                    name="Trackers"
                    component={TrackersStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <TabContainer>
                                <MaterialCommunityIcons
                                    name="progress-clock"
                                    size={24}
                                    color={
                                        focused ? Colors.white : Colors.whiteTab
                                    }
                                />
                                {focused && <TabText>Trackers</TabText>}
                            </TabContainer>
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <TabContainer>
                                <Fontisto
                                    name="player-settings"
                                    size={24}
                                    color={
                                        focused ? Colors.white : Colors.whiteTab
                                    }
                                />
                                {focused && <TabText>Settings</TabText>}
                            </TabContainer>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default GlobalNavigator;
