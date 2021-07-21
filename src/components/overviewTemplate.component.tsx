import React from 'react';
import styled from 'styled-components/native';

import BackButton from '@/root/src/components/backButton.component';
import Container from '@/root/src/components/container.component';
import Header from '@/root/src/components/header.component';
import HeadingContainer from '@/root/src/components/headingContainer.component';
import HeadingText from '@/root/src/components/headingText.component';
import OutlineAdd from '@/root/src/components/outlineAdd.component';
import ScrollContainer from '@/root/src/components/scrollContainer.component';
import Colors from '@/root/src/constants/colors.constant';

const SubHeading = styled.Text`
    font-family: 'mr';
    font-size: 16px;
    line-height: 28px;
    margin-top: -5px;
    margin-bottom: 20px;
    text-transform: capitalize;
    color: ${Colors.white};
`;

const HeadingWrapper = styled.View`
    width: 100%;
`;

interface OverviewTemplateTypes {
    onClick?: () => void;
    heading: string;
    subHeading: string;
    children?: React.ReactNode;
}

const OverviewTemplate: React.FC<OverviewTemplateTypes> = ({
    onClick,
    heading,
    subHeading,
    children
}) => {
    return (
        <Container>
            <Header>
                <BackButton onClick={onClick} />
                <OutlineAdd />
            </Header>
            <HeadingWrapper>
                <HeadingContainer header>
                    <HeadingText>{heading}</HeadingText>
                </HeadingContainer>
                <SubHeading>{subHeading}</SubHeading>
            </HeadingWrapper>
            <ScrollContainer>{children}</ScrollContainer>
        </Container>
    );
};

export default OverviewTemplate;
