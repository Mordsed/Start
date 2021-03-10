import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div></div>
            <img src="https://global-smm.ru/storage/miniature/1530270714tdib5f6kNMzeZ7clTyStaGGX0FXzjQiB.jpeg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;