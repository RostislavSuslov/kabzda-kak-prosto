import React from 'react';
import moduleCSS from './CircleDisplay.module.css';
import {NavLink} from "react-router-dom";


const CircleDisplay = (props) => {
    return (
        <NavLink to="/dialogs" id="sha_temp_body" className={moduleCSS.shaTempBody}>
                <span className={moduleCSS.shaTemp}>
                    <span className={moduleCSS.shaTemp__infoBox}>
                         <span className={moduleCSS.shaTemp__infoBox_data}> 16</span>
                         <span className={moduleCSS.shaTemp__infoBox_info}>Messages</span>
                    </span>
                </span>
        </NavLink>
    )
}

export default CircleDisplay;