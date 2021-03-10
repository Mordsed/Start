import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to = {path} >
                <img src="https://avatars.mds.yandex.net/get-zen_doc/1652143/pub_5d78c570118d7f00ae30bacd_5d78d31e78125e00ad8d25d4/scale_1200"/>
                    {props.name} </NavLink>
        </div>
    );
}

export default DialogItem;