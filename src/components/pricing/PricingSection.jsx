import PricingBackground from "./PricingBackground";
import PricingIntro from "./PricingIntro";
import PricingPlans, { PricingBottomBar } from "./PricingPlans";

export default function PricingSection({ onOpenBooking }) {
  return (
    <section
      id="pricing"
      className="pricing-section relative overflow-hidden bg-[#070707] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="pricing-heading"
    >
      <PricingBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <PricingIntro />
        <PricingPlans />
        <PricingBottomBar onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
