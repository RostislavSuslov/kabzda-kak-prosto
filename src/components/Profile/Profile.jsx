import React from 'react';
import moduleCSS from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;