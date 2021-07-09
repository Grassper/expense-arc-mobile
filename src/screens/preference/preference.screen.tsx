import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import BackButton from '../../components/backButton.component';
import Container from '../../components/container.component';
import FieldContainer from '../../components/fieldContainer.component';
import FieldText from '../../components/fieldText.component';
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
    'Preference'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Preference: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
            </Header>
            <HeadingContainer header>
                <HeadingText>Expense Preference</HeadingText>
            </HeadingContainer>
            <ScrollContainer>
                <FieldContainer>
                    <FieldText mainText="Accounts" subText="Manage accounts" />
                    <FieldText
                        mainText="Notifications"
                        subText="Manage summary alerts"
                    />
                    <FieldText
                        mainText="Bill Reminders"
                        subText="2 days before and on due date"
                    />
                    <FieldText
                        mainText="Categories"
                        subText="Create and delete categories"
                        onClick={() => navigation.push('Categories')}
                    />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default Preference;
