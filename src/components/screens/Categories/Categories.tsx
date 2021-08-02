import {AntDesign} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {BackButton} from '@/root/src/components/shared/Button';
import {CategoryCard} from '@/root/src/components/shared/CategoryCard';
import {
    Container,
    FieldContainer,
    HeadingContainer,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';

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

export const Categories: React.FC<Props> = ({navigation}) => {
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
