import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors.constant';

interface BackButtonTypes {
    onClick?: () => void;
}

const ButtonContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const BackButton: React.FC<BackButtonTypes> = ({onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <ButtonContainer>
                <AntDesign name="arrowleft" size={24} color={Colors.white} />
            </ButtonContainer>
        </Pressable>
    );
};
