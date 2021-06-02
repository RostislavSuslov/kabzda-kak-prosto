import React from 'react';
import moduleCSS from './Navigation.module.css';
import {NavLink} from "react-router-dom";


const Navigation = (props) => {
    return (
        <nav className={moduleCSS.nav}>
            <NavLink to="/profile" activeClassName={moduleCSS.active} className={moduleCSS.navLink}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={moduleCSS.active} className={moduleCSS.navLink}>Massages</NavLink>
            <NavLink to="/news" activeClassName={moduleCSS.active} className={moduleCSS.navLink}>News</NavLink>
            <NavLink to="/music" activeClassName={moduleCSS.active} className={moduleCSS.navLink}>Music</NavLink>
            <NavLink to="/settings" activeClassName={moduleCSS.active} className={moduleCSS.navLink}>Settings</NavLink>
        </nav>

    )
}

export default Navigation;