import {MaterialIcons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {BackButton} from '@/root/src/components/shared/Button';
import {
    Container,
    HeadingContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

type RootStackParamList = {
    Home: undefined;
    Overview: undefined;
    TransactionList: undefined;
    TransactionDetail: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TransactionDetail'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const IconContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Spacer = styled.View`
    padding: 5px;
`;

const Text = styled.Text`
    font-family: 'ms';
    color: ${Colors.white};
`;

const CurrencyText = styled(Text)`
    font-size: 16px;
`;

const CategoryText = styled(Text)`
    font-size: 16px;
    font-family: 'rm';
`;

const DateText = styled(Text)`
    font-size: 16px;
    font-family: 'mm';
`;

const TitleText = styled(Text)`
    font-size: 26px;
    font-family: 'rm';
`;

const SubHeadingContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: -10px;
`;

export const TransactionDetail: React.FC<Props> = ({navigation}) => {
    return (
        <Container backgroundColor={Colors.pink}>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
                <IconContainer>
                    <MaterialIcons
                        name="mode-edit"
                        size={26}
                        color={Colors.white}
                    />
                    <Spacer />
                    <MaterialIcons
                        name="delete"
                        size={26}
                        color={Colors.white}
                    />
                </IconContainer>
            </Header>
            <HeadingContainer header>
                <TitleText>Swiggy</TitleText>
                <CurrencyText>$ 3,040</CurrencyText>
            </HeadingContainer>
            <SubHeadingContainer>
                <CategoryText>Food</CategoryText>
                <DateText>30 oct 2021, 1.35 pm</DateText>
            </SubHeadingContainer>
        </Container>
    );
};
