import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6"
    >
      <Link
        to="/portfolio"
        className="hero-primary-btn group inline-flex h-16 items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:min-w-[280px]"
      >
        View Full Portfolio
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.div>
  );
}
