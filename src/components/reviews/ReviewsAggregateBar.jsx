import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import { PlatformIcon } from "./PlatformIcons";

function Stars({ size = 12 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill="#E10600"
          className="text-[#E10600]"
        />
      ))}
    </div>
  );
}

export default function ReviewsAggregateBar() {
  const { reviews } = useSite();
  const aggregateRatings = reviews.aggregate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mx-auto mt-10 flex max-w-4xl flex-col items-center gap-6 px-6 py-6 sm:mt-12 sm:flex-row sm:justify-center sm:gap-8 sm:px-8"
    >
      <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="flex items-center gap-3">
          <span className="font-hero-display text-4xl leading-none text-white">
            {aggregateRatings.overall}
          </span>
          <Stars size={14} />
        </div>
        <p className="mt-1.5 text-[10px] text-zinc-500">
          Based on {aggregateRatings.total} reviews
        </p>
      </div>

      <div className="hidden h-10 w-px bg-white/[0.08] sm:block" aria-hidden="true" />

      <div className="flex flex-wrap items-center justify-center gap-0 sm:gap-0">
        {aggregateRatings.platforms.map(({ id, rating, count }, index) => (
          <div key={id} className="flex items-center">
            {index > 0 && (
              <div
                className="mx-5 hidden h-10 w-px bg-white/[0.08] sm:block lg:mx-6"
                aria-hidden="true"
              />
            )}
            <div className="flex items-center gap-3 px-3 sm:px-0">
              <PlatformIcon platform={id} className="h-5 w-5 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{rating}</span>
                  <Stars size={10} />
                </div>
                <p className="text-[9px] text-zinc-500">{count} reviews</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
