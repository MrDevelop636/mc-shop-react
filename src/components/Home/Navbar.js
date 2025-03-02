import React, { useState, useEffect } from "react";
import "./assets/css/nav.css";
import "./assets/css/main.css"; // Importowanie stylów

export default function Navbar() {
  const [menuData, setMenuData] = useState({ logo: "Moje Logo", menu: [] });
  const [loading, setLoading] = useState(true);  // Stan ładowania danych
  const [error, setError] = useState(null);      // Stan błędu

  useEffect(() => {
    // Ładowanie pliku JSON
    fetch("/conf/Home/nav/config.json") // Sprawdź, czy plik jest w folderze public/core/config
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Błąd wczytywania pliku: ${response.statusText}`);
        }
        return response.json();  // Parsowanie odpowiedzi na JSON
      })
      .then((data) => {
        console.log("Załadowane dane:", data); // Logowanie wczytanych danych JSON
        setMenuData(data);  // Ustawienie stanu na wczytane dane
        setLoading(false);   // Zakończenie ładowania
      })
      .catch((error) => {
        setError(error.message);  // Ustawienie komunikatu o błędzie
        setLoading(false);        // Zakończenie ładowania
        console.error("Błąd ładowania danych:", error);  // Szczegółowe logowanie błędu
      });
  }, []);  // Tylko raz przy pierwszym renderowaniu komponentu

  if (loading) {
    return <p>Ładowanie menu...</p>;
  }

  if (error) {
    return <p>Wystąpił błąd: {error}</p>;
  }

  return (
    <nav className="nav">
      <div className="logo">{menuData.logo}</div>
      <ul className="menu">
        {menuData.menu.length > 0 ? (
          menuData.menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))
        ) : (
          <p>Brak elementów menu.</p>
        )}
      </ul>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}
