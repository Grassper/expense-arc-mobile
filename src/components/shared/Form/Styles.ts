import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface Color {
    color?: string;
}

export const ButtonContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 40px;
    height: 40px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.View`
    margin-bottom: 20px;
    flex: auto;
`;

export const ImageContainer = styled.View`
    margin-bottom: 20px;
    height: 150px;
    flex: auto;
    border-radius: 7px;
    overflow: hidden;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-color: ${Colors.white};
`;

export const SplitContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextBold = styled.Text`
    font-family: 'ms';
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 15px;
`;

export const RowText = styled(TextBold)`
    margin-bottom: 0px;
`;

export const RadioContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const RowContainer = styled(RadioContainer)`
    align-items: center;
`;

export const RadioButton = styled.Pressable<Color>`
    width: 45%;
    background-color: ${props => (props.color ? props.color : Colors.darkGray)};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    border-radius: 10px;
`;

export const CircleOuter = styled.View`
    border-width: 2px;
    height: 24px;
    width: 24px;
    border-radius: 50px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border-color: ${Colors.white};
`;

export const CircleInner = styled.View`
    width: 60%;
    height: 60%;
    border-radius: 50px;
    background-color: ${Colors.white};
`;

export const TextInput = styled.TextInput`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 17px 15px;
`;

export const TextLight = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
`;

export const Picker = styled(TextLight)<Color>`
    color: ${props => props.color};
    background-color: ${Colors.darkGray};
    line-height: 28px;
    border-radius: 7px;
    padding: 20px 15px;
`;

export const Spacer = styled.View`
    padding: 5px;
`;

export const DateContainer = styled.View`
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 20px 15px;
    flex-direction: row;
    align-items: center;
`;

export const DateText = styled(TextLight)<Color>`
    margin-left: 10px;
    color: ${props => props.color};
`;
