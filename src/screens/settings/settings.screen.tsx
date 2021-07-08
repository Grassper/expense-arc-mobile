// importing icons
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import React from 'react';

// importing Colors
import Colors from '../../constants/colors.constant';
// importing styled components
import {
    AppContainer,
    BadgeContainer,
    BadgeText,
    CloudContainer,
    CloudText,
    Container,
    FieldContainer,
    FleidText,
    HeadingContainer,
    HeadingText,
    IconContainer,
    ScrollContainer
} from './settings.styles';

const Settings: React.FC = () => {
    return (
        <AppContainer>
            <Container>
                <HeadingContainer>
                    <HeadingText>Settings</HeadingText>
                    <BadgeContainer>
                        <IconContainer>
                            <SimpleLineIcons
                                name="badge"
                                size={20}
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
                        <FleidText>Account</FleidText>
                        <FleidText>Expense preference</FleidText>
                        <FleidText>backup & security</FleidText>
                        <FleidText>Rescan sms indox</FleidText>
                        <FleidText>Language</FleidText>
                    </FieldContainer>
                    <FieldContainer>
                        <FleidText>Contact us</FleidText>
                        <FleidText>give Expense arc Review</FleidText>
                        <FleidText>share Expense arc </FleidText>
                    </FieldContainer>
                    <FieldContainer>
                        <FleidText>App version</FleidText>
                        <FleidText>Terms of service</FleidText>
                        <FleidText>Privacy policy</FleidText>
                    </FieldContainer>
                </ScrollContainer>
            </Container>
        </AppContainer>
    );
};

export default Settings;
