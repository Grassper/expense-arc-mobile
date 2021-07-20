import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';

import BackButton from '../../components/backButton.component';
import Container from '../../components/container.component';
import Header from '../../components/header.component';
import HeadingContainer from '../../components/headingContainer.component';
import HeadingText from '../../components/headingText.component';
import OutlineAdd from '../../components/outlineAdd.component';
import OverviewCard from '../../components/overviewCard.component';
import ScrollContainer from '../../components/scrollContainer.component';
import Colors from '../../constants/colors.constant';

type RootStackParamList = {
    Summary: undefined;
    ExpenseOverview: undefined;
    IncomeOverview: undefined;
    CategorySummary: undefined;
    CategoryItemList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'ExpenseOverview'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const SubHeading = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    line-height: 28px;
    margin-top: -5px;
    margin-bottom: 20px;
    text-transform: capitalize;
    color: ${Colors.white};
`;

const HeadingWrapper = styled.View`
    width: 100%;
`;

const ExpenseOverview: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
                <OutlineAdd />
            </Header>
            <HeadingWrapper>
                <HeadingContainer header>
                    <HeadingText>Expense Overview</HeadingText>
                </HeadingContainer>
                <SubHeading>You spend $ 6,225</SubHeading>
            </HeadingWrapper>
            <ScrollContainer>
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
            </ScrollContainer>
        </Container>
    );
};

export default ExpenseOverview;
