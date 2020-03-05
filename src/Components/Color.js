import React from 'react';
import styled, {css} from 'styled-components'

const StyledColor = styled.div`
    background: ${props => props.color};
    height: 35px;
    width: 35px;
    border-radius: 5px;
`

const Color = ({ color }) => {
    return (
        <StyledColor color={color} />
    )
}

export default Color;