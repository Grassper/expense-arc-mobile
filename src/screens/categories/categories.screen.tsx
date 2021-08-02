import {AntDesign} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {BackButton} from '@/root/src/components/shared/BackButton';
import {CategoryCard} from '@/root/src/components/shared/CategoryCard';
import {Container} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingContainer} from '@/root/src/components/shared/HeaderContainer';
import {HeadingText} from '@/root/src/components/shared/HeadingText';

import FieldContainer from '../../components/fieldContainer.component';
import ScrollContainer from '../../components/scrollContainer.component';

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
