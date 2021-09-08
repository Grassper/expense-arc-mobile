import React from 'react';
import {ColorValue, KeyboardTypeOptions} from 'react-native';

import * as Styled from '@/root/src/components/shared/Form/Styles';

interface PropsTypes {
    name: string;
    keyboardType?: KeyboardTypeOptions;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    placeholderTextColor?: ColorValue;
    value?: string;
    
}

export const InputBox: React.FC<PropsTypes> = ({
    name,
    keyboardType,
    onChangeText,
    placeholder,
    placeholderTextColor,
    value,
    ...props
}) => {
    return (
        <Styled.InputContainer>
            <Styled.TextBold>{name}</Styled.TextBold>
            <Styled.TextInput
                {...props}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
            />
        </Styled.InputContainer>
    );
};
