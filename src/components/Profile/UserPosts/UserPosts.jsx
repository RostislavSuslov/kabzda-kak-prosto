import React from 'react';
import Post from './Post/Post';
import profile from './UserPosts.module.css';

const UserPosts = () => {
    let postsData = [
        {id: 1, message: 'How are you?', likesCount: 3},
        {id: 2, message: 'This is my first post', likesCount: 421},
        {id: 3, message: 'Идите в жопу нигеры!!!', likesCount: 100500},
        {id: 4, message: 'new post', likesCount: 5},
        {id: 5, message: 'gotta go!', likesCount: 541},
        {id: 6, message: 'Good morning!', likesCount: 77},
        {id: 7, message: 'С возвращением!!!', likesCount: 123},
    ]
    let postElements = postsData.map(post => <Post id={post.id} message={post.message} like={post.likesCount}/>)
    return (
        <div className={profile.postContainer}>
            my posts
            <textarea></textarea>
            <button>Add post</button>
            <div className={profile.newPost}>
                {postElements}
            </div>
        </div>
    )
};
export default UserPosts;