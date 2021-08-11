import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
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
    onClick?: () => void;
    type: string;
}

export const TransactionScroll: React.FC<Props> = ({
    Heading,
    type,
    onClick
}) => {
    const navigation = useNavigation();

    const handleNavigation = (): void => {
        navigation.navigate('TransactionDetail');
    };
    return (
        <>
            <HeadingContainer>
                <HeadingTextBold>{Heading}</HeadingTextBold>
                <TouchableWithoutFeedback onPress={onClick}>
                    <HeadingTextLight>{type}</HeadingTextLight>
                </TouchableWithoutFeedback>
            </HeadingContainer>
            <TransactionContainer>
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    onClick={handleNavigation}
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    onClick={handleNavigation}
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
                <OverviewCard
                    bottomLeftText="April 12, 2021"
                    mode="light"
                    tagText="pf"
                    topLeftText="Petrol"
                    topRightText="- $100"
                />
            </TransactionContainer>
        </>
    );
};
