import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import BackButton from '../../components/backButton.component';
import Container from '../../components/container.component';
import Header from '../../components/header.component';
import HeadingContainer from '../../components/headingContainer.component';
import HeadingText from '../../components/headingText.component';

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
