import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 8em;
    font-family: monospace;
    max-width: 90%;
    border: 0px;
    text-align: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
`

function Text(props) {
    return (
        <Input type="text" value={props.text} onChange={props.changeText}/>
    );
}

export default Text;
