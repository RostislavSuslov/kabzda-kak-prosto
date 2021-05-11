 import React from 'react';
 import profile from './Post.module.css';

 const Post =(props)=> {

 return (
  
      <div id={props.id} className={`${profile.item} ${profile.active}`}>
          <div className="avatarBox">
              <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt=""/>
          </div>
          <div className="textBox">
            {props.message}
          </div>
          <button className="like">like </button><span>({props.like})</span>
      </div>
      // <div className={profile.item}>
      //   <img src="https://ireland.apollo.olxcdn.com/v1/files/lwjzg3hk5rfb2-UA/image;s=1000x700" alt=""/>
      //   </div>
      // <div className={profile.item}>
      //   <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg" alt=""/>
      // </div>
      // <div className={profile.item}>
      //   <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>
      // </div>
      // <div className={profile.item}>
      //   <img src="https://ava-24.com/_ph/98/563228947.jpg" alt=""/>
      // </div>
  
)};
 export default Post;