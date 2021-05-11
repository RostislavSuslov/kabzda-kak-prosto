import React from 'react';
import moduleCSS from './DialogItem.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={moduleCSS.dialog + ' ' + moduleCSS.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;