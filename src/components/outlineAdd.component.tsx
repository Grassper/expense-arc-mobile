import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const ButtonContainer = styled.View`
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-radius: 5px;
    border-color: ${Colors.white};
`;

interface BackButtonTypes {
    onClick?: () => void;
}

const OutlineAdd: React.FC<BackButtonTypes> = ({onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <ButtonContainer>
                <Ionicons
                    name="md-add-outline"
                    size={20}
                    color={Colors.white}
                />
            </ButtonContainer>
        </Pressable>
    );
};

export default OutlineAdd;
