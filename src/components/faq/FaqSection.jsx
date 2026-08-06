import FaqBackground from "./FaqBackground";
import FaqIntro from "./FaqIntro";
import FaqAccordion from "./FaqAccordion";
import FaqSupportCard from "./FaqSupportCard";
import FaqCTA from "./FaqCTA";

export default function FaqSection({ onOpenBooking }) {
  return (
    <section
      id="faq"
      className="faq-section relative min-h-[100svh] overflow-hidden bg-[#050505] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <FaqBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <FaqIntro />
        <FaqAccordion />
        <FaqSupportCard />
        <FaqCTA onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
