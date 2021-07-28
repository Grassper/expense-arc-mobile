import styled from 'styled-components/native';

import Colors from '../constants/colors.constant';

interface HeadingTextTypes {
    size?: number;
}

const HeadingText = styled.Text<HeadingTextTypes>`
    font-family: 'rr';
    font-size: ${props => (props.size ? `${props.size}px` : '26px')};
    text-transform: capitalize;
    color: ${Colors.white};
`;

export default HeadingText;
