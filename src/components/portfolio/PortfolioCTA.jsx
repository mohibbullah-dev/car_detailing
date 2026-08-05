import { motion } from "framer-motion";
import { Trophy, ChevronRight } from "lucide-react";
import { generateWhatsAppLink } from "../../lib/whatsapp";
import { useBusiness } from "../../context/SiteContentContext";

export default function PortfolioCTA() {
  const business = useBusiness();

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-20 flex flex-col items-center text-center sm:mt-24 lg:mt-28"
      aria-labelledby="portfolio-cta-heading"
    >
      {/* Divider with trophy */}
      <div className="relative mb-10 flex w-full max-w-xl items-center justify-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
        <div className="relative mx-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#E10600]/30 bg-[#E10600]/10 shadow-[0_0_24px_rgba(225,6,0,0.2)]">
          <Trophy size={20} strokeWidth={1.5} className="text-[#E10600]" />
          <div className="absolute -inset-1 rounded-full bg-[#E10600]/10 blur-md" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
      </div>

      <p
        id="portfolio-cta-heading"
        className="mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400"
      >
        Ready to Transform Your Vehicle?
      </p>

      <a
        href={generateWhatsAppLink("", "", business)}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-primary-btn group inline-flex h-16 items-center justify-center gap-2.5 rounded-[20px] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 sm:min-w-[320px]"
      >
        Let&apos;s Make It Shine
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </a>
    </motion.section>
  );
}
