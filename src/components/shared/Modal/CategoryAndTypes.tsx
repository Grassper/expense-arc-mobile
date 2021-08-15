import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from '@expo/vector-icons';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import {SaveButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';
import {Colorswatch} from '@/root/src/constants/colorswatch';

interface PropsTypes {
    onClick: () => void;
    title: string;
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

const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

const TextInput = styled.TextInput`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    background-color: ${Colors.darkGray};
    border-radius: 7px;
    padding: 17px 15px;
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

interface ColorBoxTypes {
    color: string;
    selected?: boolean;
}

const ColorBox = styled.Pressable<ColorBoxTypes>`
    background-color: ${props => props.color};
    width: 50px;
    height: 40px;
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
    align-items: center;
`;

const IconsContainer = styled.FlatList`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const IconsBox = styled.Pressable`
    background-color: ${Colors.darkGray};
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 5px;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
`;

const IconObj = [
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
];

export const CategoryAndTypesModal: React.FC<PropsTypes> = ({
    onClick,
    title
}) => {
    const [name, setName] = useState('');

    const [color, setColor] = useState(Colors.dodgerBlue);

    const [icon, setIcon] = useState('');

    const handleSubmit = (): void => {
        onClick();
    };

    const IconComponent = IconObj[0];

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
            </HeaderContainer>
            <MainText>{title}</MainText>
            <TextInput
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor={Colors.whiteTab}
                value={name}
            />
            <MainText>Colors</MainText>
            <ColorsContainer>
                {Colorswatch.map(entry => (
                    <ColorBox color={entry} onPress={() => setColor(entry)}>
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
            <MainText>Icons</MainText>
            <TextInput
                onChangeText={setIcon}
                placeholder="Search Icons"
                placeholderTextColor={Colors.whiteTab}
                value={icon}
            />
            {/* <IconsContainer>
                <IconsBox>
                    <MaterialCommunityIcons
                        name="check-circle"
                        size={20}
                        color={Colors.white}
                    />
                </IconsBox>
            </IconsContainer> */}
            <IconsContainer />
            <SaveButton onClick={handleSubmit} />
        </ModalContainer>
    );
};
