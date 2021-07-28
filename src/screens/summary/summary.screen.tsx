import {AntDesign, Ionicons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import Form from '@/root/src/components/form.component';
import OverviewCard from '@/root/src/components/overviewCard.component';
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
    background-color: ${Colors.background};
    width: 100%;
    align-items: center;
`;

const DashboardWrapper = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
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

const DetailsWrapper = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    align-items: center;
`;

const DetailsContainer = styled.View`
    width: 90%;
    flex: 1;
`;

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

const IconContainer = styled.View`
    position: absolute;
    bottom: 5px;
    right: 0px;
    z-index: 10;
`;

const Summary: React.FC<Props> = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Modal animationType="slide" visible={modalVisible}>
                <Form onClick={() => setModalVisible(false)} />
            </Modal>
            <DashboardContainer>
                <DashboardWrapper>
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
                </DashboardWrapper>
            </DashboardContainer>
            <DetailsWrapper>
                <DetailsContainer>
                    <TouchableWithoutFeedback
                        onPress={() => setModalVisible(true)}>
                        <IconContainer>
                            <Ionicons
                                name="ios-add-circle"
                                size={50}
                                color={Colors.background}
                            />
                        </IconContainer>
                    </TouchableWithoutFeedback>
                    <HeadingContainer>
                        <HeadingTextBold>Recap</HeadingTextBold>
                        <HeadingTextLight>Weekly</HeadingTextLight>
                    </HeadingContainer>
                    <OverviewContainer>
                        <OverviewBox>
                            <AntDesign name="arrowup" size={24} color="black" />
                            <OverviewContentBox>
                                <OverviewText>Income</OverviewText>
                                <OverviewTextBold>$ 5,980</OverviewTextBold>
                            </OverviewContentBox>
                        </OverviewBox>
                        <OverviewBox>
                            <AntDesign
                                name="arrowdown"
                                size={24}
                                color="black"
                            />
                            <OverviewContentBox>
                                <OverviewText>Expense</OverviewText>
                                <OverviewTextBold>$ 2,071</OverviewTextBold>
                            </OverviewContentBox>
                        </OverviewBox>
                    </OverviewContainer>
                    <HeadingContainer>
                        <HeadingTextBold>Transaction</HeadingTextBold>
                        <HeadingTextLight>Expense</HeadingTextLight>
                    </HeadingContainer>
                    <TransactionContainer>
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
                </DetailsContainer>
            </DetailsWrapper>
        </Container>
    );
};

export default Summary;
