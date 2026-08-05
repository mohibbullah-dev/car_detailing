import { motion } from "framer-motion";
import {
  ShieldCheck,
  Car,
  Trophy,
  Award,
  MessagesSquare,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const STAT_ICONS = {
  shieldCheck: ShieldCheck,
  car: Car,
  trophy: Trophy,
  award: Award,
  messages: MessagesSquare,
};

export default function ReviewsTrustBar() {
  const { reviews } = useSite();
  const reviewsTrustStats = reviews.trustStats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mt-12 grid grid-cols-2 gap-6 p-6 sm:mt-14 sm:grid-cols-3 sm:p-8 lg:grid-cols-5 lg:gap-4"
    >
      {reviewsTrustStats.map(({ value, label, icon }) => {
        const Icon = STAT_ICONS[icon];
        return (
          <div
            key={label}
            className="flex flex-col items-center text-center lg:px-2"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className="mb-3 text-[#E10600]"
            />
            <p className="font-hero-display text-xl leading-none text-white sm:text-2xl">
              {value}
            </p>
            <p className="mt-2 text-[8px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-500 sm:text-[9px]">
              {label.toUpperCase()}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
