import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./assets/css/main.css"; // Importowanie stylów

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
