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

export const FieldText = styled.Text`
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

export const CloudContainer = styled.View`
    background-color: ${Colors.skyBlue};
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
`;

export const CloudText = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    margin-left: 10px;
    color: ${Colors.white};
`;
