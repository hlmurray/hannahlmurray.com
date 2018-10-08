import styled from 'styled-components'
import FlexContainer from 'react-styled-flexbox'

export const Flex = FlexContainer.extend`
    margin-left: -20px;
    flex-flow: wrap;
`

export const FlexCenter = Flex.extend`
    justify-content: center;
`;

export const FlexChild = styled.div`
    width: 100%;
    padding-left: 20px;
    margin-bottom: 20px;
`;

export const FlexHalf = FlexChild.extend`
    width: 50%;
`
