// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
// import { Link } from "react-router-dom";
// import { portfolioItems } from "../data/portfolio";

// export default function PreviousWorkSlider({ limit = 4 }) {
//   const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
//   const [i, setI] = useState(0);

//   const item = items[i];

//   const next = () => setI((p) => (p + 1) % items.length);
//   const prev = () => setI((p) => (p - 1 + items.length) % items.length);

//   return (
//     <section className="bg-white" id="work">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
//               Previous Work
//             </h2>
//             <p className="mt-2 text-base text-zinc-600">
//               Real job results — before & after transformations.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={prev}
//               className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm hover:bg-zinc-50"
//               aria-label="Previous"
//               type="button"
//             >
//               <ArrowLeft className="h-4 w-4" />
//             </button>
//             <button
//               onClick={next}
//               className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm hover:bg-zinc-50"
//               aria-label="Next"
//               type="button"
//             >
//               <ArrowRight className="h-4 w-4" />
//             </button>

//             <Link
//               to="/portfolio"
//               className="ml-2 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
//             >
//               View All
//             </Link>
//           </div>
//         </div>

//         <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -12 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="grid gap-6 lg:grid-cols-2"
//             >
//               {/* Images */}
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
//                   <div className="text-xs font-semibold text-zinc-600">
//                     Before
//                   </div>
//                   <img
//                     src={item.beforeImg}
//                     alt="Before"
//                     className="mt-3 h-48 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
//                   <div className="text-xs font-semibold text-zinc-600">
//                     After
//                   </div>
//                   <img
//                     src={item.afterImg}
//                     alt="After"
//                     className="mt-3 h-48 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="space-y-3">
//                 <div className="text-sm font-extrabold text-zinc-900">
//                   {item.title}
//                 </div>
//                 <div className="text-sm text-zinc-600">{item.location}</div>

//                 <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
//                   {item.notes}
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {item.tags?.map((t) => (
//                     <span
//                       key={t}
//                       className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900"
//                     >
//                       <CheckCircle2 className="h-4 w-4 text-blue-700" />
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="pt-2 text-xs text-zinc-500">
//                   Slide {i + 1} of {items.length}
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolio";

export default function PreviousWorkSlider({ limit = 4 }) {
  const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
  const [i, setI] = useState(0);

  const item = items[i];

  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="bg-zinc-50 overflow-hidden" id="work">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Portfolio Showcase
            </h2>
            <h3 className="text-4xl font-black text-zinc-900 tracking-tight sm:text-5xl">
              Recent{" "}
              <span className="text-zinc-400 font-medium italic">
                Transformations
              </span>
            </h3>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Experience the difference of professional care through our most
              recent client projects.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-full p-1 border border-zinc-200 shadow-sm">
              <button
                onClick={prev}
                className="rounded-full p-3 text-zinc-600 transition hover:bg-zinc-100 hover:text-blue-600 active:scale-95"
                aria-label="Previous"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="rounded-full p-3 text-zinc-600 transition hover:bg-zinc-100 hover:text-blue-600 active:scale-95"
                aria-label="Next"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-bold text-white transition hover:bg-zinc-800 hover:shadow-lg"
            >
              View Full Gallery
            </Link>
          </div>
        </div>

        {/* Main Slider Display */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200 p-4 shadow-xl shadow-zinc-200/50 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid gap-12 lg:grid-cols-12"
            >
              {/* Visuals: Before/After (8 Columns) */}
              <div className="lg:col-span-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Before Frame */}
                  <div className="group relative aspect-video overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200">
                    <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                      Before
                    </div>
                    <img
                      src={item.beforeImg}
                      alt="Condition Before"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* After Frame */}
                  <div className="group relative aspect-video overflow-hidden rounded-3xl bg-zinc-100 border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
                    <div className="absolute top-4 left-4 z-10 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                      After
                    </div>
                    <img
                      src={item.afterImg}
                      alt="Result After"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Information Panel (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-500">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      {item.location}
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-zinc-50 p-6 border border-zinc-100">
                    <div className="absolute -top-3 left-6 bg-blue-600 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-tighter">
                      Project Notes
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600 italic">
                      "{item.notes}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-[11px] font-bold text-zinc-800 transition hover:border-blue-500 hover:text-blue-600"
                      >
                        <CheckCircle2 className="h-3 w-3 text-blue-600" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-8 mt-8 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {items.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-blue-600" : "w-2 bg-zinc-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {i + 1} <span className="mx-1 text-zinc-200">/</span>{" "}
                    {items.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
