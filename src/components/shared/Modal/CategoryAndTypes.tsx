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
import {Icon} from '@expo/vector-icons/build/createIconSet';
import React, {useState} from 'react';
import {FlatList, ListRenderItem, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {v4 as uuidv4} from 'uuid';

import {SaveButton} from '@/root/src/components/shared/Button';
import Colors from '@/root/src/constants/colors';
import {Colorswatch} from '@/root/src/constants/colorswatch';
import {IconCollection} from '@/root/src/constants/Icons';

interface PropsTypes {
    onClick: () => void;
    title: string;
}

interface IconTypes {
    iconName: string;
    iconSet: string;
    uuid: string;
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
    flex: 1;
    width: 100%;
`;

interface IconsBoxTypes {
    backgroundColor: string;
}

const IconsBox = styled.Pressable<IconsBoxTypes>`
    background-color: ${props => props.backgroundColor || Colors.darkGray};
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 5px;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
`;

type IconObjTypes = {
    [key: string]:
        | typeof AntDesign
        | typeof Entypo
        | typeof EvilIcons
        | typeof Feather
        | typeof FontAwesome
        | typeof FontAwesome5
        | typeof Fontisto
        | typeof Foundation
        | typeof Ionicons
        | typeof MaterialCommunityIcons
        | typeof MaterialIcons
        | typeof Octicons
        | typeof SimpleLineIcons
        | typeof Zocial;
};

const IconObj: IconObjTypes = {
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
};

export const CategoryAndTypesModal: React.FC<PropsTypes> = ({
    onClick,
    title
}) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState(Colors.dodgerBlue);
    const filteredIcons = IconCollection.filter(icon =>
        icon.iconName.toLowerCase().includes(name.toLowerCase())
    );
    const handleSubmit = (): void => {
        onClick();
    };

    const IconRenderer: ListRenderItem<IconTypes> = ({item}) => {
        const IconBoxComponent = IconObj[item.iconSet];
        return (
            <IconsBox backgroundColor={`${color}`}>
                <IconBoxComponent
                    name={item.iconName}
                    size={20}
                    color={Colors.white}
                />
            </IconsBox>
        );
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
            <MainText>Icons</MainText>
            <FlatList
                numColumns={6}
                data={filteredIcons}
                renderItem={IconRenderer}
                keyExtractor={item => item.uuid}
            />
        </ModalContainer>
    );
};
