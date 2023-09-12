import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

const OddajRzeczy = () => {
    return (
        <section className="container__giveaway">
            <div className="box__giveaway">
                <div className="giveaway__title--wrapper">
                <h2 className="giveaway__title">Wystarczą 4 proste kroki</h2>
                    </div>
                <img src={decoration} alt="Decoration"/>
                <div className="box__fourcolumns">
                    <div className="box__column">
                        <img src={icon1} alt="Icon-1"/>
                        <span>Wybierz rzeczy</span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="box__column">
                        <img src={icon2} alt="Ico-2"/>
                        <span>Spakuj je</span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="box__column">
                        <img src={icon3} alt="Icon3"/>
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="box__column">
                        <img src={icon4} alt="Icon4"/>
                        <span>Zamów kuriera</span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default OddajRzeczy;