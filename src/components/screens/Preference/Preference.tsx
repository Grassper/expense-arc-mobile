import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {BackButton} from '@/root/src/components/shared/Button';
import {
    Container,
    FieldContainer,
    HeadingContainer,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Text} from '@/root/src/components/shared/FieldText';
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
    'Preference'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

export const Preference: React.FC<Props> = ({navigation}) => {
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
                    <Text mainText="Accounts" subText="Manage accounts" />
                    <Text
                        mainText="Notifications"
                        subText="Manage summary alerts"
                    />
                    <Text
                        mainText="Bill Reminders"
                        subText="2 days before and on due date"
                    />
                    <Text
                        mainText="Categories"
                        subText="Create and delete categories"
                        onClick={() => navigation.push('Categories')}
                    />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};
