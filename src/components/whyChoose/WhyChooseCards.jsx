import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gem,
  Clock,
  Award,
  CalendarDays,
  Headphones,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const CARD_ICONS = {
  shieldCheck: ShieldCheck,
  gem: Gem,
  clock: Clock,
  award: Award,
  calendar: CalendarDays,
  headphones: Headphones,
};

export default function WhyChooseCards() {
  const { whyChoose } = useSite();
  const whyChooseCards = whyChoose.cards;

  return (
    <div className="mt-14 sm:mt-16 lg:mt-20">
      {/* Desktop — 6 in a row */}
      <div className="hidden gap-4 xl:grid xl:grid-cols-6">
        {whyChooseCards.map((card, index) => {
          const Icon = CARD_ICONS[card.icon];
          return (
            <FeatureCard
              key={card.id}
              card={card}
              Icon={Icon}
              index={index}
            />
          );
        })}
      </div>

      {/* Tablet / mobile */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
        {whyChooseCards.map((card, index) => {
          const Icon = CARD_ICONS[card.icon];
          return (
            <FeatureCard
              key={card.id}
              card={card}
              Icon={Icon}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

function FeatureCard({ card, Icon, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="why-choose-card group flex flex-col overflow-hidden text-center"
    >
      <div className="flex flex-1 flex-col items-center px-4 pb-4 pt-6 sm:px-5 sm:pt-7">
        <Icon
          size={28}
          strokeWidth={1.25}
          className="mb-4 text-[#E10600] transition-transform duration-500 group-hover:scale-105"
        />

        <h3 className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-[11px]">
          {card.title}
        </h3>

        <p className="mb-5 text-[10px] leading-relaxed text-zinc-500 sm:text-[11px]">
          {card.description}
        </p>
      </div>

      <div className="relative h-28 overflow-hidden sm:h-32">
        <img
          src={card.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          style={{
            filter: "brightness(0.45) saturate(0.6) sepia(0.2)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(7,7,7,0.9) 0%, transparent 50%), linear-gradient(to right, rgba(225,6,0,0.08) 0%, transparent 60%)",
          }}
        />
      </div>
    </motion.article>
  );
}
