import React from 'react';
import moduleCSS from './Navbar.module.css';
import Navigation from './Navigation/Navigation';
import Friends from './Friends/Friends';


const Navbar = (props) => {
    return (
        <div className={moduleCSS.sidebar}>
            <Navigation/>
            <Friends state={props.state.sidebar.friendsName}/>
        </div>
    )
}

export default Navbar;