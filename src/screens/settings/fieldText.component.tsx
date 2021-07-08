import React from 'react';
import {Pressable} from 'react-native';

import {FieldText} from './settings.styles';

interface FieldTextTypes {
    content: string;
    onClick?: () => void;
}

const TextContainer: React.FC<FieldTextTypes> = ({content, onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <FieldText>{content}</FieldText>
        </Pressable>
    );
};

export default TextContainer;
