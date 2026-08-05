import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronRight,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useBusiness, useSite } from "../../context/SiteContentContext";

const FEATURE_ICONS = {
  shield: ShieldCheck,
  clock: Clock,
  award: Award,
};

export default function FaqCTA({ onOpenBooking }) {
  const business = useBusiness();
  const { faq } = useSite();
  const faqCtaFeatures = faq.ctaFeatures;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="faq-cta-banner hero-glass-card mt-12 p-6 sm:mt-14 sm:p-8 lg:mt-16 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-6">
        {/* Left headline */}
        <div className="flex items-start gap-4 lg:col-span-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E10600]/25 bg-[#E10600]/10">
            <Calendar size={24} strokeWidth={1.5} className="text-[#E10600]" />
          </div>
          <div>
            <h3 className="font-hero-display uppercase leading-[0.92] tracking-[-0.02em] text-white">
              <span className="block text-[clamp(1.25rem,2.5vw,1.75rem)]">
                Ready to Give Your Car the
              </span>
              <span className="mt-0.5 block text-[clamp(1.25rem,2.5vw,1.75rem)] text-[#E10600]">
                Royal Treatment?
              </span>
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">
              Premium mobile detailing at your doorstep.
            </p>
          </div>
        </div>

        {/* Center features */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-5">
          {faqCtaFeatures.map(({ id, title, subtitle, icon }) => {
            const Icon = FEATURE_ICONS[icon];
            return (
              <div key={id} className="flex items-center gap-3 sm:flex-col sm:text-center lg:flex-row lg:text-left">
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#E10600]"
                />
                <div>
                  <p className="text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-white sm:text-[10px]">
                    {title}
                  </p>
                  {subtitle && (
                    <p className="text-[9px] text-zinc-500">{subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-start lg:col-span-3 lg:items-end">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hero-primary-btn group inline-flex h-16 w-full items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:w-auto sm:min-w-[240px]"
          >
            Book Appointment
            <ChevronRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
          <p className="mt-3 text-[11px] text-zinc-500 lg:text-right">
            Or call{" "}
            <a
              href={`tel:${business.phoneTel}`}
              className="font-semibold text-[#E10600] transition-colors hover:text-[#ff1a1a]"
            >
              {business.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
