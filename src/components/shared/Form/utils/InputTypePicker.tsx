import React from 'react';

import * as Styled from '@/root/src/components/shared/Form/Styles';
import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    name: string;
    input: string;
    onClick: (value: string) => void;
}

export const InputTypePicker: React.FC<PropsTypes> = ({
    name,
    input,
    onClick
}) => {
    return (
        <Styled.InputContainer>
            <Styled.TextBold>{name}</Styled.TextBold>
            <Styled.RadioContainer>
                <Styled.RadioButton
                    color={
                        input === 'Income' ? Colors.skyBlue : Colors.darkGray
                    }
                    onPress={() => onClick('Income')}>
                    <Styled.CircleOuter>
                        {input === 'Income' && <Styled.CircleInner />}
                    </Styled.CircleOuter>
                    <Styled.TextLight>Income</Styled.TextLight>
                </Styled.RadioButton>
                <Styled.RadioButton
                    color={input === 'Expense' ? Colors.pink : Colors.darkGray}
                    onPress={() => onClick('Expense')}>
                    <Styled.CircleOuter>
                        {input === 'Expense' && <Styled.CircleInner />}
                    </Styled.CircleOuter>
                    <Styled.TextLight>Expense</Styled.TextLight>
                </Styled.RadioButton>
            </Styled.RadioContainer>
        </Styled.InputContainer>
    );
};
