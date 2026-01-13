import Header from "./components/Header";
import Hero from "./components/Hero";
import PriceCalculator from "./components/PriceCalculator";
import Services from "./components/Services";
import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <PriceCalculator />
        <Services />
        <TestimonialSlider />
      </main>
      <Footer />
    </div>
  );
}
