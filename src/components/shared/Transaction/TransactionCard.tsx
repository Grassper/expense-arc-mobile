import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface LineTypes {
    lineToggle?: boolean;
}

interface SactionCardTypes {
    top?: boolean;
    bottom?: boolean;
    onClick?: () => void;
}

const Container = styled.View`
    padding-left: 10px;
`;

const AssetContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.View`
    background-color: ${Colors.darkGray};
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    margin: 7.5px 0;
    flex: 1;
    border-radius: 10px;
`;

const Line = styled.View<LineTypes>`
    width: 1px;
    height: ${({lineToggle}) => (lineToggle ? '50%' : '100%')};
    background-color: ${Colors.darkGray};
    position: absolute;
    left: 0;
`;

const LineTop = styled(Line)`
    bottom: 0;
`;

const LineBottom = styled(Line)`
    top: 0;
`;

const Triangle = styled.View`
    width: 0;
    height: 0;
    margin-left: 10px;
    border-top-width: 10px;
    border-bottom-width: 10px;
    border-right-width: 10px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: ${Colors.darkGray};
`;

const Circle = styled.View`
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background-color: ${Colors.white};
    margin-left: -6px;
`;

const Text = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    line-height: 28px;
    color: ${Colors.white};
`;

export const TransactionCard: React.FC<SactionCardTypes> = ({
    top,
    bottom,
    onClick
}) => {
    const lineToggle = top || bottom;
    return (
        <Container>
            <AssetContainer>
                {bottom ? (
                    <LineBottom lineToggle={lineToggle} />
                ) : (
                    <LineTop lineToggle={lineToggle} />
                )}
                <Circle />
                <Triangle />
                <TouchableWithoutFeedback onPress={onClick}>
                    <ContentContainer>
                        <Text>22 Mar, 04:07 am</Text>
                        <Text>$804</Text>
                    </ContentContainer>
                </TouchableWithoutFeedback>
            </AssetContainer>
        </Container>
    );
};
