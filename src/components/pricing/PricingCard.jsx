import { motion } from "framer-motion";
import { Check, ChevronRight, Car, Gem, ShieldCheck, Star } from "lucide-react";
import { generateWhatsAppLink } from "../../lib/whatsapp";
import { useBusiness } from "../../context/SiteContentContext";

const PLAN_ICONS = {
  car: Car,
  gem: Gem,
  shield: ShieldCheck,
};

function HexIcon({ icon: Icon }) {
  return (
    <div className="pricing-hex-icon mb-5 flex h-14 w-14 items-center justify-center">
      <Icon size={22} strokeWidth={1.5} className="text-[#E10600]" />
    </div>
  );
}

export default function PricingCard({ plan, index }) {
  const business = useBusiness();
  const Icon = PLAN_ICONS[plan.icon];
  const priceLabel = `$${plan.price}.${plan.cents}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`pricing-plan-card relative flex flex-col ${
        plan.featured ? "pricing-plan-card--featured lg:-mt-2 lg:mb-2" : ""
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-px left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-b-xl bg-[#E10600] px-4 py-1.5 shadow-[0_4px_20px_rgba(225,6,0,0.4)]">
          <Star size={10} fill="white" className="text-white" />
          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${plan.featured ? "pt-10" : ""}`}>
        <HexIcon icon={Icon} />

        <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
          {plan.title}
        </h3>
        <p className="mt-1.5 text-[11px] text-zinc-500">{plan.subtitle}</p>

        <div className="mt-6 flex items-start font-hero-display text-white">
          <span className="text-4xl leading-none sm:text-5xl">${plan.price}</span>
          <span className="mt-1 text-lg leading-none">.{plan.cents}</span>
        </div>

        <ul className="mt-6 flex-1 space-y-3 border-t border-white/[0.06] pt-6">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-[11px] leading-snug text-zinc-400"
            >
              <Check
                size={14}
                strokeWidth={2.5}
                className="mt-0.5 shrink-0 text-[#E10600]"
              />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={generateWhatsAppLink(plan.title, priceLabel, business)}
          target="_blank"
          rel="noopener noreferrer"
          className={`group mt-8 flex h-12 items-center justify-center gap-2 rounded-xl text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
            plan.featured
              ? "hero-primary-btn text-white"
              : "border border-[#E10600]/50 bg-transparent text-[#E10600] hover:border-[#E10600] hover:bg-[#E10600]/5"
          }`}
        >
          Choose Plan
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}
