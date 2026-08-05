import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { usePortfolioList } from "../../hooks/usePortfolio";
import { portfolioDemoItems } from "../../data/portfolioDemo";
import PortfolioBackground from "./PortfolioBackground";
import PortfolioGrid from "./PortfolioGrid";
import { PortfolioLoading } from "./PortfolioStates";

const PREVIEW_LIMIT = 6;

export default function PortfolioPreview() {
  const { data, isLoading } = usePortfolioList();

  const liveItems = data?.length ? data.slice(0, PREVIEW_LIMIT) : [];
  const isDemo = !isLoading && liveItems.length === 0;
  const items = isDemo ? portfolioDemoItems : liveItems;

  return (
    <section
      id="work"
      className="portfolio-section relative overflow-hidden bg-[#070707] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="portfolio-preview-heading"
    >
      <PortfolioBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="mb-12 flex flex-col gap-8 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E10600]">
              <span className="h-px w-6 bg-[#E10600]" aria-hidden="true" />
              Our Portfolio
            </p>

            <h2
              id="portfolio-preview-heading"
              className="font-hero-display uppercase leading-[0.9] tracking-[-0.02em] text-white"
            >
              <span className="block text-[clamp(2rem,4.5vw,3.75rem)]">
                Built on Passion.
              </span>
              <span className="mt-1 block text-[clamp(2rem,4.5vw,3.75rem)] text-[#E10600]">
                Driven by Results.
              </span>
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-zinc-500">
              Explore our latest transformations. Every vehicle. Every detail.
              Flawless finish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <Link
              to="/portfolio"
              className="hero-primary-btn group inline-flex h-16 items-center justify-center gap-2 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:min-w-[260px]"
            >
              View All Portfolios
              <ChevronRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {isLoading ? (
          <PortfolioLoading />
        ) : (
          <PortfolioGrid items={items} isDemo={isDemo} />
        )}
      </div>
    </section>
  );
}
