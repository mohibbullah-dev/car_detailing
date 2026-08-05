import { motion } from "framer-motion";
import { useBusiness } from "../context/SiteContentContext";
import { usePortfolioList } from "../hooks/usePortfolio";
import HeroBackground from "./hero/HeroBackground";
import HeroStatsBar from "./hero/HeroStatsBar";
import HeroBeforeAfterSlider from "./hero/HeroBeforeAfterSlider";
import HeroActions from "./hero/HeroActions";

export default function Hero() {
  const business = useBusiness();
  const { data: portfolio } = usePortfolioList();
  const featured = portfolio?.[0];

  return (
    <section
      className="hero-section relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left — 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E10600]"
            >
              <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
              Our Work
            </motion.p>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-hero-display uppercase leading-[0.88] tracking-[-0.02em] text-white"
            >
              <span className="block text-[clamp(2.75rem,6.5vw,5.75rem)]">
                Real Transformations.
              </span>
              <span className="mt-1 block text-[clamp(2.75rem,6.5vw,5.75rem)] text-[#E10600]">
                Lasting Impressions.
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-[600px] text-[15px] leading-[1.75] text-zinc-500 sm:text-base lg:mt-8"
            >
              Every detail tells a story. See the results of our precision,
              passion and commitment to perfection across{" "}
              <span className="font-medium text-zinc-300">{business.city}</span>
              .
            </motion.p>

            {/* Stats glass card */}
            <div className="mt-9 lg:mt-10">
              <HeroStatsBar />
            </div>

            {/* CTAs */}
            <div className="mt-9 lg:mt-10">
              <HeroActions />
            </div>
          </motion.div>

          {/* Right — 6 columns */}
          <div className="lg:col-span-6">
            <HeroBeforeAfterSlider
              beforeUrl={featured?.beforeUrl}
              afterUrl={featured?.afterUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
