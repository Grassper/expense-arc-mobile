// importing icons
import {AntDesign} from '@expo/vector-icons';
import React from 'react';

// importing Colors
import Colors from '../../constants/colors.constant';
import TextContainer from './fieldText.component';
// importing styled components
import {
    AppContainer,
    CloudContainer,
    CloudText,
    Container,
    FieldContainer,
    ScrollContainer
} from './settings.styles';

const Settings: React.FC = () => {
    return (
        <AppContainer>
            <Container>
                <CloudContainer>
                    <AntDesign name="cloud" size={24} color={Colors.white} />
                    <CloudText>Enable Cloud Backup</CloudText>
                </CloudContainer>
                <ScrollContainer>
                    <FieldContainer>
                        <TextContainer content="Account" onClick={() => {}} />
                        <TextContainer content="Expense preference" />
                        <TextContainer content="backup & security" />
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
