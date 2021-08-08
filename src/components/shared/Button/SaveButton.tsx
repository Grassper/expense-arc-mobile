import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface SaveButtonTypes {
    onClick?: () => void;
}

const ButtonContainer = styled.Text`
    margin-top: 25px;
    background-color: ${Colors.skyBlue};
    color: ${Colors.white};
    font-family: 'rr';
    font-size: 22px;
    text-align: center;
    justify-content: center;
    padding: 10px;
    border-radius: 7px;
    align-items: center;
    margin-bottom: 20px;
`;

export const SaveButton: React.FC<SaveButtonTypes> = ({onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <ButtonContainer>Save</ButtonContainer>
        </Pressable>
    );
};
