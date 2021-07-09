// importing icons
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import Container from '../../components/container.component';
import FieldContainer from '../../components/fieldContainer.component';
import FieldText from '../../components/fieldText.component';
// importing Colors
import Colors from '../../constants/colors.constant';
// importing styled components
import {
    BadgeContainer,
    BadgeText,
    CloudContainer,
    CloudText,
    HeadingContainer,
    HeadingText,
    IconContainer,
    ScrollContainer
} from './settings.styles';

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
                    <FieldText
                        mainText="Account"
                        onClick={() => navigation.push('Account')}
                    />
                    <FieldText
                        mainText="Expense preference"
                        onClick={() => navigation.push('Preference')}
                    />
                    <FieldText
                        mainText="backup & security"
                        onClick={() => navigation.push('BackupAndSecurity')}
                    />
                    <FieldText mainText="Rescan sms indox" />
                    <FieldText mainText="Language" />
                </FieldContainer>
                <FieldContainer>
                    <FieldText mainText="Contact us" />
                    <FieldText mainText="give Expense arc Review" />
                    <FieldText mainText="share Expense arc" />
                </FieldContainer>
                <FieldContainer>
                    <FieldText mainText="App version" />
                    <FieldText mainText="Terms of service" />
                    <FieldText mainText="Privacy policy" />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default Settings;
