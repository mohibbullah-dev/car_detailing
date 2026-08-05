import { motion } from "framer-motion";
import { ChevronRight, Headphones } from "lucide-react";
import { generateWhatsAppLink } from "../../lib/whatsapp";
import { useBusiness } from "../../context/SiteContentContext";

export default function FaqSupportCard() {
  const business = useBusiness();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mx-auto mt-10 flex max-w-4xl flex-col items-start gap-6 p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div className="flex items-start gap-4 sm:items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E10600]/20 bg-[#E10600]/10">
          <Headphones size={20} strokeWidth={1.5} className="text-[#E10600]" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            Still Have Questions?
          </p>
          <p className="mt-1.5 max-w-md text-[12px] leading-relaxed text-zinc-500 sm:text-[13px]">
            Can&apos;t find the answer you&apos;re looking for? Our friendly team
            is here to help.
          </p>
        </div>
      </div>

      <a
        href={generateWhatsAppLink("", "", business)}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[14px] border border-[#E10600]/50 bg-transparent px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#E10600] hover:bg-[#E10600]/10 sm:h-14 sm:px-8"
      >
        Contact Us
        <ChevronRight
          size={14}
          strokeWidth={2.5}
          className="text-[#E10600] transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </a>
    </motion.div>
  );
}
