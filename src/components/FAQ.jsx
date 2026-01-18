import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData } from "../data/faq";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">
            <HelpCircle className="h-3.5 w-3.5" /> Common Inquiries
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl italic">
            Questions?{" "}
            <span className="text-zinc-600 not-italic">Answered.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 transition-all hover:border-white/10"
            >
              <button
                onClick={() => setActiveId(activeId === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-sm font-bold uppercase tracking-tight text-white sm:text-base">
                  {item.question}
                </span>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${activeId === index ? "bg-blue-600 text-white" : "bg-white/5 text-zinc-500"}`}
                >
                  {activeId === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-white/5 p-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          Still have questions?{" "}
          <a href="#quote" className="text-blue-500 hover:underline">
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
