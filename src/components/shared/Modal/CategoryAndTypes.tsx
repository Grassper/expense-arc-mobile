import {Feather, Ionicons, MaterialIcons} from '@expo/vector-icons';
import {IconPicker} from '@grassper/react-native-icon-picker';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {v4 as uuidv4} from 'uuid';

import Colors from '@/root/src/constants/colors';
import {Colorswatch} from '@/root/src/constants/colorswatch';

interface PropsTypes {
    onClick: () => void;
    title: string;
}

interface ColorBoxTypes {
    color: string;
    selected?: boolean;
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

const HeaderContainer = styled.View`
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const ColorsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const ColorBox = styled.Pressable<ColorBoxTypes>`
    background-color: ${props => props.color};
    width: 50px;
    height: 40px;
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
    align-items: center;
`;

export const CategoryAndTypesModal: React.FC<PropsTypes> = ({
    onClick,
    title
}) => {
    const [color, setColor] = useState(Colors.dodgerBlue);
    const handleSubmit = (
        id: string,
        iconName: string,
        iconSet: string,
        iconColor: string,
        backgroundColor: string
    ): void => {
        console.log(id, iconName, iconSet, iconColor, backgroundColor);
    };

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
                <Pressable onPress={onClick}>
                    <ButtonContainer>
                        <MaterialIcons
                            color={Colors.white}
                            name="done"
                            size={24}
                        />
                    </ButtonContainer>
                </Pressable>
            </HeaderContainer>
            <IconPicker
                searchTitle={title}
                iconsTitle="Icons"
                numColumns={6}
                iconSize={20}
                backgroundColor={color}
                iconColor={color}
                placeholderText="Name"
                placeholderTextColor={Colors.whiteTab}
                onClick={handleSubmit}
            />
            <MainText>Colors</MainText>
            <ColorsContainer>
                {Colorswatch.map(entry => (
                    <ColorBox
                        color={entry}
                        onPress={() => setColor(entry)}
                        key={uuidv4()}>
                        {color === entry && (
                            <Feather
                                name="check-circle"
                                size={20}
                                color={Colors.white}
                            />
                        )}
                    </ColorBox>
                ))}
            </ColorsContainer>
        </ModalContainer>
    );
};
