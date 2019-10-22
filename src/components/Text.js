import React from 'react';

function Text(props) {
    var textClass = 'text';

    if (props.day) {
        textClass += ' text__day day';
    } else {
        textClass += ' text__night night';
    }

    return (
        <input type="text" className={textClass} value={props.text} onChange={props.changeText}/>
    );
}

export default Text;    