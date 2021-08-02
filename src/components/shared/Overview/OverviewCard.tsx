import React from 'react';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface ModeTypes {
    mode: string;
}

interface OverviewCardTypes {
    tagText: string;
    topRightText: string;
    topLeftText: string;
    bottomRightText?: string;
    bottomLeftText?: string;
    mode: string;
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    align-self: flex-end;
    margin-bottom: 20px;
`;

const ContentContainer = styled.View<ModeTypes>`
    background-color: ${props =>
        props.mode === 'dark' ? Colors.darkGray : Colors.white};
    padding: ${props => (props.mode === 'dark' ? '15px 20px' : '0px 20px')};
    flex: 1;
    padding-left: 40px;
    border-radius: 10px;
`;

const TagContainer = styled.View`
    background-color: ${Colors.dodgerBlue};
    padding: 10px 17px;
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

const TopText = styled.Text<ModeTypes>`
    font-family: 'ms';
    font-size: 16px;
    line-height: 28px;
    color: ${props => (props.mode === 'dark' ? Colors.white : Colors.primary)};
`;

const BottomText = styled.Text<ModeTypes>`
    font-family: 'mr';
    font-size: 14px;
    line-height: 24px;
    color: ${props => (props.mode === 'dark' ? Colors.white : Colors.primary)};
`;

export const OverviewCard: React.FC<OverviewCardTypes> = ({
    tagText,
    topRightText,
    topLeftText,
    bottomRightText,
    bottomLeftText,
    mode
}) => {
    return (
        <Container>
            <TagContainer>
                <TagText>{tagText}</TagText>
            </TagContainer>
            <ContentContainer mode={mode}>
                <TopView>
                    <TopText mode={mode}>{topLeftText}</TopText>
                    <TopText mode={mode}>{topRightText}</TopText>
                </TopView>
                <BottomView>
                    <BottomText mode={mode}>{bottomLeftText}</BottomText>
                    <BottomText mode={mode}>{bottomRightText}</BottomText>
                </BottomView>
            </ContentContainer>
        </Container>
    );
};
