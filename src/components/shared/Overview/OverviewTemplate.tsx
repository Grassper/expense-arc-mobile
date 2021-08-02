import React from 'react';
import styled from 'styled-components/native';

import {BackButton, OutlineAdd} from '@/root/src/components/shared/Button';
import {
    Container,
    HeadingContainer,
    ScrollContainer
} from '@/root/src/components/shared/Container';
import {Header} from '@/root/src/components/shared/Header';
import {HeadingText} from '@/root/src/components/shared/HeadingText';
import Colors from '@/root/src/constants/colors';

interface OverviewTemplateTypes {
    onClick?: () => void;
    heading: string;
    subHeading: string;
    children?: React.ReactNode;
}

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

export const OverviewTemplate: React.FC<OverviewTemplateTypes> = ({
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
