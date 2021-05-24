import React from 'react';
import moduleCSS from './FriendsItem.module.css';


const FriendsItem = (props) => {

    return (
        <div className={moduleCSS.friendsItem}>
            <div className={moduleCSS.imgBox}>
                <img src={props.img} className={moduleCSS.imgFluid} alt={props.friendsName}/>
            </div>
            {props.friendsName}
        </div>
    )
}

export default FriendsItem;