import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./assets/css/main.css"; // Importowanie stylów
import HeroSection from "./components/Hero";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  );
}
