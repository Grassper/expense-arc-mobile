import React from 'react';
import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors';

interface PropsTypes {
    backgroundColor?: string;
    children: React.ReactNode;
}

interface WrapperTypes {
    backgroundColor: string;
}

const Wrapper = styled.View<WrapperTypes>`
    background-color: ${props => props.backgroundColor};
    flex: 1;
    align-items: center;
`;

const AppContainer = styled.View`
    flex: 1;
    align-items: center;
    width: 90%;
`;

export const Container: React.FC<PropsTypes> = ({
    backgroundColor,
    children
}) => {
    return (
        <Wrapper backgroundColor={backgroundColor || Colors.background}>
            <AppContainer>{children}</AppContainer>
        </Wrapper>
    );
};
