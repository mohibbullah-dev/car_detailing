import WhyChooseBackground from "./WhyChooseBackground";
import WhyChooseIntro from "./WhyChooseIntro";
import WhyChooseCards from "./WhyChooseCards";
import WhyChooseStatsBar from "./WhyChooseStatsBar";

export default function WhyChooseSection({ onOpenBooking }) {
  return (
    <section
      id="why-us"
      className="why-choose-section relative overflow-hidden bg-[#070707] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="why-choose-heading"
    >
      <WhyChooseBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <WhyChooseIntro />
        <WhyChooseCards />
        <WhyChooseStatsBar onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
