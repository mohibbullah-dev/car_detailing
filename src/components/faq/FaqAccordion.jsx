import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

export default function FaqAccordion() {
  const { faq } = useSite();
  const faqItems = faq.items;
  const [activeId, setActiveId] = useState(faqItems[0]?.id ?? null);

  const toggle = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-12 w-full max-w-4xl sm:mt-14 lg:mt-16"
    >
      <div className="divide-y divide-white/[0.06]">
        {faqItems.map((item, index) => {
          const isOpen = activeId === item.id;
          const number = String(index + 1).padStart(2, "0");

          return (
            <div
              key={item.id}
              className={`faq-accordion-item ${isOpen ? "faq-accordion-item--open" : ""}`}
            >
              <button
                type="button"
                id={`faq-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
              >
                <span
                  className="faq-accordion-number shrink-0 font-hero-display text-2xl leading-none text-[#E10600] sm:text-3xl"
                  aria-hidden="true"
                >
                  {number}
                </span>

                <span className="flex-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white sm:text-xs lg:text-[13px]">
                  {item.question}
                </span>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-[#E10600]"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus size={18} strokeWidth={1.75} />
                  ) : (
                    <Plus size={18} strokeWidth={1.75} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="faq-accordion-answer pb-6 pl-12 pr-4 sm:pl-14 sm:pr-6">
                      <p className="text-[13px] leading-[1.8] text-zinc-500 sm:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
