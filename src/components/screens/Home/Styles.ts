import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface ConsumedBarTypes {
    width: number;
}

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const DashboardContainer = styled.View`
    background-color: ${Colors.background};
    width: 100%;
    align-items: center;
`;

export const DashboardWrapper = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`;

export const PercentContainer = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const BarContainer = styled.View`
    background-color: ${Colors.white};
    height: 10px;
    flex: auto;
    border-radius: 10px;
    margin: 25px 0px;
    margin-right: 10px;
`;

export const ConsumedBar = styled.View<ConsumedBarTypes>`
    height: 100%;
    background-color: ${Colors.skyBlue};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: ${props => (props.width === 100 ? '10px' : '0px')};
    border-bottom-right-radius: ${props =>
        props.width === 100 ? '10px' : '0px'};
    width: ${props => `${props.width}%`};
`;

export const RateContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const RateBoxLeft = styled.View`
    margin: 0px 20px;
    align-items: flex-end;
`;

export const RateBoxRight = styled.View`
    margin: 0px 20px;
    align-items: flex-start;
`;

export const Line = styled.View`
    height: 100%;
    background-color: ${Colors.border};
    width: 2px;
`;

export const DetailsWrapper = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    align-items: center;
`;

export const DetailsContainer = styled.View`
    width: 90%;
    flex: 1;
`;

export const RateText = styled.Text`
    font-size: 18px;
    font-family: 'rr';
    margin-bottom: 10px;
    color: ${Colors.white};
`;

export const MainText = styled.Text`
    font-size: 32px;
    font-family: 'rs';
    color: ${Colors.white};
    margin: 20px 0px;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-family: 'mr';
    color: ${Colors.white};
`;

export const TopText = styled(Text)`
    margin-bottom: -7px;
`;

export const IconContainer = styled.View`
    position: absolute;
    bottom: 5px;
    right: 0px;
    z-index: 10;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.white};
`;

export const BudgetContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100%;
`;

export const PencilIcon = styled.Pressable`
    position: absolute;
    right: 18%;
`;
