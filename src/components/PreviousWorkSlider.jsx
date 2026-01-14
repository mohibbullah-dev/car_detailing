import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolio";

export default function PreviousWorkSlider({ limit = 4 }) {
  const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
  const [i, setI] = useState(0);

  const item = items[i];

  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="bg-white" id="work">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
              Previous Work
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Real job results — before & after transformations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm hover:bg-zinc-50"
              aria-label="Previous"
              type="button"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm hover:bg-zinc-50"
              aria-label="Next"
              type="button"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/portfolio"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Images */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">
                    Before
                  </div>
                  <img
                    src={item.beforeImg}
                    alt="Before"
                    className="mt-3 h-48 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">
                    After
                  </div>
                  <img
                    src={item.afterImg}
                    alt="After"
                    className="mt-3 h-48 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="text-sm font-extrabold text-zinc-900">
                  {item.title}
                </div>
                <div className="text-sm text-zinc-600">{item.location}</div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                  {item.notes}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-700" />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 text-xs text-zinc-500">
                  Slide {i + 1} of {items.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
