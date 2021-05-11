import React from 'react';
import moduleCSS from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <UserPosts/>
        </div>
    )
}

export default Profile;