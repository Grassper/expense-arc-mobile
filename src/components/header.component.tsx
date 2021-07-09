import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    width: 100%;
`;

const Header: React.FC = ({children}) => {
    return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
