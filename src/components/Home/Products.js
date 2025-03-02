import React, { useState, useEffect } from "react";
import "./assets/css/products.css"; 
import "./assets/css/main.css"; // Importowanie stylów

export default function Footer() {
    const [products, setProducts] = useState([]);  // Stan do przechowywania produktów
    const [loading, setLoading] = useState(true);  // Stan ładowania
    const [error, setError] = useState(null);      // Stan błędu

    useEffect(() => {
        // Ładowanie pliku JSON po załadowaniu komponentu
        fetch("/db/products.json") // Sprawdź ścieżkę pliku
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Błąd wczytywania pliku: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);  // Zakończenie ładowania
            })
            .catch(error => {
                setError(error.message);  // Ustawienie błędu
                setLoading(false);        // Zakończenie ładowania
                console.error("Błąd wczytywania danych:", error);
            });
    }, []); // Tylko przy pierwszym renderowaniu

    if (loading) {
        return <p>Ładowanie produktów...</p>;
    }

    if (error) {
        return <p>Wystąpił błąd: {error}</p>;
    }

    return (
        <section className="products">
            <h2>Nasze Produkty</h2>
            <div className="product-container">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <button>Kup teraz</button>
                        </div>
                    ))
                ) : (
                    <p>Brak produktów do wyświetlenia.</p>
                )}
            </div>
        </section>
    );
}
