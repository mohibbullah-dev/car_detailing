import { motion } from "framer-motion";
import { Sparkles, Trophy, ShieldCheck, Gem } from "lucide-react";

const STATS = [
  { icon: Sparkles, value: "500+", label: "Vehicles Detailed" },
  { icon: Trophy, value: "100%", label: "Satisfaction" },
  { icon: ShieldCheck, value: "5+", label: "Years Experience" },
  { icon: Gem, value: "Premium", label: "Quality Products" },
];

export default function PortfolioStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
    >
      {STATS.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="hero-glass-card flex flex-col items-center justify-center px-4 py-6 text-center sm:px-3 sm:py-7"
        >
          <Icon
            size={22}
            strokeWidth={1.5}
            className="mb-4 text-[#E10600]"
          />
          <p className="font-hero-display text-[28px] leading-none tracking-wide text-white sm:text-[32px]">
            {value}
          </p>
          <p className="mt-2.5 text-[8px] font-semibold uppercase leading-snug tracking-[0.18em] text-zinc-500 sm:text-[9px]">
            {label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
