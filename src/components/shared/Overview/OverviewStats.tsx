import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

const OverviewContainer = styled.View`
    padding: 10px 20px;
    margin-top: 20px;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
`;

const OverviewBox = styled.Pressable`
    flex-direction: row;
    align-items: center;
`;

const OverviewContentBox = styled.View`
    margin-left: 15px;
`;

const OverviewText = styled.Text`
    font-size: 16px;
    font-family: 'mr';
    color: ${Colors.primary};
`;

const OverviewTextBold = styled.Text`
    font-size: 22px;
    font-family: 'rs';
    margin-top: 10px;
    color: ${Colors.primary};
`;

const HeadingContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

const HeadingTextBold = styled.Text`
    font-size: 16px;
    font-family: 'ms';
    color: ${Colors.primary};
`;

const HeadingTextLight = styled.Text`
    font-size: 14px;
    font-family: 'ms';
    color: ${Colors.toggleColor};
`;

interface Props {
    Income: number;
    Expense: number;
    Heading: string;
    filter: string;
    onClick?: () => void;
}

export const OverviewStats: React.FC<Props> = ({
    Heading,
    Income,
    Expense,
    filter,
    onClick
}) => {
    const navigation = useNavigation();

    return (
        <>
            <HeadingContainer>
                <HeadingTextBold>{Heading}</HeadingTextBold>
                <TouchableWithoutFeedback onPress={onClick}>
                    <HeadingTextLight>{filter}</HeadingTextLight>
                </TouchableWithoutFeedback>
            </HeadingContainer>
            <OverviewContainer>
                <OverviewBox
                    onPress={() =>
                        navigation.navigate('Overview', {
                            heading: 'Income Overview',
                            subHeading: 'You Earn $3,040'
                        })
                    }>
                    <AntDesign color="black" name="arrowup" size={24} />
                    <OverviewContentBox>
                        <OverviewText>Income</OverviewText>
                        <OverviewTextBold>$ {Income}</OverviewTextBold>
                    </OverviewContentBox>
                </OverviewBox>
                <OverviewBox
                    onPress={() =>
                        navigation.navigate('Overview', {
                            heading: 'Expense Overview',
                            subHeading: 'You Spend $3,040'
                        })
                    }>
                    <AntDesign color="black" name="arrowdown" size={24} />
                    <OverviewContentBox>
                        <OverviewText>Expense</OverviewText>
                        <OverviewTextBold>$ {Expense}</OverviewTextBold>
                    </OverviewContentBox>
                </OverviewBox>
            </OverviewContainer>
        </>
    );
};
