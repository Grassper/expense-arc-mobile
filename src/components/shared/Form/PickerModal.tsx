import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import {OutlineAdd} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';

interface PickerTypes {
    onClick: () => void;
    title: string;
    contentArray: Array<Array<string>>;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface PickerButtonTypes {
    content: string;
    color?: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    selected: string;
}

interface BoxTypes {
    color: string;
}

const ModalContainer = styled.View`
    padding: 20px;
    flex: 1;
    background-color: ${Colors.background};
`;

const ButtonContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 40px;
    height: 40px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const MainText = styled.Text`
    font-family: 'mm';
    font-size: 18px;
    color: ${Colors.white};
    margin: 15px 0px;
`;

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

const RadioButton = styled.Pressable`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: ${Colors.darkGray};
    border-radius: 10px;
    margin-bottom: 20px;
`;

const CircleOuter = styled.View`
    border-width: 2px;
    height: 24px;
    width: 24px;
    border-radius: 50px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border-color: ${Colors.white};
`;

const TextLight = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
`;

const CircleInner = styled.View`
    width: 60%;
    height: 60%;
    border-radius: 50px;
    background-color: ${Colors.white};
`;

const Box = styled.View<BoxTypes>`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    background-color: ${props => props.color};
`;

const HeaderContainer = styled.View`
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const PickerButton: React.FC<PickerButtonTypes> = ({
    content,
    color,
    setSelected,
    selected
}) => {
    return (
        <RadioButton onPress={() => setSelected(content)}>
            <Container>
                {color && <Box color={color} />}
                <TextLight>{content}</TextLight>
            </Container>
            <CircleOuter>{selected === content && <CircleInner />}</CircleOuter>
        </RadioButton>
    );
};

export const PickerModel: React.FC<PickerTypes> = ({
    onClick,
    title,
    contentArray,
    selected,
    setSelected
}) => {
    return (
        <ModalContainer>
            <HeaderContainer>
                <Pressable onPress={onClick}>
                    <ButtonContainer>
                        <Ionicons
                            color={Colors.white}
                            name="ios-close"
                            size={24}
                        />
                    </ButtonContainer>
                </Pressable>
                <OutlineAdd onClick={() => {}} />
            </HeaderContainer>
            <MainText>{title}</MainText>
            <ScrollContainer>
                {contentArray.map(entry => {
                    return (
                        <PickerButton
                            key={entry[0]}
                            color={entry[1] || undefined}
                            content={entry[0]}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    );
                })}
            </ScrollContainer>
        </ModalContainer>
    );
};
