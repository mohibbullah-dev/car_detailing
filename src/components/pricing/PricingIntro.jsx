import { motion } from "framer-motion";

export default function PricingIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
    >
      <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E10600]">
        <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
        Pricing Packages
        <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
      </p>

      <h2
        id="pricing-heading"
        className="font-hero-display uppercase leading-[0.9] tracking-[-0.02em] text-white"
      >
        <span className="block text-[clamp(2.5rem,5.5vw,5rem)]">
          Premium Care.
        </span>
        <span className="mt-1 block text-[clamp(2.5rem,5.5vw,5rem)] text-[#E10600]">
          Transparent Pricing.
        </span>
      </h2>

      <p className="mt-7 max-w-[520px] text-[15px] leading-[1.75] text-zinc-500 sm:text-base">
        No hidden fees, no surprises. Just premium detailing services at honest
        prices.
      </p>
    </motion.div>
  );
}
