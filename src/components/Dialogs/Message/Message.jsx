import React from 'react';
import moduleCSS from './Mesage.module.css';


const Message = (props) => {
    return (
        <div className={moduleCSS.dialog}>{props.message}</div>
    )
}

export default Message;