import styled from 'styled-components/native';

interface HeadingContainerTypes {
    header?: boolean;
}

const HeadingContainer = styled.View<HeadingContainerTypes>`
    width: 100%;
    margin: ${props => (props.header ? '0px 0px 20px' : '20px')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default HeadingContainer;
