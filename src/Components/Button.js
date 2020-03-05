import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    background: ${props => props.color};
    padding: 0.5rem 1.5rem;
    border: 2px solid black;
    display: inline-block;
`

const Button = ({ setSelectedElement, id, color }) => {
    return (
        <StyledButton
            id={id}
            color={color}
            onClick={(event) =>setSelectedElement(event.target.id)}
            >
            {id}
        </StyledButton>
    )
}

export default Button