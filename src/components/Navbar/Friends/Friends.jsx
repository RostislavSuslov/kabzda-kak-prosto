import React from 'react';
import moduleCSS from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {
console.log(props)
    let friendsItem = props.state.friends.map(friend => <FriendsItem friendsName={friend.friendsName}/>)

    return (
        <div className={moduleCSS.friendsBlock}>
            <div className={moduleCSS.friends_title}>Friends</div>
            <div className={moduleCSS.friends_item}>
                {friendsItem}
            </div>
        </div>
    )
}

export default Friends;