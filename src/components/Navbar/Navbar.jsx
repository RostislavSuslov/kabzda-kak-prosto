import React from 'react';
import moduleCSS from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={moduleCSS.nav}>
            <NavLink to="/profile" activeClassName={moduleCSS.show} className={moduleCSS.navLink}>Profile</NavLink>
            <NavLink to="/dialogs" className={moduleCSS.navLink}>Massages</NavLink>
            <NavLink to="/news" className={moduleCSS.navLink}>News</NavLink>
            <NavLink to="/music" className={moduleCSS.navLink}>Music</NavLink>
            <NavLink to="/settings" className={moduleCSS.navLink}>Settings</NavLink>
        </nav>
    )
}

export default Navbar;