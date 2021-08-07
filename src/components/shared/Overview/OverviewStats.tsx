import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

const OverviewContainer = styled.View`
    padding: 10px 20px;
    margin-top: 20px;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
`;

const OverviewBox = styled.View`
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
}

export const OverviewStats: React.FC<Props> = ({Heading, Income, Expense}) => {
    return (
        <>
            <HeadingContainer>
                <HeadingTextBold>{Heading}</HeadingTextBold>
                <HeadingTextLight>Weekly</HeadingTextLight>
            </HeadingContainer>
            <OverviewContainer>
                <OverviewBox>
                    <AntDesign name="arrowup" size={24} color="black" />
                    <OverviewContentBox>
                        <OverviewText>Income</OverviewText>
                        <OverviewTextBold>$ {Income}</OverviewTextBold>
                    </OverviewContentBox>
                </OverviewBox>
                <OverviewBox>
                    <AntDesign name="arrowdown" size={24} color="black" />
                    <OverviewContentBox>
                        <OverviewText>Expense</OverviewText>
                        <OverviewTextBold>$ {Expense}</OverviewTextBold>
                    </OverviewContentBox>
                </OverviewBox>
            </OverviewContainer>
        </>
    );
};
