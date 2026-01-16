// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
// import { business } from "../data/business";

// const SIZE_MULTIPLIER = { Small: 1, Sedan: 1.15, SUV: 1.3 };

// const SERVICES = [
//   {
//     name: "Express Wash",
//     price: 30,
//     description: "Quick refresh • Exterior wash • Wheels cleaned",
//   },
//   {
//     name: "Full Detail",
//     price: 80,
//     description: "Interior + exterior • Decon • Gloss finish",
//   },
//   {
//     name: "Ceramic Coating",
//     price: 200,
//     description: "Long-lasting protection • Deep shine • Hydrophobic",
//   },
// ];

// const formatGBP = (n) =>
//   new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
//     n
//   );

// function PrimaryButton({ children, href, className = "" }) {
//   return (
//     <a
//       href={href}
//       className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 ${className}`}
//     >
//       {children}
//     </a>
//   );
// }

// function SecondaryButton({ children, href, className = "" }) {
//   return (
//     <a
//       href={href}
//       className={`inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 ${className}`}
//     >
//       {children}
//     </a>
//   );
// }

// export default function PriceCalculator() {
//   const [carSize, setCarSize] = useState("Sedan");
//   const [serviceType, setServiceType] = useState(SERVICES[1].name);

//   const selectedService = useMemo(
//     () => SERVICES.find((s) => s.name === serviceType) ?? SERVICES[0],
//     [serviceType]
//   );

//   const total = useMemo(() => {
//     const multiplier = SIZE_MULTIPLIER[carSize] ?? 1;
//     return Math.round(selectedService.price * multiplier);
//   }, [carSize, selectedService.price]);

//   const waMessage = useMemo(() => {
//     const text =
//       `Hi ${business.name}! I'd like to book a mobile detailing service in ${business.city}.%0A%0A` +
//       `Car Size: ${carSize}%0A` +
//       `Service: ${selectedService.name}%0A` +
//       `Estimated Total: ${formatGBP(total)}%0A%0A` +
//       `Preferred date/time: `;
//     return text;
//   }, [carSize, selectedService.name, total]);

//   const waLink = `https://wa.me/${business.whatsappNumber}?text=${waMessage}`;

//   return (
//     <section id="quote" className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="space-y-4"
//           >
//             <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
//               Instant Quote Calculator
//             </h2>
//             <p className="text-base text-zinc-600">
//               Select your car size and service type. Your total updates live —
//               then book in seconds via WhatsApp.
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Transparent pricing",
//                 `Mobile service across ${business.city}`,
//                 "Fast booking",
//               ].map((t) => (
//                 <span
//                   key={t}
//                   className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900"
//                 >
//                   <CheckCircle2 className="h-4 w-4 text-blue-700" />
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* Conversion box (fills the empty space) */}
//             <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <div className="text-sm font-extrabold text-zinc-900">
//                 What’s included
//               </div>
//               <p className="mt-1 text-sm text-zinc-600">
//                 Quick, professional mobile service — perfect for Google Maps
//                 outreach demos.
//               </p>

//               <ul className="mt-4 space-y-3 text-sm text-zinc-700">
//                 {[
//                   "We come to your home or workplace",
//                   "Safe products • paint-friendly process",
//                   "Upfront pricing with live total",
//                   "Book instantly via WhatsApp",
//                 ].map((t) => (
//                   <li key={t} className="flex items-start gap-2">
//                     <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-700" />
//                     <span>{t}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
//                 <div className="text-xs font-semibold text-zinc-600">
//                   Service area
//                 </div>
//                 <div className="mt-1 text-sm font-bold text-zinc-900">
//                   {business.city} • Within {business.serviceRadiusMiles} miles
//                 </div>
//                 <div className="mt-1 text-xs text-zinc-600">
//                   Same-week slots often available — message to confirm.
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.55, ease: "easeOut" }}
//             className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
//           >
//             <div className="grid gap-5">
//               <div>
//                 <label className="text-sm font-extrabold text-zinc-900">
//                   Car Size
//                 </label>
//                 <div className="mt-2 grid grid-cols-3 gap-2">
//                   {Object.keys(SIZE_MULTIPLIER).map((size) => {
//                     const active = carSize === size;
//                     return (
//                       <button
//                         key={size}
//                         type="button"
//                         onClick={() => setCarSize(size)}
//                         className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
//                           active
//                             ? "border-blue-700 bg-blue-700 text-white shadow-sm"
//                             : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm font-extrabold text-zinc-900">
//                   Service Type
//                 </label>
//                 <div className="mt-2 space-y-2">
//                   {SERVICES.map((s) => {
//                     const active = serviceType === s.name;
//                     return (
//                       <button
//                         key={s.name}
//                         type="button"
//                         onClick={() => setServiceType(s.name)}
//                         className={`w-full rounded-2xl border p-4 text-left transition ${
//                           active
//                             ? "border-blue-700 bg-blue-700/5"
//                             : "border-zinc-200 bg-white hover:bg-zinc-50"
//                         }`}
//                       >
//                         <div className="flex items-start justify-between gap-3">
//                           <div>
//                             <div className="text-sm font-extrabold text-zinc-900">
//                               {s.name}
//                             </div>
//                             <div className="mt-1 text-xs text-zinc-600">
//                               {s.description}
//                             </div>
//                           </div>
//                           <div className="text-sm font-extrabold text-zinc-900">
//                             {formatGBP(s.price)}
//                           </div>
//                         </div>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-xs font-semibold text-zinc-600">
//                       Live Total
//                     </div>
//                     <div className="text-2xl font-extrabold text-zinc-900">
//                       {formatGBP(total)}
//                     </div>
//                   </div>
//                   <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700">
//                     Includes size multiplier
//                   </div>
//                 </div>
//                 <div className="mt-2 text-xs text-zinc-600">
//                   Final quote may vary slightly based on vehicle condition
//                   (we’ll confirm before starting).
//                 </div>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <PrimaryButton href={waLink} className="flex-1">
//                   Book via WhatsApp <MessageCircle className="h-4 w-4" />
//                 </PrimaryButton>
//                 <SecondaryButton
//                   href={`tel:${business.phoneTel}`}
//                   className="flex-1"
//                 >
//                   Call Now <PhoneCall className="h-4 w-4" />
//                 </SecondaryButton>
//               </div>

