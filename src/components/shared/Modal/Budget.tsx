import React, {useState} from 'react';
import styled from 'styled-components/native';

import {SaveButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';

interface BudgetModal {
    onClick: () => void;
}

const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #00000030;
`;

const ModalContainer = styled.View`
    width: 90%;
    padding: 20px;
    border-radius: 10px;
    background-color: ${Colors.background};
`;

const TextInput = styled.TextInput`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 17px 15px;
`;

const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

export const BudgetModel: React.FC<BudgetModal> = ({onClick}) => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (): void => {
        console.log({
            amount
        });
        onClick();
    };

    return (
        <Container>
            <ModalContainer>
                <TextBold>Monthly</TextBold>
                <TextInput
                    keyboardType="number-pad"
                    onChangeText={setAmount}
                    placeholder="$10"
                    placeholderTextColor={Colors.whiteTab}
                    value={amount}
                />
                <SaveButton onClick={handleSubmit} />
            </ModalContainer>
        </Container>
    );
};
