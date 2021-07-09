import styled from 'styled-components/native';

// importing colors
import Colors from '../../constants/colors.constant';

interface HeadingContainerTypes {
    header?: boolean;
}

export const HeadingContainer = styled.View<HeadingContainerTypes>`
    width: 100%;
    margin: ${props => (props.header ? '0px 0px 20px' : '20px')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeadingText = styled.Text`
    font-family: 'rr';
    font-size: 26px;
    text-transform: capitalize;
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
`;

export const CloudContainer = styled.View`
    background-color: ${Colors.skyBlue};
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const CloudText = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    margin-left: 10px;
    color: ${Colors.white};
`;
