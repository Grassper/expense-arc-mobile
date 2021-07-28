import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';

import BackButton from '@/root/src/components/backButton.component';
import Container from '@/root/src/components/container.component';
import FieldContainer from '@/root/src/components/fieldContainer.component';
import FieldText from '@/root/src/components/fieldText.component';
import TextWithButton from '@/root/src/components/fieldTextWithButton.component';
import Header from '@/root/src/components/header.component';
import HeadingContainer from '@/root/src/components/headingContainer.component';
import HeadingText from '@/root/src/components/headingText.component';
import ScrollContainer from '@/root/src/components/scrollContainer.component';
import ToggleButton from '@/root/src/components/toggle.component';

type RootStackParamList = {
    Preference: undefined;
    Account: undefined;
    Settings: undefined;
    BackupAndSecurity: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'BackupAndSecurity'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const BackupAndSecurity: React.FC<Props> = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (): void =>
        setIsEnabled(previousState => !previousState);
    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigation.goBack()} />
            </Header>
            <HeadingContainer header>
                <HeadingText>Backup & Security</HeadingText>
            </HeadingContainer>
            <ScrollContainer>
                <FieldContainer>
                    <TextWithButton>
                        <FieldText
                            mainText="Backup & Restore Transactions"
                            subText="Up to date"
                        />
                        <ToggleButton
                            isEnabled={isEnabled}
                            onClick={toggleSwitch}
                        />
                    </TextWithButton>
                    <FieldText
                        mainText="Delete backup"
                        subText="Delete backup from server"
                    />
                    <FieldText
                        mainText="backup Receipt photos"
                        subText="Never"
                    />
                    <FieldText
                        mainText="Backup now"
                        subText="Request to backup immediately"
                    />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default BackupAndSecurity;
