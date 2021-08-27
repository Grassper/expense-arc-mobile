import {AntDesign} from '@expo/vector-icons';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {
    Transition,
    Transitioning,
    TransitioningView,
    useAnimatedRef
} from 'react-native-reanimated';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

const Container = styled.TouchableWithoutFeedback``;

interface BackgroundTypes {
    focused: boolean;
}

interface PropsTypes extends BottomTabBarButtonProps {
    label: string;
    name: 'home' | 'swap' | 'clockcircleo' | 'setting';
}

const Background = styled(Transitioning.View)<BackgroundTypes>`
    flex: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${props => (props.focused ? Colors.white : Colors.background)};
    border-radius: 50px;
    margin: 10px;
`;

const Label = styled.Text`
    margin-left: 10px;
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.darkGray};
    text-transform: capitalize;
`;

export const TabButton: React.FC<PropsTypes> = ({
    label,
    name,
    accessibilityState,
    onPress
}) => {
    const focused = !!accessibilityState?.selected;
    const transition = (
        <Transition.Sequence>
            <Transition.Out durationMs={0} type="fade" />
            <Transition.Change durationMs={100} interpolation="easeInOut" />
            <Transition.In durationMs={10} type="fade" />
        </Transition.Sequence>
    );
    const ref = useAnimatedRef<TransitioningView>();
    const onPressHandler = (): void => {
        ref.current?.animateNextTransition();
        onPress();
    };
    return (
        <Container onPress={onPressHandler}>
            <Background ref={ref} focused={focused} transition={transition}>
                <AntDesign
                    color={focused ? Colors.darkGray : Colors.whiteTab}
                    name={name}
                    size={24}
                />
                {focused && <Label>{label}</Label>}
            </Background>
        </Container>
    );
};
