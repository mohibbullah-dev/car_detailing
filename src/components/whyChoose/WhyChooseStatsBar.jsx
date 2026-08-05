import { motion } from "framer-motion";
import {
  ChevronRight,
  Car,
  Trophy,
  ShieldCheck,
  Users,
  Star,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const STAT_ICONS = {
  car: Car,
  trophy: Trophy,
  shieldCheck: ShieldCheck,
  users: Users,
  star: Star,
};

export default function WhyChooseStatsBar({ onOpenBooking }) {
  const { whyChoose } = useSite();
  const whyChooseStats = whyChoose.stats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mt-14 flex flex-col gap-8 p-6 sm:mt-16 sm:p-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-10"
    >
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-4 xl:gap-6">
        {whyChooseStats.map(({ value, label, icon }) => {
          const Icon = STAT_ICONS[icon];
          return (
            <div
              key={label}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                className="mb-2 text-[#E10600]"
              />
              <p className="font-hero-display text-xl leading-none text-white sm:text-2xl">
                {value}
              </p>
              <p className="mt-1.5 text-[8px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-500 sm:text-[9px]">
                {label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div
        className="hidden h-16 w-px shrink-0 bg-white/[0.08] lg:block"
        aria-hidden="true"
      />

      {/* CTA */}
      <div className="flex shrink-0 flex-col items-center lg:items-end">
        <p className="mb-4 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400 lg:text-right">
          Ready to Experience the Difference?
        </p>
        <button
          type="button"
          onClick={onOpenBooking}
          className="hero-primary-btn group inline-flex h-16 w-full items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:w-auto sm:min-w-[260px]"
        >
          Book Your Detail
          <ChevronRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </motion.div>
  );
}
