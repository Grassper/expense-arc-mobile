import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
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

const Stack = createStackNavigator();

const TemplateStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default TemplateStack;
