import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <View>
            <Text>Home!</Text>
        </View>
    );
};

const SettingsScreen: React.FC = () => {
    return (
        <View>
            <Text>Settings!</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

const GlobalNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default GlobalNavigator;
