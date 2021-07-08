import React from 'react';

import Container from '../../components/container.component';
import FieldContainer from '../../components/fieldContainer.component';
import FieldText from '../../components/fieldText.component';
import {HeadingContainer, HeadingText} from '../settings/settings.styles';

const Preference: React.FC = () => {
    return (
        <Container>
            <HeadingContainer>
                <HeadingText>Preference</HeadingText>
            </HeadingContainer>
            <FieldContainer>
                <FieldText mainText="Accounts" subText="Manage accounts" />
                <FieldText
                    mainText="Notifications"
                    subText="Manage summary alerts"
                />
                <FieldText
                    mainText="Bill Reminders"
                    subText="2 days before and on due date"
                />
                <FieldText
                    mainText="Categories"
                    subText="Create and delete categories"
                />
            </FieldContainer>
        </Container>
    );
};

export default Preference;
