import Hero from "../components/Hero";
import PriceCalculator from "../components/PriceCalculator";
import Services from "../components/Services";
import PreviousWorkSlider from "../components/PreviousWorkSlider";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <PreviousWorkSlider limit={4} />
      <PriceCalculator />
      <Services />
      <TestimonialSlider />
    </>
  );
}
