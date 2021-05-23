import React from 'react';
import moduleCSS from './Friends.module.css';
import ItemFriend from "./ItemFriend/ItemFriend";




const Friends = (props) => {

    let creatFriends =  props.state.sidebar.friends.friendsName.map(friends => <ItemFriend friendsName={friends.friendsName} />)

    return (
        <div className={moduleCSS.friendsBlock}>
            <h4>Friends</h4>
            <nav>
                {creatFriends}
            </nav>
        </div>

    )
}

export default Friends;