import React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    align-self: flex-end;
    margin-bottom: 20px;
`;

const ContentContainer = styled.View`
    background-color: ${Colors.darkGray};
    padding: 15px 20px;
    flex: 1;
    padding-left: 35px;
    border-radius: 10px;
`;

const TagContainer = styled.View`
    background-color: ${Colors.pink};
    padding: 10px 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: -25px;
    z-index: 10;
`;

const TagText = styled.Text`
    font-family: 'rr';
    font-size: 22px;
    line-height: 38.5px;
    color: ${Colors.white};
`;

const TopView = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const BottomView = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const TopText = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    line-height: 28px;
    color: ${Colors.white};
`;

const BottomText = styled.Text`
    font-family: 'mr';
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.white};
`;

const OverviewCard: React.FC = () => {
    return (
        <Container>
            <TagContainer>
                <TagText>Rr</TagText>
            </TagContainer>
            <ContentContainer>
                <TopView>
                    <TopText>Food</TopText>
                    <TopText>78%</TopText>
                </TopView>
                <BottomView>
                    <BottomText>21 Payments</BottomText>
                    <BottomText>$202</BottomText>
                </BottomView>
            </ContentContainer>
        </Container>
    );
};

export default OverviewCard;
