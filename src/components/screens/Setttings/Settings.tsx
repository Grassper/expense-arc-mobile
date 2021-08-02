import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {
    Container,
    FieldContainer,
    HeadingContainer,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Text} from '@/root/src/components/shared/FieldText';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

import {
    BadgeContainer,
    BadgeText,
    CloudContainer,
    CloudText,
    IconContainer
} from './Settings.styles';

type RootStackParamList = {
    Preference: undefined;
    Account: undefined;
    Settings: undefined;
    BackupAndSecurity: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Settings'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Settings: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <HeadingContainer>
                <HeadingText>Settings</HeadingText>
                <BadgeContainer>
                    <IconContainer>
                        <SimpleLineIcons
                            name="badge"
                            size={15}
                            color={Colors.white}
                        />
                    </IconContainer>
                    <BadgeText>Prime</BadgeText>
                </BadgeContainer>
            </HeadingContainer>
            <CloudContainer>
                <AntDesign name="cloud" size={24} color={Colors.white} />
                <CloudText>Enable Cloud Backup</CloudText>
            </CloudContainer>
            <ScrollContainer>
                <FieldContainer>
                    <Text
                        mainText="Account"
                        onClick={() => navigation.push('Account')}
                    />
                    <Text
                        mainText="Expense preference"
                        onClick={() => navigation.push('Preference')}
                    />
                    <Text
                        mainText="backup & security"
                        onClick={() => navigation.push('BackupAndSecurity')}
                    />
                    <Text mainText="Rescan sms inbox" />
                    <Text mainText="Language" />
                </FieldContainer>
                <FieldContainer>
                    <Text mainText="Contact us" />
                    <Text mainText="give Expense arc Review" />
                    <Text mainText="share Expense arc" />
                </FieldContainer>
                <FieldContainer>
                    <Text mainText="App version" />
                    <Text mainText="Terms of service" />
                    <Text mainText="Privacy policy" />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default Settings;
