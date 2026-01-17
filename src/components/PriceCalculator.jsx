// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   MessageCircle,
//   PhoneCall,
//   Sparkles,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";
// import { business } from "../data/business";

// const SIZE_MULTIPLIER = { Small: 1, Sedan: 1.15, SUV: 1.3 };

// const SERVICES = [
//   {
//     name: "Express Wash",
//     price: 30,
//     icon: <Zap className="h-4 w-4" />,
//     description: "Exterior restoration • Wheel decontamination",
//   },
//   {
//     name: "Full Detail",
//     price: 80,
//     icon: <Sparkles className="h-4 w-4" />,
//     description: "Deep interior steam • Paint gloss enhancement",
//   },
//   {
//     name: "Ceramic Coating",
//     price: 200,
//     icon: <ShieldCheck className="h-4 w-4" />,
//     description: "12-month hydrophobic shield • Mirror finish",
//   },
// ];

// const formatGBP = (n) =>
//   new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
//     n,
//   );

// export default function PriceCalculator() {
//   const [carSize, setCarSize] = useState("Sedan");
//   const [serviceType, setServiceType] = useState(SERVICES[1].name);

//   const selectedService = useMemo(
//     () => SERVICES.find((s) => s.name === serviceType) ?? SERVICES[0],
//     [serviceType],
//   );

//   const total = useMemo(() => {
//     const multiplier = SIZE_MULTIPLIER[carSize] ?? 1;
//     return Math.round(selectedService.price * multiplier);
//   }, [carSize, selectedService.price]);

//   const waLink = `https://wa.me/${business.whatsappNumber}?text=Hi! I'd like to book ${selectedService.name} for my ${carSize}. Total: ${formatGBP(total)}`;

//   return (
//     <section id="quote" className="relative bg-zinc-950 py-24 overflow-hidden">
//       {/* Dynamic Background Glow */}
//       <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

//       <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
//           {/* Left Column: Context & Value */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">
//                 <Sparkles className="h-3 w-3" /> Live Estimates
//               </div>
//               <h2 className="text-5xl font-black tracking-tighter text-white sm:text-6xl uppercase leading-[0.85]">
//                 Precision <br />
//                 <span className="text-zinc-600 italic">Pricing.</span>
//               </h2>
//               <p className="mt-6 max-w-md text-lg text-zinc-400 leading-relaxed">
//                 Premium mobile detailing with zero guesswork. Select your
//                 vehicle profile and receive an instant quote for {business.city}
//                 .
//               </p>
//             </div>

//             <div className="space-y-4">
//               {[
//                 "Full Mobile Equipment",
//                 "Eco-Friendly Premium Chemicals",
//                 "Same-Week Bookings",
//               ].map((t) => (
//                 <div
//                   key={t}
//                   className="flex items-center gap-3 text-sm font-bold text-zinc-300"
//                 >
//                   <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
//                     <CheckCircle2 className="h-3 w-3" />
//                   </div>
//                   {t}
//                 </div>
//               ))}
//             </div>

