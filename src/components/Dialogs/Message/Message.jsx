import React from 'react';
import moduleCSS from './Message.module.css';


const Message = (props) => {
    return (
        <div className={moduleCSS.message}>{props.message}</div>
    )
}

export default Message;