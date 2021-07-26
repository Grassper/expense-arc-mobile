import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';

import TopContainer from '@/root/src/components/container.component';
import Colors from '@/root/src/constants/colors.constant';

type RootStackParamList = {
    Summary: undefined;
    Overview: undefined;
    SactionList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Summary'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Container = styled.View`
    flex: 1;
    width: 100%;
`;

const DashboardContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    width: 100%;
`;

const PercentContainer = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

const BarContainer = styled.View`
    background-color: ${Colors.white};
    height: 10px;
    flex: auto;
    border-radius: 10px;
    margin: 25px 0px;
    margin-right: 10px;
`;

interface ConsumedBarTypes {
    width: number;
}

const ConsumedBar = styled.View<ConsumedBarTypes>`
    height: 100%;
    background-color: ${Colors.skyBlue};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: ${props => (props.width === 100 ? '10px' : '0px')};
    border-bottom-right-radius: ${props =>
        props.width === 100 ? '10px' : '0px'};
    width: ${props => `${props.width}%`};
`;

const RateContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const RateBoxLeft = styled.View`
    margin: 0px 20px;
    align-items: flex-end;
`;

const RateBoxRight = styled.View`
    margin: 0px 20px;
    align-items: flex-start;
`;

const Line = styled.View`
    height: 100%;
    background-color: ${Colors.border};
    width: 2px;
`;

const DetailsContainer = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`;

const OverviewContainer = styled.View``;

const TransactionContainer = styled.View``;

const HeadingContainer = styled.View``;

const HeadingTextBold = styled.Text``;

const HeadingTextLight = styled.Text``;

const RateText = styled.Text`
    font-size: 18px;
    font-family: 'rr';
    margin-bottom: 10px;
    color: ${Colors.white};
`;

const MainText = styled.Text`
    font-size: 32px;
    font-family: 'rs';
    color: ${Colors.white};
    margin: 20px 0px;
`;

const Text = styled.Text`
    font-size: 16px;
    font-family: 'mr';
    color: ${Colors.white};
`;

const TopText = styled(Text)`
    margin-bottom: -7px;
`;

const Summary: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <TopContainer>
                <DashboardContainer>
                    <TopText>Total expense</TopText>
                    <MainText>$ 24,000.50</MainText>
                    <Text>of $ 40,000 budgeted</Text>
                    <PercentContainer>
                        <BarContainer>
                            <ConsumedBar width={76} />
                        </BarContainer>
                        <Text>76%</Text>
                    </PercentContainer>
                    <RateContainer>
                        <RateBoxLeft>
                            <RateText>$ 520</RateText>
                            <Text>Today spent</Text>
                        </RateBoxLeft>
                        <Line />
                        <RateBoxRight>
                            <RateText>$ 2000</RateText>
                            <Text>Average / day</Text>
                        </RateBoxRight>
                    </RateContainer>
                </DashboardContainer>
            </TopContainer>
            <DetailsContainer />
        </Container>
    );
};

export default Summary;
