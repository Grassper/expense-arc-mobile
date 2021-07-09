import styled from 'styled-components/native';

// importing colors
import Colors from '../../constants/colors.constant';

export const HeadingContainer = styled.View`
    width: 100%;
    margin: 20px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeadingText = styled.Text`
    font-family: 'rr';
    font-size: 26px;
    color: ${Colors.white};
`;

export const BadgeText = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    margin-left: 10px;
    color: ${Colors.white};
`;

export const IconContainer = styled.View`
    background-color: ${Colors.skyBlue};
    border-radius: 50px;
    padding: 10px;
`;

export const BadgeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 30%;
`;

export const ScrollContainer = styled.ScrollView`
    width: 100%;
    margin-top: 20px;
`;

export const CloudContainer = styled.View`
    background-color: ${Colors.skyBlue};
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CloudText = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    margin-left: 10px;
    color: ${Colors.white};
`;