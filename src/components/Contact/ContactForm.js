import "./assets/css/contactForm.css";
import "./assets/css/main.css"; // Importowanie stylów

export default function ContactForm() {
    return (
        <div className="contact-form-container">
            <h2>Skontaktuj się z nami</h2>
            <form className="contact-form">
                <div className="input-group">
                    <label htmlFor="name">Imię i Nazwisko</label>
                    <input type="text" id="name" name="name" placeholder="Wpisz swoje imię i nazwisko" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Adres e-mail</label>
                    <input type="email" id="email" name="email" placeholder="Wpisz swój e-mail" required />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Wiadomość</label>
                    <textarea id="message" name="message" placeholder="Wpisz swoją wiadomość" required></textarea>
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}
