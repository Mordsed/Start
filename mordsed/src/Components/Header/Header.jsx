import React from 'react';
import s from './Header.module.css'
import {NavLink, Redirect} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt={"logo"} src="https://global-smm.ru/storage/miniature/1530270714tdib5f6kNMzeZ7clTyStaGGX0FXzjQiB.jpeg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
                {!props.isAuth && <Redirect to={"/login"}/> }
            </div>
        </header>
    );
}

export default Header;