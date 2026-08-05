import { motion } from "framer-motion";
import PortfolioStats from "./PortfolioStats";

export default function PortfolioIntro() {
  return (
    <header className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
      {/* Left — headline */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-6"
      >
        <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E10600]">
          <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
          Our Portfolio
        </p>

        <h1 className="font-hero-display uppercase leading-[0.9] tracking-[-0.02em] text-white">
          <span className="block text-[clamp(2.5rem,5.5vw,5rem)]">
            Built on Passion.
          </span>
          <span className="mt-1 block text-[clamp(2.5rem,5.5vw,5rem)] text-[#E10600]">
            Driven by Results.
          </span>
        </h1>

        <p className="mt-7 max-w-[600px] text-[15px] leading-[1.75] text-zinc-500 sm:text-base lg:mt-8">
          Explore some of our recent detailing transformations. Every vehicle.
          Every detail. Flawless finish.
        </p>
      </motion.div>

      {/* Right — stats */}
      <div className="lg:col-span-6 lg:pt-2">
        <PortfolioStats />
      </div>
    </header>
  );
}
