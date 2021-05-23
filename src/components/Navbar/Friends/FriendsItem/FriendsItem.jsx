import React from 'react';
import moduleCSS from './FriendsItem.module.css';


const FriendsItem = (props) => {

    return (
        <div>
            {props.friendsName}
        </div>
    )
}

export default FriendsItem;