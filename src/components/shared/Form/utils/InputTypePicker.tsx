import React from 'react';

import * as Styled from '@/root/src/components/shared/Form/Styles';
import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    name: string;
    input: "income" | "expense";
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
                        input === 'income' ? Colors.skyBlue : Colors.darkGray
                    }
                    onPress={() => onClick('income')}>
                    <Styled.CircleOuter>
                        {input === 'income' && <Styled.CircleInner />}
                    </Styled.CircleOuter>
                    <Styled.TextLight>Income</Styled.TextLight>
                </Styled.RadioButton>
                <Styled.RadioButton
                    color={input === 'expense' ? Colors.pink : Colors.darkGray}
                    onPress={() => onClick('expense')}>
                    <Styled.CircleOuter>
                        {input === 'expense' && <Styled.CircleInner />}
                    </Styled.CircleOuter>
                    <Styled.TextLight>Expense</Styled.TextLight>
                </Styled.RadioButton>
            </Styled.RadioContainer>
        </Styled.InputContainer>
    );
};
