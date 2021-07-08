// importing icons
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

// importing Colors
import Colors from '../../constants/colors.constant';
import TextContainer from './fieldText.component';
// importing styled components
import {
    AppContainer,
    BadgeContainer,
    BadgeText,
    CloudContainer,
    CloudText,
    Container,
    FieldContainer,
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
        <AppContainer>
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
                        <TextContainer
                            content="Account"
                            onClick={() => navigation.navigate('Account')}
                        />
                        <TextContainer
                            content="Expense preference"
                            onClick={() => navigation.navigate('Preference')}
                        />
                        <TextContainer
                            content="backup & security"
                            onClick={() =>
                                navigation.navigate('BackupAndSecurity')
                            }
                        />
                        <TextContainer content="Rescan sms indox" />
                        <TextContainer content="Language" />
                    </FieldContainer>
                    <FieldContainer>
                        <TextContainer content="Contact us" />
                        <TextContainer content="give Expense arc Review" />
                        <TextContainer content="share Expense arc" />
                    </FieldContainer>
                    <FieldContainer>
                        <TextContainer content="App version" />
                        <TextContainer content="Terms of service" />
                        <TextContainer content="Privacy policy" />
                    </FieldContainer>
                </ScrollContainer>
            </Container>
        </AppContainer>
    );
};

export default Settings;
