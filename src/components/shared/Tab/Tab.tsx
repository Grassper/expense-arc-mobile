import {AntDesign} from '@expo/vector-icons';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
    Transition,
    Transitioning,
    useAnimatedRef
} from 'react-native-reanimated';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

const Container = styled.TouchableWithoutFeedback``;

interface BackgroundTypes {
    focused: boolean;
}

interface TabTypes extends BottomTabBarButtonProps {
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

export const Tab: React.FC<TabTypes> = ({
    label,
    name,
    accessibilityState,
    onPress
}) => {
    const focused = accessibilityState?.selected;
    const transition = (
        <Transition.Sequence>
            <Transition.Out type="fade" durationMs={0} />
            <Transition.Change interpolation="easeInOut" durationMs={100} />
            <Transition.In type="fade" durationMs={10} />
        </Transition.Sequence>
    );
    const ref = useAnimatedRef();
    const onPressHandler = (): void => {
        ref.current.animateNextTransition();
        onPress();
    };
    return (
        <Container onPress={onPressHandler}>
            <Background focused={focused} ref={ref} transition={transition}>
                <AntDesign
                    name={name}
                    size={24}
                    color={focused ? Colors.darkGray : Colors.whiteTab}
                />
                {focused && <Label>{label}</Label>}
            </Background>
        </Container>
    );
};
