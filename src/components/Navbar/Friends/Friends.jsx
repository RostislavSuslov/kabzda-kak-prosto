import React from 'react';
import moduleCSS from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {

    let friendsItem = props.state.friends.map(friend => <FriendsItem img={friend.src} friendsName={friend.friendsName}/>)

    return (
        <div className={moduleCSS.friendsBlock}>
            <div className={moduleCSS.friends_title}>Friends</div>
            <div className={moduleCSS.friendsBox}>
                {friendsItem}
            </div>
        </div>
    )
}

export default Friends;