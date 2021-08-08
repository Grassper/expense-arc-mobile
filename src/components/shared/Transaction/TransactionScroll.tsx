import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import {OverviewCard} from '@/root/src/components/shared/Overview';
import Colors from '@/root/src/constants/colors';

const TransactionContainer = styled.ScrollView`
    margin-top: 20px;
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
    Heading: string;
}

export const TransactionScroll: React.FC<Props> = ({Heading}) => {
    const navigation = useNavigation();

    const onClick = (): void => {
        navigation.navigate('TransactionDetail');
    };
    return (
        <>
            <HeadingContainer>
                <HeadingTextBold>{Heading}</HeadingTextBold>
                <HeadingTextLight>Expense</HeadingTextLight>
            </HeadingContainer>
            <TransactionContainer>
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    onClick={onClick}
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    onClick={onClick}
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
                <OverviewCard
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                    bottomLeftText="April 12, 2021"
                    mode="light"
                />
            </TransactionContainer>
        </>
    );
};
