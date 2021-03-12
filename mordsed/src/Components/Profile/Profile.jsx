import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo status={props.status} profile={props.profile} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;