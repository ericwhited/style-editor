import React, {useState} from 'react';
import styled from 'styled-components';

import Color from './Color'

const StyledEditor = styled.div`
    height: 80vh;
    width: 300px;
    border: 2px solid black;
    position: absolute;
    right: 0;
`

const colors = ['red', 'orange', 'yellow', 'darkgreen', 'green', 'blue', 'turquoise', 'purple', 'lightpurple'];

const Editor = () => {
    // const [selectedColor, setSelectedColo] = useState('white')
    return (
        <StyledEditor>
            {
                colors.map(color => <Color color={color} onClick={setSelectedColo} />)
            }
        </StyledEditor>
    )
}

export default Editor