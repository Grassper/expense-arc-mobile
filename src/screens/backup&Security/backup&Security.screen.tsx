import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';

import BackButton from '../../components/backButton.component';
import Container from '../../components/container.component';
import FieldContainer from '../../components/fieldContainer.component';
import FieldText from '../../components/fieldText.component';
import Header from '../../components/header.component';
import ToggleButton from '../../components/toggle.component';
import {
    HeadingContainer,
    HeadingText,
    ScrollContainer
} from '../settings/settings.styles';
import {FieldTextWithButton} from './backup&Security.styles';

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
                    <FieldTextWithButton>
                        <FieldText
                            mainText="Backup & Restore Transactions"
                            subText="Up to date"
                        />
                        <ToggleButton
                            isEnabled={isEnabled}
                            onClick={toggleSwitch}
                        />
                    </FieldTextWithButton>
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
                        subText="Request to backup immediatly"
                    />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};

export default BackupAndSecurity;
