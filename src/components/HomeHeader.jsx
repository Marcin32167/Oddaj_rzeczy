import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink
import { useLocation } from "react-router-dom"; // Import useLocation
import '../scss/main.scss';

const HomeHeader = () => {
    const location = useLocation(); // Pobierz aktywną ścieżkę

    return (
        <header className="container header__container">
            <nav className="navbar">
                <ul className="menu__login">
                    <li className="nav__item--login">
                        <Link to="/logowanie" className="login__btn">Zaloguj</Link>
                    </li>
                    <li className="nav__item--register">
                        <Link to="/rejestracja" className="register__btn">Załóż konto</Link>
                    </li>
                </ul>
                <ul className="menu__home">
                    <MenuItemLink title="Start" to="/" isActive={location.pathname === "/"} />
                    <MenuItemScrollLink title="O co chodzi?" to="o-co-chodzi" />
                    <MenuItemScrollLink title="O nas" to="o-nas" />
                    <MenuItemScrollLink title="Fundacja i organizacje" to="fundacja-i-organizacje" />
                    <MenuItemScrollLink title="Kontakt" to="contact" />
                </ul>
            </nav>
        </header>
    );
};

const MenuItemLink = ({ title, to, isActive }) => {
    return (
        <li className={`nav__item ${isActive ? "active" : ""}`}>
            <Link to={to}>{title}</Link>
        </li>
    );
};

const MenuItemScrollLink = ({ title, to }) => {
    return (
        <li className="nav__item">
            <ScrollLink to={to} smooth={true} duration={500}>{title}</ScrollLink>
        </li>
    );
};

export default HomeHeader;
