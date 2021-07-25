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
`;

const ContentContainer = styled.TouchableOpacity`
    background-color: ${Colors.darkGray};
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    margin: 7.5px 0;
    flex: 1;
    border-radius: 10px;
`;

interface LineTypes {
    lineToggle?: boolean;
}

const Line = styled.View<LineTypes>`
    width: 1px;
    height: ${({lineToggle}) => (lineToggle ? '50%' : '100%')};
    background-color: white;
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

interface SactionCardTypes {
    top?: boolean;
    bottom?: boolean;
    onClick?: () => void;
}

const SactionCard: React.FC<SactionCardTypes> = ({top, bottom, onClick}) => {
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
                <ContentContainer onPress={onClick}>
                    <Text>22 Mar, 04:07 am</Text>
                    <Text>$804</Text>
                </ContentContainer>
            </AssetContainer>
        </Container>
    );
};

export default SactionCard;
