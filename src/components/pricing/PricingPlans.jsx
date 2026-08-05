import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Users,
  FlaskConical,
  CalendarClock,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import PricingCard from "./PricingCard";
import PricingSidebar from "./PricingSidebar";

const BOTTOM_ICONS = {
  users: Users,
  flask: FlaskConical,
  calendar: CalendarClock,
};

export default function PricingPlans() {
  const { pricing } = useSite();
  const pricingPlans = pricing.plans;

  return (
    <div className="mt-14 sm:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6 xl:gap-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8 xl:col-span-9 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <PricingSidebar />
        </div>
      </div>
    </div>
  );
}

export function PricingBottomBar({ onOpenBooking }) {
  const { pricing } = useSite();
  const pricingBottomFeatures = pricing.bottomFeatures;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mt-10 flex flex-col gap-8 p-6 sm:mt-12 sm:p-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
    >
      {/* Book now incentive */}
      <div className="flex items-center gap-4 lg:max-w-xs">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E10600]/15 border border-[#E10600]/25">
          <Calendar size={18} className="text-[#E10600]" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            Book Now &amp; Save 10%
          </p>
          <p className="mt-1 text-[10px] leading-relaxed text-zinc-500">
            Schedule your appointment online today.
          </p>
        </div>
      </div>

      {/* Center features */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:flex lg:flex-1 lg:justify-center lg:gap-8 xl:gap-12">
        {pricingBottomFeatures.map(({ title, subtitle, icon }) => {
          const Icon = BOTTOM_ICONS[icon];
          return (
            <div
              key={title}
              className="flex items-center gap-3 sm:flex-col sm:text-center lg:flex-row lg:text-left"
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                className="shrink-0 text-[#E10600]"
              />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  {title}
                </p>
                <p className="text-[9px] text-zinc-500">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="hero-primary-btn group inline-flex h-16 shrink-0 items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:min-w-[240px]"
      >
        Book Your Detail
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </motion.div>
  );
}
