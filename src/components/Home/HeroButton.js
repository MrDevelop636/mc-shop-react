import { useState, useEffect } from "react";
import "./assets/css/hero.css";  // Zakładając, że masz odpowiedni plik CSS
import "./assets/css/main.css"; // Importowanie stylów

const HeroButton = () => {
  const [buttonText, setButtonText] = useState("");
  const [buttonHref, setButtonHref] = useState("");

  useEffect(() => {
    // Pobranie pliku JSON z public/conf/hero/config.json
    fetch("/conf/hero/config.json")
      .then((response) => {
        if (!response.ok) {
          // Jeśli odpowiedź nie jest poprawna, wyrzucamy błąd
          throw new Error("Nie udało się załadować pliku JSON");
        }
        return response.json();  // Przekształcamy odpowiedź na JSON
      })
      .then((data) => {
        // Logowanie danych z pliku JSON
        console.log("Data loaded:", data);

        // Wyszukiwanie sekcji o id "hero-button"
        const section = data.find((item) => item["section-id"] === "hero-button");

        if (section) {
          // Ustawianie wartości z pliku JSON
          setButtonText(section.text);
          setButtonHref(section.href);
        }
      })
      .catch((error) => {
        // Obsługa błędów
        console.error("Błąd ładowania pliku JSON:", error);
      });
  }, []);  // Tylko raz, przy pierwszym renderowaniu

  return (
    <a href={buttonHref} className="hero-button-link">
      <button className="hero-button">{buttonText}</button>
    </a>
  );
};

export default HeroButton;
