import React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const Container = styled.View`
    padding-left: 10px;
`;

const AssetContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left-width: 1px;
    border-left-color: ${Colors.border};
`;

const ContentContainer = styled.View`
    background-color: ${Colors.darkGray};
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    flex: 1;
    border-radius: 10px;
`;

const Circle = styled.View`
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background-color: ${Colors.white};
    margin-left: -7.5px;
`;

const Text = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    line-height: 28px;
    color: ${Colors.white};
`;

const SactionCard: React.FC = () => {
    return (
        <Container>
            <AssetContainer>
                <Circle />
                <ContentContainer>
                    <Text>22 Mar, 04:07 am</Text>
                    <Text>$804</Text>
                </ContentContainer>
            </AssetContainer>
        </Container>
    );
};

export default SactionCard;
