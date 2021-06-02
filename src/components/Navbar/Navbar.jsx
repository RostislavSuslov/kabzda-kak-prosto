import React from 'react';
import moduleCSS from './Navbar.module.css';
import Navigation from './Navigation/Navigation';
import Friends from "./Friends/Friends";
import CircleDisplay from "./CircleDisplay/CircleDisplay";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    return (
        <div className={moduleCSS.sidebar}>
            <CircleDisplay/>
            <Navigation/>
            <Friends state={props.state}/>
        </div>
    )
}

export default Navbar;