//             <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
//               <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
//                 Service Radius
//               </div>
//               <div className="text-xl font-bold text-white italic uppercase">
//                 {business.city}{" "}
//                 <span className="text-blue-500 text-sm not-italic ml-2">
//                   ± {business.serviceRadiusMiles} Miles
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column: The Dashboard */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
//           >
//             <div className="space-y-8">
//               {/* Size Selector */}
//               <div>
//                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
//                   1. Vehicle Size
//                 </label>
//                 <div className="mt-4 grid grid-cols-3 gap-2">
//                   {Object.keys(SIZE_MULTIPLIER).map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setCarSize(size)}
//                       className={`rounded-xl py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
//                         carSize === size
//                           ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
//                           : "bg-white/5 text-zinc-400 hover:bg-white/10"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Service Selector */}
//               <div>
//                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
//                   2. Treatment Plan
//                 </label>
//                 <div className="mt-4 space-y-3">
//                   {SERVICES.map((s) => (
//                     <button
//                       key={s.name}
//                       onClick={() => setServiceType(s.name)}
//                       className={`w-full group rounded-2xl border p-4 text-left transition-all ${
//                         serviceType === s.name
//                           ? "border-blue-500 bg-blue-500/10"
//                           : "border-white/5 bg-white/5 hover:border-white/20"
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-4">
//                           <div
//                             className={`rounded-lg p-2 ${serviceType === s.name ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-500"}`}
//                           >
//                             {s.icon}
//                           </div>
//                           <div>
//                             <div className="text-xs font-black uppercase text-white tracking-tight">
//                               {s.name}
//                             </div>
//                             <div className="text-[10px] text-zinc-500">
//                               {s.description}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-sm font-black text-white">
//                           {formatGBP(s.price)}
//                         </div>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Total Display */}
//               <div className="rounded-2xl bg-white p-6 text-black shadow-inner">
//                 <div className="flex items-center justify-between">
//                   <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
//                     Estimated Total
//                   </div>
//                   <div className="text-3xl font-black tracking-tighter">
//                     {formatGBP(total)}
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="grid gap-3 sm:grid-cols-2">
//                 <a
//                   href={waLink}
//                   className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
//                 >
//                   Book via WhatsApp <MessageCircle className="h-4 w-4" />
//                 </a>
//                 <a
//                   href={`tel:${business.phoneTel}`}
//                   className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-800 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:border-white/30 active:scale-95"
//                 >
//                   Call Specialist <PhoneCall className="h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

{
  /* Right Column: The Dashboard */
}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative group rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
>
  {/* Inner Glow Effect */}
  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

  <div className="relative z-10 space-y-8">
    {/* 1. Size Selector - Improved Pills */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          01. Vehicle Size
        </label>
        <span className="text-[10px] font-bold text-blue-500/80">
          Affects base price
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Object.keys(SIZE_MULTIPLIER).map((size) => (
          <button
            key={size}
            onClick={() => setCarSize(size)}
            className={`relative overflow-hidden rounded-xl py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              carSize === size
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "bg-zinc-800/50 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-transparent hover:border-white/5"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* 2. Service Selector - Cleaner Cards */}
    <div>
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block mb-4">
        02. Treatment Plan
      </label>
      <div className="space-y-3">
        {SERVICES.map((s) => (
          <button
            key={s.name}
            onClick={() => setServiceType(s.name)}
            className={`w-full group rounded-2xl border p-4 transition-all duration-300 ${
              serviceType === s.name
                ? "border-blue-500/50 bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]"
                : "border-white/5 bg-zinc-800/30 hover:border-white/10 hover:bg-zinc-800/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-xl p-2.5 transition-colors ${
                    serviceType === s.name
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {React.cloneElement(s.icon, { size: 18 })}
                </div>
                <div className="text-left">
                  <div className="text-sm font-black uppercase text-white tracking-tight leading-none mb-1">
                    {s.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-medium italic group-hover:text-zinc-400">
                    {s.description}
                  </div>
                </div>
              </div>
              <div
                className={`text-sm font-black transition-colors ${serviceType === s.name ? "text-blue-400" : "text-white"}`}
              >
                {formatGBP(s.price)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Total Display - The "Premium" Look */}
    <div className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-white/5 p-8 shadow-inner">
      <div className="absolute top-0 right-0 p-2 text-blue-500/10">
        <Sparkles size={60} />
      </div>
      <div className="flex items-end justify-between relative z-10">
        <div className="space-y-1">
          <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
            Estimated Total
          </div>
          <div className="text-[10px] font-bold text-blue-500">
            Includes VAT & Travel
          </div>
        </div>
        <motion.div
          key={total}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-black tracking-tighter text-white"
        >
          {formatGBP(total)}
        </motion.div>
      </div>
    </div>

    {/* Actions - Call to Action hierarchy */}
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={waLink}
        className="flex-1 flex h-16 items-center justify-center gap-3 rounded-2xl bg-blue-600 text-[12px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 active:scale-95"
      >
        Book Now <MessageCircle size={18} />
      </a>
      <a
        href={`tel:${business.phoneTel}`}
        className="flex-1 flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 text-[12px] font-black uppercase tracking-widest text-zinc-400 transition-all hover:text-white hover:border-white/20 active:scale-95"
      >
        Questions? <PhoneCall size={18} />
      </a>
    </div>
  </div>
</motion.div>;
