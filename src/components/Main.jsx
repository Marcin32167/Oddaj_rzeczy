import { Link } from "react-router-dom";
import React from "react";
import decorationImage from '../assets/decoration.svg';
import homeHeroImage from '../assets/Home-Hero-Image.jpg'

const Main = () => {
    return (
        <section className="hero__section">
            <div className="img__wrapper">
                <img src={homeHeroImage} alt="Standard" className="image-box" />
            </div>
            <div className="hero__box">
                <h1 className="hero__title">
                    Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={decorationImage} alt="Signature" className="img__signature" />
                <div className="hero__btn">
                    <ButtonLink to="/logowanie" label={<span className="break-word">Oddaj<br />rzeczy</span>} />
                    <ButtonLink to="/logowanie" label={<span className="break-word">Zorganizuj<br />zbiórkę</span>} />
                </div>

            </div>
        </section>
    );
}

const ButtonLink = ({ to, label }) => {
    return (
        <button className="hero__main--btn">
            <Link to={to}>{label}</Link>
        </button>
    );
};

export default Main;
