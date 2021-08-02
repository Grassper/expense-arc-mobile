import {Ionicons} from '@expo/vector-icons';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import {
    Container,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

interface FormTypes {
    onClick: () => void;
}

interface Color {
    color?: string;
}

const ButtonContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 40px;
    height: 40px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 20px;
`;

const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

const TextLight = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
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

const TextInput = styled.TextInput`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 17px 15px;
`;

const Spacer = styled.View`
    padding: 5px;
`;

export const Form: React.FC<FormTypes> = ({onClick}) => {
    const [type, setType] = useState('Expense');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <Container>
            <Header>
                <HeadingText size={22}>Add Transaction</HeadingText>
                <Pressable onPress={onClick}>
                    <ButtonContainer>
                        <Ionicons
                            name="ios-close"
                            size={24}
                            color={Colors.white}
                        />
                    </ButtonContainer>
                </Pressable>
            </Header>
            <Spacer />
            <ScrollContainer>
                <InputContainer>
                    <TextBold>Type</TextBold>
                    <RadioContainer>
                        <RadioButton
                            onPress={() => setType('Income')}
                            color={
                                type === 'Income'
                                    ? Colors.skyBlue
                                    : Colors.darkGray
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
                                    ? Colors.pink
                                    : Colors.darkGray
                            }>
                            <CircleOuter>
                                {type === 'Expense' && <CircleInner />}
                            </CircleOuter>
                            <TextLight>Expense</TextLight>
                        </RadioButton>
                    </RadioContainer>
                </InputContainer>
                <InputContainer>
                    <TextBold>Name</TextBold>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Food"
                        placeholderTextColor={Colors.whiteTab}
                    />
                </InputContainer>
                <InputContainer>
                    <TextBold>Amount</TextBold>
                    <TextInput
                        onChangeText={setAmount}
                        value={amount}
                        placeholder="$10"
                        placeholderTextColor={Colors.whiteTab}
                        keyboardType="number-pad"
                    />
                </InputContainer>
                <InputContainer>
                    <TextBold>Date</TextBold>
                    <TextInput
                        onChangeText={setAmount}
                        value={amount}
                        placeholder="$10"
                        placeholderTextColor={Colors.whiteTab}
                        keyboardType="number-pad"
                    />
                </InputContainer>
            </ScrollContainer>
        </Container>
    );
};
