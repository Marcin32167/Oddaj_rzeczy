import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <header className="container header__container">
            <nav>
                <ul className="menu menu__login">
                    <li>
                        <Link to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/rejestracja">Załóż konto</Link>
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
            <div className="hero__box">
                <p>
                    Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                </p>
                <div className="hero__btn">
                    <ButtonLink to="/logowanie" label="Oddaj rzeczy" />
                    <ButtonLink to="/logowanie" label="Zorganizuj zbiórkę" />
                </div>
            </div>
        </header>
    );
};

const MenuItemLink = ({ title, to }) => {
    return (
        <li>
            <Link to={to}>{title}</Link>
        </li>
    );
};

const ButtonLink = ({ to, label }) => {
    return (
        <button>
            <Link to={to}>{label}</Link>
        </button>
    );
};

export default HomeHeader;
