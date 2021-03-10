import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';


const Navbar = (props) => {
    let state = props.sidebarPage
    let sidebarElement = state.sidebar.map(p => <Sidebar name={p.name} id={p.id} img={p.img}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    Message
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>
                    Settings
                </NavLink>
            </div>
            <div className={s.item}>
                <p>Friends</p>
                <div className={s.friends}>
                    {sidebarElement}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;