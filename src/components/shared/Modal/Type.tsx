import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {SaveButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';

interface PropTypes {
    onClick: (value: string) => void;
    inputType: string;
}

interface Color {
    color?: string;
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

const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

const RadioContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const RadioButton = styled.Pressable<Color>`
    width: 45%;
    background-color: ${props => (props.color ? props.color : Colors.darkGray)};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    border-radius: 10px;
`;

const CircleOuter = styled.View`
    border-width: 2px;
    height: 24px;
    width: 24px;
    border-radius: 50px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border-color: ${Colors.white};
`;

const CircleInner = styled.View`
    width: 60%;
    height: 60%;
    border-radius: 50px;
    background-color: ${Colors.white};
`;

const TextLight = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
`;

export const TypeModal: React.FC<PropTypes> = ({onClick, inputType}) => {
    const [type, setType] = useState('Expense');

    useEffect(() => {
        setType(inputType);
    }, [inputType]);

    const handleSubmit = (): void => {
        onClick(type);
    };

    return (
        <Container>
            <ModalContainer>
                <TextBold>Transaction</TextBold>
                <RadioContainer>
                    <RadioButton
                        onPress={() => setType('Income')}
                        color={
                            type === 'Income' ? Colors.skyBlue : Colors.darkGray
                        }>
                        <CircleOuter>
                            {type === 'Income' && <CircleInner />}
                        </CircleOuter>
                        <TextLight>Income</TextLight>
                    </RadioButton>
                    <RadioButton
                        onPress={() => setType('Expense')}
                        color={
                            type === 'Expense'
                                ? Colors.skyBlue
                                : Colors.darkGray
                        }>
                        <CircleOuter>
                            {type === 'Expense' && <CircleInner />}
                        </CircleOuter>
                        <TextLight>Expense</TextLight>
                    </RadioButton>
                </RadioContainer>
                <SaveButton onClick={handleSubmit} />
            </ModalContainer>
        </Container>
    );
};
