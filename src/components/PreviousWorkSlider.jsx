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
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { business } from "../data/business";

const SIZE_MULTIPLIER = { Small: 1, Sedan: 1.15, SUV: 1.3 };

const SERVICES = [
  {
    name: "Express Wash",
    price: 30,
    description: "Quick refresh • Exterior wash • Wheels cleaned",
  },
  {
    name: "Full Detail",
    price: 80,
    description: "Interior + exterior • Decon • Gloss finish",
  },
  {
    name: "Ceramic Coating",
    price: 200,
    description: "Long-lasting protection • Deep shine • Hydrophobic",
  },
];

const formatGBP = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    n,
  );

export default function PriceCalculator() {
  const [carSize, setCarSize] = useState("Sedan");
  const [serviceType, setServiceType] = useState(SERVICES[1].name);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.name === serviceType) ?? SERVICES[0],
    [serviceType],
  );

  const total = useMemo(() => {
    const multiplier = SIZE_MULTIPLIER[carSize] ?? 1;
    return Math.round(selectedService.price * multiplier);
  }, [carSize, selectedService.price]);

  const waLink = `https://wa.me/${business.whatsappNumber}?text=Hi! I'd like to book ${selectedService.name} for my ${carSize}. Total: ${formatGBP(total)}`;

  return (
    // CHANGED: bg-white to bg-zinc-950
    <section id="quote" className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Instant Quote
              </h2>
              <h3 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Precision <br />
                <span className="text-zinc-500 italic">Estimator.</span>
              </h3>
              <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                Select your vehicle size and treatment. Your total updates
                live—book in seconds via WhatsApp.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Transparent pricing",
                `Mobile service in ${business.city}`,
                "Fast booking",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 text-zinc-300 font-bold"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  {t}
                </div>
              ))}
            </div>

            {/* Service Area Card */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                Coverage Area
              </div>
              <div className="text-xl font-bold text-white uppercase italic">
                {business.city}{" "}
                <span className="text-blue-500 text-sm not-italic ml-2">
                  Within {business.serviceRadiusMiles} miles
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // CHANGED: bg-white to bg-zinc-900 with white/10 border
            className="rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl sm:p-10"
          >
            <div className="space-y-8">
              {/* Car Size Selector */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Vehicle Size
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {Object.keys(SIZE_MULTIPLIER).map((size) => (
                    <button
                      key={size}
                      onClick={() => setCarSize(size)}
                      className={`rounded-xl py-3 text-[11px] font-black uppercase tracking-widest transition-all ${
                        carSize === size
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                          : "bg-white/5 text-zinc-400 hover:bg-white/10"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Selector */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Service Type
                </label>
                <div className="mt-3 space-y-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setServiceType(s.name)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all ${
                        serviceType === s.name
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/5 bg-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-black uppercase text-white">
                            {s.name}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {s.description}
                          </div>
                        </div>
                        <div className="font-black text-white">
                          {formatGBP(s.price)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Card */}
              <div className="rounded-2xl bg-white p-6 text-black flex items-center justify-between">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-50">
                  Estimated Total
                </div>
                <div className="text-3xl font-black tracking-tighter">
                  {formatGBP(total)}
                </div>
              </div>

              {/* CTAs */}
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={waLink}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-blue-700 transition-all"
                >
                  Book WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-800 py-4 text-xs font-black uppercase tracking-widest text-white hover:border-white/30 transition-all"
                >
                  Call Now <PhoneCall className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
