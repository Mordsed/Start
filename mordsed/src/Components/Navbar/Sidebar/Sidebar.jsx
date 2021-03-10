import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <div className={s.item}>
                <img src={props.img}/>
                {props.name}
            </div>
        </div>
    )
}
export default Sidebar;