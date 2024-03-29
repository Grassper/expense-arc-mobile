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
import {RootStackParamList} from '@/root/src/types/index';

import {
    BadgeContainer,
    BadgeText,
    CloudContainer,
    CloudText,
    IconContainer
} from './Settings.styles';

type SettingsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'HomeTabs'
>;

type Props = {
    navigation: SettingsScreenNavigationProp;
};

export const Settings: React.FC<Props> = ({navigation}) => {
    return (
        <Container>
            <HeadingContainer>
                <HeadingText>Settings</HeadingText>
                <BadgeContainer>
                    <IconContainer>
                        <SimpleLineIcons
                            color={Colors.white}
                            name="badge"
                            size={15}
                        />
                    </IconContainer>
                    <BadgeText>Prime</BadgeText>
                </BadgeContainer>
            </HeadingContainer>
            <CloudContainer>
                <AntDesign color={Colors.white} name="cloud" size={24} />
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
