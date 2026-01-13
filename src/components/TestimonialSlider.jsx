import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { business } from "../data/business";

const REVIEWS = [
  {
    name: "Sarah M.",
    title: "Full Detail",
    text: "Absolutely spotless. The interior looks brand new and the paint has a deep glossy finish. Super professional and arrived on time.",
  },
  {
    name: "James T.",
    title: "Exterior Polish",
    text: "Swirls removed and the shine is unreal. Great attention to detail, and the convenience of mobile service is a game-changer.",
  },
  {
    name: "Amina K.",
    title: "Ceramic Coating",
    text: "The coating made a huge difference — water beads right off. Friendly service, clear pricing, and amazing results.",
  },
  {
    name: "Tom R.",
    title: "Express Wash",
    text: "Quick but thorough. Wheels and paintwork came up brilliantly. Perfect for a maintenance clean between details.",
  },
];

function StarsRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-amber-500" fill="currentColor" />
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const review = REVIEWS[index];

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % REVIEWS.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
              Real Results. Real People.
            </h2>
            <p className="text-base text-zinc-600">
              Demo reviews for outreach preview — you can swap with real Google
              reviews later.
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-zinc-900">
                  Google Reviews
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1">
                  <StarsRow />
                  <span className="text-xs font-bold text-zinc-900">5.0</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-zinc-500">
                *Demo content for design preview
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold text-zinc-900">
                Customer Testimonial
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setIndex((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((p) => (p + 1) % REVIEWS.length)}
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
                  aria-label="Next review"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <StarsRow />
                  <p className="text-base leading-relaxed text-zinc-700">
                    “{review.text}”
                  </p>

                  <div className="flex items-center justify-between gap-4 border-t border-zinc-200 pt-4">
                    <div>
                      <div className="text-sm font-extrabold text-zinc-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {review.title}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-700" />
                      Demo review
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6">
              <a
                href="#quote"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Get a Quote
              </a>
              <div className="mt-2 text-xs text-zinc-500">
                Outreach tip: this section builds trust when you send the demo
                link to Google Maps leads.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
