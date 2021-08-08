import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {BackButton} from '@/root/src/components/shared/Button';
import {
    Container,
    HeadingContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import {RootStackParamList} from '@/root/src/types/index';

type AccountScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Account'
>;

type Props = {
    navigation: AccountScreenNavigationProp;
};

export const Account: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
            </Header>
            <HeadingContainer header>
                <HeadingText>Account</HeadingText>
            </HeadingContainer>
        </Container>
    );
};
