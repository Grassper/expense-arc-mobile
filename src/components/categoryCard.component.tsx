import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const Card = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
`;

interface BoxTypes {
    color: string;
}

const Box = styled.View<BoxTypes>`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => props.color};
`;

const Text = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    color: ${Colors.white};
    margin: 10px 0 10px 10px;
`;

interface CategoryCardTypes {
    color: string;
    mainText: string;
    onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardTypes> = ({
    color,
    mainText,
    onClick
}) => {
    return (
        <Pressable onPress={onClick}>
            <Card>
                <Box color={color} />
                <Text>{mainText}</Text>
            </Card>
        </Pressable>
    );
};

export default CategoryCard;
