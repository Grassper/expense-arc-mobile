import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface FieldText {
    subText?: boolean;
}

interface FieldTextTypes {
    mainText: string;
    subText?: string;
    onClick?: () => void;
}

const StyledFieldText = styled.Text<FieldText>`
    font-family: ${props => (props.subText ? 'mm' : 'mr')};
    font-size: 16px;
    color: ${Colors.white};
    margin: ${props => (props.subText ? '10px 0 0' : '10px 0')};
`;

const StyledSubText = styled.Text`
    font-family: 'mr';
    font-size: 14px;
    color: ${Colors.white};
    margin: 10px 0;
`;

export const Text: React.FC<FieldTextTypes> = ({
    mainText,
    subText,
    onClick
}) => {
    return (
        <Pressable onPress={onClick}>
            <StyledFieldText subText={Boolean(subText)}>
                {mainText}
            </StyledFieldText>
            {subText && <StyledSubText>{subText}</StyledSubText>}
        </Pressable>
    );
};
