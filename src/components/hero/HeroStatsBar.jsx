import { motion } from "framer-motion";
import { Trophy, Star, ShieldCheck } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const ICONS = { trophy: Trophy, star: Star, shieldCheck: ShieldCheck };

export default function HeroStatsBar() {
  const { heroStats } = useSite();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
    >
      {heroStats.map(({ icon, text }) => {
        const Icon = ICONS[icon] || Trophy;
        return (
          <div
            key={text}
            className="flex items-center gap-3.5 px-6 py-5 sm:justify-center sm:gap-4 sm:px-5 sm:py-[22px] lg:px-7"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className="shrink-0 text-[#E10600]"
            />
            <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-400 sm:text-[11px]">
              {text}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
