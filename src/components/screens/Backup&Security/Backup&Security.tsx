import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';

import {BackButton, ToggleButton} from '@/root/src/components/shared/Button';
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
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'BackupAndSecurity'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const TextWithButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BackupAndSecurity: React.FC<Props> = ({navigation}) => {
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
                        <Text
                            mainText="Backup & Restore Transactions"
                            subText="Up to date"
                        />
                        <ToggleButton
                            isEnabled={isEnabled}
                            onClick={toggleSwitch}
                        />
                    </TextWithButton>
                    <Text
                        mainText="Delete backup"
                        subText="Delete backup from server"
                    />
                    <Text mainText="backup Receipt photos" subText="Never" />
                    <Text
                        mainText="Backup now"
                        subText="Request to backup immediately"
                    />
                </FieldContainer>
            </ScrollContainer>
        </Container>
    );
};
