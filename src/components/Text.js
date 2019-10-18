import React from 'react';

function Text(props) {
    var textClass = 'text';

    if (props.day) {
        textClass += ' text__day day';
    } else {
        textClass += ' text__night night';
    }

    return (
        <h1 className={textClass}>{props.text}</h1>
    );
}

export default Text;