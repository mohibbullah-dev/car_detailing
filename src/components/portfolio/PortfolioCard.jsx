import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PortfolioComparisonSlider from "./PortfolioComparisonSlider";

export default function PortfolioCard({ item, index, isDemo = false }) {
  const detailUrl = isDemo || item.isDemo ? undefined : `/portfolio/${item._id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <PortfolioComparisonSlider
        beforeUrl={item.beforeUrl}
        afterUrl={item.afterUrl}
        title={item.title}
        index={index}
        detailUrl={detailUrl}
      />

      <div className="mt-4 flex items-center justify-between px-1">
        {detailUrl ? (
          <Link
            to={detailUrl}
            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-[#E10600] focus-visible:text-[#E10600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E10600]/50 focus-visible:outline-offset-4"
          >
            View Case Study
          </Link>
        ) : (
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
            Demo Showcase
          </span>
        )}
        {item.location && (
          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-700">
            {item.location}
          </span>
        )}
      </div>
    </motion.article>
  );
}
