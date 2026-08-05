import { motion } from "framer-motion";
import {
  Sparkles,
  Cog,
  Lightbulb,
  PawPrint,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useBusiness, useSite } from "../../context/SiteContentContext";

const ADDON_ICONS = {
  sparkles: Sparkles,
  cog: Cog,
  lightbulb: Lightbulb,
  paw: PawPrint,
};

export default function PricingSidebar() {
  const business = useBusiness();
  const { pricing } = useSite();
  const pricingAddons = pricing.addons;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Add-ons */}
      <div className="hero-glass-card p-5 sm:p-6">
        <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
          Add-Ons
        </h3>
        <ul className="space-y-4">
          {pricingAddons.map(({ label, price, icon }) => {
            const Icon = ADDON_ICONS[icon];
            return (
              <li
                key={label}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#E10600]"
                  />
                  <span className="text-[11px] text-zinc-400">{label}</span>
                </div>
                <span className="text-[11px] font-semibold text-white">
                  {price}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Have questions */}
      <div className="hero-glass-card flex items-center gap-4 p-5 sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E10600]/15 border border-[#E10600]/30">
          <Phone size={18} strokeWidth={1.5} className="text-[#E10600]" />
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Have Questions?
          </p>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-1 block text-sm font-semibold text-[#E10600] hover:underline"
          >
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Satisfaction guarantee */}
      <div className="hero-glass-card flex items-start gap-4 p-5 sm:p-6">
        <ShieldCheck
          size={22}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0 text-[#E10600]"
        />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            100% Satisfaction Guarantee
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-zinc-500">
            Not happy with our service? We&apos;ll make it right or your money
            back.
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
