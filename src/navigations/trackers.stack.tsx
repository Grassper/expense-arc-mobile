import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

const Example: React.FC = () => {
    return (
        <View>
            <Text>Hii</Text>
        </View>
    );
};

const TrackersStack: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Example" component={Example} />
        </Stack.Navigator>
    );
};

export default TrackersStack;
