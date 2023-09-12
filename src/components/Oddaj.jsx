import React from "react";
import {Link} from "react-router-dom";

const Oddaj = () => {
    return (
        <section className="container container__giveaway">
            <ButtonLink to="/logowanie" label={<span className="break-word">Oddaj<br />rzeczy</span>} />
        </section>
    )
}

const ButtonLink = ({ to, label }) => {
    return (
        <button className="main__btn">
            <Link to={to}>{label}</Link>
        </button>
    );
};
export default Oddaj;