import styled from 'styled-components/native';

// importing colors
import Colors from '../../constants/colors.constant';

export const AppContainer = styled.View`
    background-color: ${Colors.background};
    flex: 1;
    align-items: center;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    width: 90%;
`;

export const HeadingContainer = styled.View`
    width: 100%;
    margin: 10px 0;
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
    background-color: ${Colors.badgeBackground};
    border-radius: 50px;
    padding: 10px;
`;

export const BadgeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 30%;
`;

export const FleidText = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    margin: 10px 0;
`;

export const FieldContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 100%;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 20px;
`;

export const ScrollContainer = styled.ScrollView`
    width: 100%;
    margin-top: 20px;
`;
