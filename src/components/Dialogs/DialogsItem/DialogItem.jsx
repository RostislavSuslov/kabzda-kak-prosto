import React from 'react';
import moduleCSS from './DialogItem.module.css';

import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={moduleCSS.dialogItem}>
            <NavLink className={moduleCSS.dialogItemLink} to={"/dialogs/" + props.id}>
                <div className={moduleCSS.dialogItemImgBox}>
                    <img src={props.src} className={moduleCSS.dialogItemImg}/>
                </div> {props.name}
            </NavLink>
        </div>
    )
}


export default DialogItem;