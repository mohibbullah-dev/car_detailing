import { motion } from "framer-motion";
import { ShieldCheck, Gem, Clock } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const FEATURE_ICONS = {
  shieldCheck: ShieldCheck,
  gem: Gem,
  clock: Clock,
};

export default function ProcessIntro() {
  const { process } = useSite();
  const processFeatures = process.features;

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
        Our Process
        <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
      </p>

      <h2 className="font-hero-display uppercase leading-[0.9] tracking-[-0.02em] text-white">
        <span className="block text-[clamp(2.5rem,5.5vw,5rem)]">
          Precision
        </span>
        <span className="mt-1 block text-[clamp(2.5rem,5.5vw,5rem)] text-[#E10600]">
          In Every Step.
        </span>
      </h2>

      <p className="mt-7 max-w-[520px] text-[15px] leading-[1.75] text-zinc-500 sm:text-base">
        A proven detailing process for a flawless, long-lasting shine and
        protection.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {processFeatures.map(({ label, icon }) => {
          const Icon = FEATURE_ICONS[icon];
          return (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm"
            >
              <Icon size={14} strokeWidth={1.5} className="text-[#E10600]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
