import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import * as Styled from '@/root/src/components/shared/Form/Styles';
import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    name: string;
    input: string;
    onPress: () => void;
}

export const InputSelect: React.FC<PropsTypes> = ({name, input, onPress}) => {
    return (
        <Styled.InputContainer>
            <Styled.TextBold>{name}</Styled.TextBold>
            <TouchableWithoutFeedback onPress={onPress}>
                <Styled.Picker color={input ? Colors.white : Colors.whiteTab}>
                    {input || 'Select'}
                </Styled.Picker>
            </TouchableWithoutFeedback>
        </Styled.InputContainer>
    );
};
