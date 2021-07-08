import React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const Wrapper = styled.View`
    background-color: ${Colors.background};
    flex: 1;
    align-items: center;
`;

const AppContainer = styled.View`
    flex: 1;
    align-items: center;
    width: 90%;
`;

const Container: React.FC = ({children}) => {
    return (
        <Wrapper>
            <AppContainer>{children}</AppContainer>
        </Wrapper>
    );
};

export default Container;