//               <div className="text-xs text-zinc-500">
//                 Demo note: WhatsApp message includes the selected car size,
//                 service, and estimated total.
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import { business } from "../data/business";

const SIZE_MULTIPLIER = { Small: 1, Sedan: 1.15, SUV: 1.3 };

const SERVICES = [
  {
    name: "Express Wash",
    price: 30,
    icon: <Zap className="h-4 w-4" />,
    description: "Exterior restoration & wheel decontamination",
  },
  {
    name: "Full Detail",
    price: 80,
    icon: <Sparkles className="h-4 w-4" />,
    description: "Deep interior steam & paint gloss enhancement",
  },
  {
    name: "Ceramic Coating",
    price: 200,
    icon: <Shield className="h-4 w-4" />,
    description: "Ultimate hydrophobic protection & 12-month seal",
  },
];

const formatGBP = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    n,
  );

// Luxury Button Components
function PrimaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-blue-600 hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:border-white/40 ${className}`}
    >
      {children}
    </a>
  );
}

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

  const waLink = `https://wa.me/${business.whatsappNumber}?text=Hi! I want to book ${selectedService.name} for my ${carSize}. Total: ${formatGBP(total)}`;

  return (
    <section id="quote" className="relative bg-zinc-950 py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                Transparent Estimates
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-white sm:text-6xl uppercase leading-[0.9]">
                Precision <br />
                <span className="text-zinc-600 italic">Pricing.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-zinc-400 leading-relaxed">
                No hidden fees. No guesswork. Select your vehicle profile and
                get an instant mobile detailing quote in {business.city}.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Fully Equipped Mobile Units",
                "Premium Grade Chemicals Only",
                "Insured & Certified Professionals",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-zinc-300"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                Service Radius
              </div>
              <div className="text-xl font-bold text-white uppercase italic">
                {business.city}{" "}
                <span className="text-blue-500 text-sm not-italic ml-2">
                  ± {business.serviceRadiusMiles} Miles
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
          >
            <div className="space-y-8">
              {/* Car Size Selector */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  1. Select Vehicle Size
                </label>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {Object.keys(SIZE_MULTIPLIER).map((size) => (
                    <button
                      key={size}
                      onClick={() => setCarSize(size)}
                      className={`relative overflow-hidden rounded-xl py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                        carSize === size
                          ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
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
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  2. Select Treatment
                </label>
                <div className="mt-4 space-y-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setServiceType(s.name)}
                      className={`w-full group rounded-2xl border p-5 text-left transition-all ${
                        serviceType === s.name
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/5 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-lg p-2 transition-colors ${serviceType === s.name ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400"}`}
                          >
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-sm font-black uppercase tracking-tight text-white">
                              {s.name}
                            </div>
                            <div className="text-[10px] text-zinc-500">
                              {s.description}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-black text-white">
                          {formatGBP(s.price)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Display */}
              <div className="rounded-2xl bg-white p-6 text-black">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-50">
                    Estimated Total
                  </div>
                  <div className="text-3xl font-black tracking-tighter">
                    {formatGBP(total)}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid gap-3 sm:grid-cols-2">
                <PrimaryButton href={waLink}>
                  Book Now <MessageCircle className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href={`tel:${business.phoneTel}`}>
                  Call <PhoneCall className="h-4 w-4" />
                </SecondaryButton>
              </div>

              <p className="text-center text-[9px] font-medium uppercase tracking-widest text-zinc-600">
                Final price confirmed upon vehicle inspection
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
