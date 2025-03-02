import { useState, useEffect } from "react";
import HeroButton from "./HeroButton";
import "./assets/css/hero.css";
import "./assets/css/main.css"; // Importowanie stylów

const HeroSection = () => {
  const [titleText, setTitleText] = useState("Tytuł sekcji");
  const [subtitleText, setSubtitleText] = useState("Podtytuł sekcji");

  useEffect(() => {
    // Pobranie pliku JSON z public/conf/hero/config.json
    fetch("/conf/About/hero/config.json")
      .then((response) => {
        if (!response.ok) {
          // Jeśli odpowiedź nie jest poprawna, wyrzucamy błąd
          throw new Error("Nie udało się załadować pliku JSON");
        }
        return response.json();  // Przekształcamy odpowiedź na JSON
      })
      .then((data) => {
        // Logowanie danych z pliku JSON
        console.log("Załadowane dane:", data);

        // Wyszukiwanie sekcji tytułu
        const titleSection = data.find((item) => item["section-id"] === "hero-title");
        const subtitleSection = data.find((item) => item["section-id"] === "hero-subtitle");

        // Ustawianie wartości z pliku JSON
        if (titleSection) {
          setTitleText(titleSection.text || "Tytuł sekcji");
        }
        if (subtitleSection) {
          setSubtitleText(subtitleSection.text || "Podtytuł sekcji");
        }
      })
      .catch((error) => {
        // Obsługa błędów
        console.error("Błąd ładowania pliku JSON:", error);
      });
  }, []);  // Tylko raz, przy pierwszym renderowaniu

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{titleText}</h1>
        <p className="hero-subtitle">{subtitleText}</p>
        <HeroButton />
      </div>
    </section>
  );
};

export default HeroSection;
