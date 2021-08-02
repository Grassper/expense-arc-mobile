import styled from 'styled-components/native';

import Colors from '@/root/src/constants/colors.constant';

interface HeadingTextTypes {
    size?: number;
}

export const HeadingText = styled.Text<HeadingTextTypes>`
    font-family: 'rr';
    font-size: ${props => (props.size ? `${props.size}px` : '26px')};
    text-transform: capitalize;
    color: ${Colors.white};
`;
