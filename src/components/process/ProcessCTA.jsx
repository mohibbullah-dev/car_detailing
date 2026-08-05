import { motion } from "framer-motion";
import {
  ChevronRight,
  Gem,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const TRUST_ICONS = {
  gem: Gem,
  shieldCheck: ShieldCheck,
  star: Star,
};

export default function ProcessCTA({ onOpenBooking }) {
  const { process } = useSite();
  const processTrustPoints = process.trustPoints;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mt-14 grid grid-cols-1 gap-10 p-8 sm:mt-16 sm:p-10 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-12"
    >
      {/* Left copy */}
      <div className="lg:col-span-4">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">
          Experience the Difference
        </p>

        <h3 className="font-hero-display uppercase leading-[0.92] tracking-[-0.02em] text-white">
          <span className="block text-[clamp(1.75rem,3vw,2.5rem)]">
            More Than a Clean Car.
          </span>
          <span className="relative mt-1 inline-block text-[clamp(1.75rem,3vw,2.5rem)] text-[#E10600]">
            A Total Transformation.
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6C40 2 80 2 120 4C160 6 180 4 198 2"
                stroke="#E10600"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </span>
        </h3>
      </div>

      {/* Center trust points */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:col-span-4 lg:flex-col lg:gap-5">
        {processTrustPoints.map(({ label, icon }) => {
          const Icon = TRUST_ICONS[icon];
          return (
            <div key={label} className="flex items-center gap-3">
              <Icon size={16} strokeWidth={1.5} className="shrink-0 text-[#E10600]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right CTA */}
      <div className="flex flex-col items-start lg:col-span-4 lg:items-end">
        <button
          type="button"
          onClick={onOpenBooking}
          className="hero-primary-btn group inline-flex h-16 w-full items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:w-auto sm:min-w-[280px]"
        >
          Book Your Detailing
          <ChevronRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
        <p className="mt-3 text-[11px] text-zinc-600 lg:text-right">
          Let your car shine like new again.
        </p>
      </div>
    </motion.div>
  );
}
