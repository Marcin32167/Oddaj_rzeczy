import React, {useEffect, useState} from 'react';
import decoration from "../assets/Decoration.svg";

const data = {
    "fundacje": [
        {
            "title": "Fundacja “Dbam o Zdrowie”",
            "subtitle": "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            "desc": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            "title": "Fundacja “Dla dzieci”",
            "subtitle": "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            "desc": "ubrania, meble, zabawki"
        },
        {
            "title": "Fundacja “Bez domu”",
            "subtitle": "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            "desc": "ubrania, jedzenie, ciepłe koce"
        },
        {
            "title": "Fundacja Bezdomnym",
            "subtitle": "Wsparcie dla osób bezdomnych",
            "desc": "Dążymy do tego, aby każda osoba bezdomna znalazła schronienie i wsparcie, które pozwoli jej wrócić do normalnego życia."
        },
        {
            "title": "Fundacja Dzieciom",
            "subtitle": "Pomoc dla potrzebujących dzieci",
            "desc": "Nasza fundacja działa na rzecz wsparcia dzieci w trudnej sytuacji życiowej. Organizujemy zbiórki, eventy i warsztaty dla najmłodszych."
        },
        {
            "title": "Fundacja Bezdomnym",
            "subtitle": "Wsparcie dla osób bezdomnych",
            "desc": "Dążymy do tego, aby każda osoba bezdomna znalazła schronienie i wsparcie, które pozwoli jej wrócić do normalnego życia."
        },
        {
            "title": "Fundacja Dzieciom",
            "subtitle": "Pomoc dla potrzebujących dzieci",
            "desc": "Nasza fundacja działa na rzecz wsparcia dzieci w trudnej sytuacji życiowej. Organizujemy zbiórki, eventy i warsztaty dla najmłodszych."
        },
        {
            "title": "Fundacja Bezdomnym",
            "subtitle": "Wsparcie dla osób bezdomnych",
            "desc": "Dążymy do tego, aby każda osoba bezdomna znalazła schronienie i wsparcie, które pozwoli jej wrócić do normalnego życia."
        }, {
            "title": "Fundacja Dzieciom",
            "subtitle": "Pomoc dla potrzebujących dzieci",
            "desc": "Nasza fundacja działa na rzecz wsparcia dzieci w trudnej sytuacji życiowej. Organizujemy zbiórki, eventy i warsztaty dla najmłodszych."
        }
    ],
    "organizacje": [
        {
            "title": "Organizacja Przyroda",
            "subtitle": "Ochrona środowiska naturalnego",
            "desc": "Zajmujemy się ochroną przyrody i edukacją ekologiczną. Pomagamy w utrzymaniu równowagi ekosystemów lokalnych."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        },
        {
            "title": "Organizacja Edukacja",
            "subtitle": "Wsparcie edukacyjne dla młodzieży",
            "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
        }
    ],
    "lokalne": [
        {
            "title": "Lokalna Inicjatywa Parkowa",
            "subtitle": "Zadbajmy o nasze zielone miejsca",
            "desc": "Działamy na rzecz zachowania i rozbudowy miejsc zielonych w naszym mieście. Organizujemy akcje sadzenia drzew i dbania o parki."
        },
        {
            "title": "Lokalne Centrum Kultury",
            "subtitle": "Szerzenie kultury w naszym regionie",
            "desc": "Promujemy lokalnych artystów i organizujemy wydarzenia kulturalne dla mieszkańców naszego miasta."
        },
        {
            "title": "Lokalne Centrum Kultury",
            "subtitle": "Szerzenie kultury w naszym regionie",
            "desc": "Promujemy lokalnych artystów i organizujemy wydarzenia kulturalne dla mieszkańców naszego miasta."
        }
    ]
}

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("fundacje");
    const [items, setItems] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPage(0)
        setItems(data[activeTab])
    }, [activeTab])
    const handleTabSelect = (index) => {
        setActiveTab(index);
    };

    const elements = items.slice(page * 3, page * 3 + 3)

    const tabs = [
        {id: "fundacje", title: "Fundacjom"},
        {id: "organizacje", title: "Organizacjom pozarządowym"},
        {id: "lokalne", title: "Lokalnym zbiórkom"},
    ]

    return (
        <section className="section__whowehelp">
            <div className="whowehelp__desc--wrapper">
                <div className="box__text--whowehelp">
                    <span className="title__whowehelp">Komu pomagamy?</span>
                    <img src={decoration} alt="Decoration"/>
                </div>
            </div>
            <div className="tabs">
                <div className="tab-titles">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-title ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabSelect(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    <p className="main__tab--desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                        z <br></br> którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują,<br></br> komu pomagają i czego potrzebują.</p>
                    <ul className="whowehelp__wrapper">
                        {elements.map((item, itemIndex) => (
                            <li className="list__whowehelp--wrapper" key={itemIndex}>
                                <div className="list__whowehelp--col1">
                                <p className="whoweare__title">{item.title}</p>
                                <p className="whoweare__subtitle">{item.subtitle}</p>
                                </div>
                                <div className="list__whowehelp--col2">
                                <p className="whowehelp__desc">{item.desc}</p>
                            </div>
                            </li>
                        ))}
                    </ul>
                    <div className="pagination__wrapper">
                        {new Array(Math.ceil(items.length / 3)).fill(null).map((_, i) => (
                            <button
                                key={i}
                                className={`tab-title pagination ${page === i ? 'active' : ''}`}
                                onClick={() => setPage(i)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabsComponent;
