import decoration from "../assets/Decoration.svg"

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            message: "pawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelpawelmessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessage",
            email: "dupa@dupa.pl",
            name: "pawel"
        }

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <section className="section__contact" id="contact">
            <div className="contact__form">
                <div className="contact__form--wrapper">
                    <h3 className="contact__title">Skontaktuj się z nami</h3>
                    <div className="contact__form--holder">
                        <div className="contact__decoration--wrapper">
                            <img className="contact__decoration" src={decoration} alt="Decoration"/>
                        </div>
                        <div className="name__email--Wrapper">
                            <div className="form__name">
                                <label className="label-form" htmlFor="name">Wpisz swoje imię</label>
                                <input className="form__input--name" type="text" placeholder="Krzysztof" id="name"/>
                            </div>
                            <div className="form__email">
                                <label className="label-form" htmlFor="email">Wpisz swój email</label>
                                <input className="form__input--email" placeholder="abc@xyz.pl" type="email" id="email"/>
                            </div>
                        </div>
                        <div className="form__message">
                            <label className="label-form" htmlFor="message">Wpisz swoja wiadomość</label>
                            <textarea className="form__textarea"
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      name="messege" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form__btn--wrapper">
                            <button onClick={handleSubmit} className="form__btn">Wyślij</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;