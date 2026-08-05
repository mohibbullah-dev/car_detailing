import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ReviewsIntro({ showViewAll = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
    >
      <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E10600]">
        <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
        Customer Reviews
        <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
      </p>

      <h2
        id="reviews-heading"
        className="font-hero-display uppercase leading-[0.9] tracking-[-0.02em] text-white"
      >
        <span className="block text-[clamp(2.5rem,5.5vw,5rem)]">
          Real Reviews.
        </span>
        <span className="mt-1 block text-[clamp(2.5rem,5.5vw,5rem)] text-[#E10600]">
          Real Results.
        </span>
      </h2>

      <p className="mt-7 max-w-[600px] text-[15px] leading-[1.75] text-zinc-500 sm:text-base">
        Don&apos;t just take our word for it. See what our satisfied customers
        have to say about their Royal Shine experience.
      </p>

      {showViewAll && (
        <Link
          to="/reviews"
          className="hero-primary-btn group mt-10 inline-flex h-16 items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:min-w-[260px]"
        >
          View All Reviews
          <ChevronRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </motion.div>
  );
}
