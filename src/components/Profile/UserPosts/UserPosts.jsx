import React from 'react';
import Post from './Post/Post';
import profile from './UserPosts.module.css';

const UserPosts = (props) => {

    let postElements = props.postsData.map(post => <Post id={post.id} message={post.message} like={post.likesCount}/>)
    let newPostElement = React.createRef();


    /*этот addPost, это локальная ф-я, а не та что находится в state.js, но мы в ней вызываем тот addPost из index.js*/
    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
         // input.oninput
        newPostElement.current.value= '';
    }

    return (
        <div className={profile.postContainer}>
            my posts
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addPost }>Add post</button>
            <div className={profile.newPost}>
                {postElements}
            </div>
        </div>
    )
};
export default UserPosts;