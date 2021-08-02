import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {BackButton} from '@/root/src/components/shared/BackButton';
import {Container} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingContainer} from '@/root/src/components/shared/HeaderContainer';
import {HeadingText} from '@/root/src/components/shared/HeadingText';

type RootStackParamList = {
    Preference: undefined;
    Account: undefined;
    Settings: undefined;
    BackupAndSecurity: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Account'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Account: React.FC<Props> = ({navigation}) => {
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

export default Account;
