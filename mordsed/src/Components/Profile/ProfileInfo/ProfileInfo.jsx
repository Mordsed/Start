import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Loader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img className={s.bigPhoto}
                     src="https://img5.goodfon.ru/original/3200x1200/e/e2/tigr-belyi-brevna-chernyi-fon.jpg"/>*/}
            </div>
            <div className={s.description}>
                <div><img alt={"Ava"} src={props.profile.photos.large}/></div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div className={s.about}>
                    <div>Name: {props.profile.fullName}</div>
                    <div>Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Не указан"} </div>
                    <div>Website: {props.profile.contacts.website ? props.profile.contacts.website : "Не указан"}</div>
                    <div>Vk: {props.profile.contacts.vk ? props.profile.contacts.vk : "Не указан"}</div>
                    <div>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Не указан"}</div>
                    <div>Instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Не указан"}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;