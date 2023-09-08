import React from "react";
import { Link } from "react-router-dom";
import '../scss/main.scss';

const HomeHeader = () => {
    return (
        <header className="container header__container">
            <nav className="navbar">
                <ul className="menu menu__login">
                    <li className="nav__item--login">
                        <Link to="/logowanie" className="login__btn">Zaloguj</Link>
                    </li>
                    <li className="nav__item--register">
                        <Link to="/rejestracja" className="register__btn">Załóż konto</Link>
                    </li>
                </ul>
                <ul className="menu menu__home">
                    <MenuItemLink title="Start" to="/" />
                    <MenuItemLink title="O co chodzi?" to="/o-co-chodzi" />
                    <MenuItemLink title="O nas" to="/o-nas" />
                    <MenuItemLink
                        title="Fundacja i organizacje"
                        to="/fundacja-i-organizacje"
                    />
                    <MenuItemLink title="Kontakt" to="/kontakt" />
                </ul>
            </nav>
        </header>
    );
};

const MenuItemLink = ({ title, to }) => {
    return (
        <li className="nav__item">
            <Link to={to}>{title}</Link>
        </li>
    );
};

export default HomeHeader;
