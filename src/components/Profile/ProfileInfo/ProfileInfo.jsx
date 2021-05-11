import React from 'react';
import moduleCSS from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={moduleCSS.userInformation}>
            <div className={moduleCSS.backgroundLine}>
                <img src="https://jessebumstead.files.wordpress.com/2014/04/cropped-concert-stage-blue-smoke2.jpg"
                     className={moduleCSS.backgroundLine__img}/>
            </div>
            <div className={moduleCSS.avaBox}>
                <img src="https://cdn1.flamp.ru/255ec0a1ad3ef084a2a5b888b47dc38d.jpg" className={moduleCSS.avaBox__img}/>
            </div>
            <div className={moduleCSS.subtitle}>
                Amathing Bastard!)
            </div>
            <div className={moduleCSS.description}>
                description lorem10 description lorem10 description lorem10 description lorem10 description lorem10
                description
                lorem10
            </div>
        </div>
    )
}
export default ProfileInfo;