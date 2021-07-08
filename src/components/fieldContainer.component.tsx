import React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

const StyledFieldContainer = styled.View`
    background-color: ${Colors.darkGray};
    width: 100%;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 20px;
`;

const FieldContainer: React.FC = ({children}) => {
    return <StyledFieldContainer>{children}</StyledFieldContainer>;
};

export default FieldContainer;
