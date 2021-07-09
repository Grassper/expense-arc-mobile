import {AntDesign} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import BackButton from '../../components/backButton.component';
import CategoryCard from '../../components/categoryCard.component';
import Container from '../../components/container.component';
import FieldContainer from '../../components/fieldContainer.component';
import Header from '../../components/header.component';
import {
    HeadingContainer,
    HeadingText,
    ScrollContainer
} from '../settings/settings.styles';

type RootStackParamList = {
    Preference: undefined;
    Account: undefined;
    Settings: undefined;
    BackupAndSecurity: undefined;
    Categories: undefined;
    Notification: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Categories'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Categories: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
            </Header>
            <HeadingContainer header>
                <HeadingText>Categories</HeadingText>
                <AntDesign name="plus" size={24} color="white" />
            </HeadingContainer>
            <ScrollContainer>
                <FieldContainer>
                    <CategoryCard color="#461388" mainText="Clothing" />
                    <CategoryCard color="#461388" mainText="Clothing" />
                    <CategoryCard color="#461388" mainText="Clothing" />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default Categories;
