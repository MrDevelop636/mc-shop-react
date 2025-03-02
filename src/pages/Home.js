import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Products from "../components/Home/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}
