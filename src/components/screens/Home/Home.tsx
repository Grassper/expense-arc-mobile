import {EvilIcons, Ionicons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {Form} from '@/root/src/components/shared/Form';
import {BudgetModel, TypeModal} from '@/root/src/components/shared/Modal';
import {OverviewStats} from '@/root/src/components/shared/Overview';
import {TransactionScroll} from '@/root/src/components/shared/Transaction';
import Colors from '@/root/src/constants/colors';
import {RootStackParamList} from '@/root/src/types/index';

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'HomeTabs'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
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
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.white};
`;

const BudgetContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100%;
`;

const PencilIcon = styled.Pressable`
    position: absolute;
    right: 18%;
`;

export const Home: React.FC<Props> = () => {
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [budgetModalVisible, setBudgetModalVisible] = useState(false);
    const [typeModalVisible, setTypeModalVisible] = useState(false);
    const [type, setType] = useState('Expense');

    const handleTypeModal = (value: string): void => {
        setType(value);
        setTypeModalVisible(false);
    };

    return (
        <Container>
            <Modal animationType="slide" visible={formModalVisible}>
                <Form onClick={() => setFormModalVisible(false)} />
            </Modal>
            <Modal
                animationType="fade"
                visible={budgetModalVisible}
                transparent>
                <BudgetModel onClick={() => setBudgetModalVisible(false)} />
            </Modal>
            <Modal animationType="fade" visible={typeModalVisible} transparent>
                <TypeModal
                    onClick={(value: string) => handleTypeModal(value)}
                    inputType={type}
                />
            </Modal>
            <DashboardContainer>
                <DashboardWrapper>
                    <TopText>Total expense</TopText>
                    <MainText>$ 24,000.50</MainText>
                    <BudgetContainer>
                        <Text>of $ 40,000 budgeted</Text>
                        <PencilIcon onPress={() => setBudgetModalVisible(true)}>
                            <EvilIcons
                                name="pencil"
                                size={24}
                                color={Colors.white}
                            />
                        </PencilIcon>
                    </BudgetContainer>
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
                        onPress={() => setFormModalVisible(true)}>
                        <IconContainer>
                            <Ionicons
                                name="ios-add-circle"
                                size={50}
                                color={Colors.background}
                            />
                        </IconContainer>
                    </TouchableWithoutFeedback>
                    <OverviewStats
                        Heading="Recap"
                        Income={5980}
                        Expense={2071}
                        onClick={() => {}}
                    />
                    <TransactionScroll
                        Heading="Transaction"
                        type={type}
                        onClick={() => setTypeModalVisible(true)}
                    />
                </DetailsContainer>
            </DetailsWrapper>
        </Container>
    );
};
