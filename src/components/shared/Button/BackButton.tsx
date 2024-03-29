import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    onClick?: () => void;
    backgroundColor?: string;
}

interface ButtonContainerTypes {
    backgroundColor: string;
}

const ButtonContainer = styled.View<ButtonContainerTypes>`
    background-color: ${props => props.backgroundColor};
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const BackButton: React.FC<PropsTypes> = ({
    backgroundColor,
    onClick
}) => {
    return (
        <Pressable onPress={onClick}>
            <ButtonContainer
                backgroundColor={backgroundColor || Colors.darkGray}>
                <AntDesign color={Colors.white} name="arrowleft" size={24} />
            </ButtonContainer>
        </Pressable>
    );
};
