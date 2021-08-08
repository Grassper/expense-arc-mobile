import {Ionicons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {Form} from '@/root/src/components/shared/Form';
import {OverviewStats} from '@/root/src/components/shared/Overview';
import {TransactionScroll} from '@/root/src/components/shared/Transaction';
import Colors from '@/root/src/constants/colors';
import {RootStackParamList} from '@/root/src/types/index';

type SummaryScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'HomeTabs'
>;

type Props = {
    navigation: SummaryScreenNavigationProp;
};

const Container = styled.View`
    flex: 1;
    width: 100%;
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

const IconContainer = styled.View`
    position: absolute;
    bottom: 5px;
    right: 0px;
    z-index: 10;
`;

const GraphContainer = styled.View`
    background-color: ${Colors.background};
    height: 50%;
    width: 100%;
    align-items: center;
    padding: 20px 0px;
`;

const FilterContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const FilterText = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    text-transform: capitalize;
    /* border-bottom-width: 2px;
    border-radius: 2px;
    border-color: ${Colors.white}; */
    padding-bottom: 10px;
`;

const GraphCanvas = styled.ScrollView`
    flex: 1;
    width: 100%;
    flex-direction: row;
`;

const Stick = styled.View`
    height: 100%;
    width: 1.5px;
    background-color: ${Colors.stick};
`;

const Candle = styled(LinearGradient)`
    width: 100%;
    height: 78%;
    position: absolute;
    z-index: 10;
    border-radius: 3px;
    bottom: 0;
`;

const CandleName = styled.Text`
    font-size: 14px;
    font-family: 'mm';
    color: ${Colors.white};
    line-height: 21px;
    text-align: center;
    min-width: 40px;
`;

const CandleStick = styled.View`
    height: 85%;
    width: 20px;
    position: relative;
    align-items: center;
`;

const CandleStickContainer = styled.View`
    flex-direction: column;
    align-items: center;
    margin: 0px 10px;
    justify-content: space-between;
`;

export const TransactionSummary: React.FC<Props> = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <Modal animationType="slide" visible={modalVisible}>
                <Form onClick={() => setModalVisible(false)} />
            </Modal>
            <GraphContainer>
                <FilterContainer>
                    <FilterText>Day</FilterText>
                    <FilterText>Week</FilterText>
                    <FilterText>Month</FilterText>
                </FilterContainer>
                <GraphCanvas horizontal>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Jan</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Feb</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Mar</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Apr</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>May</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Jun</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Jul</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Aug</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Sep</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Oct</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Nov</CandleName>
                    </CandleStickContainer>
                    <CandleStickContainer>
                        <CandleStick>
                            <Candle colors={['#FFFFFF', '#808080']} />
                            <Stick />
                        </CandleStick>
                        <CandleName>Dec</CandleName>
                    </CandleStickContainer>
                </GraphCanvas>
            </GraphContainer>
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
                    <OverviewStats
                        Heading="Recap"
                        Income={5980}
                        Expense={2071}
                    />
                    <TransactionScroll Heading="Transaction" />
                </DetailsContainer>
            </DetailsWrapper>
        </Container>
    );
};
