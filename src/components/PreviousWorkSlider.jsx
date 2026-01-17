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
// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   Camera,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { portfolioItems } from "../data/portfolio";

// export default function PreviousWorkSlider({ limit = 4 }) {
//   const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
//   const [i, setI] = useState(0);

//   const item = items[i];

//   const next = () => setI((p) => (p + 1) % items.length);
//   const prev = () => setI((p) => (p - 1 + items.length) % items.length);

//   return (
//     <section className="relative overflow-hidden bg-zinc-950 py-24" id="work">
//       {/* Decorative Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none" />

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
//         <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
//               <Camera className="h-3 w-3" /> Recent Transformations
//             </div>
//             <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase">
//               The <span className="text-zinc-500 italic">Finish</span> Line
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="flex gap-2 mr-4">
//               <button
//                 onClick={prev}
//                 className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
//                 aria-label="Previous"
//               >
//                 <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
//               </button>
//               <button
//                 onClick={next}
//                 className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
//                 aria-label="Next"
//               >
//                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </button>
//             </div>

//             <Link
//               to="/portfolio"
//               className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-blue-600 hover:text-white"
//             >
//               Full Gallery
//             </Link>
//           </div>
//         </div>

//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.98 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.02 }}
//               transition={{ duration: 0.4, ease: "circOut" }}
//               className="grid gap-8 lg:grid-cols-12"
//             >
//               {/* Visual Showcase (8 Columns) */}
//               <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
//                 <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
//                   <div className="absolute top-4 left-4 z-20 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
//                     Before
//                   </div>
//                   <img
//                     src={item.beforeImg}
//                     alt="Before detailing"
//                     className="h-[300px] sm:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
//                   />
//                 </div>

//                 <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-zinc-900 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
//                   <div className="absolute top-4 left-4 z-20 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
//                     After
//                   </div>
//                   <img
//                     src={item.afterImg}
//                     alt="After detailing"
//                     className="h-[300px] sm:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Subtle Glow Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
//                 </div>
//               </div>

//               {/* Information Panel (4 Columns) */}
//               <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
//                 <div>
//                   <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">
//                     <MapPin className="h-3 w-3" /> {item.location}
//                   </div>
//                   <h3 className="text-3xl font-black text-white uppercase leading-none tracking-tighter">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
//                   <p className="text-zinc-400 text-sm leading-relaxed italic">
//                     "{item.notes}"
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {item.tags?.map((t) => (
//                     <span
//                       key={t}
//                       className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400"
//                     >
//                       <CheckCircle2 className="h-3 w-3" />
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between pt-4 border-t border-white/5">
//                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
//                     Project {i + 1} <span className="mx-2">/</span>{" "}
//                     {items.length}
//                   </div>
//                   <Link
//                     to={`/portfolio/${item.id}`}
//                     className="text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-500 transition-colors"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   Camera,
//   MousePointer2,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { portfolioItems } from "../data/portfolio";

// export default function PreviousWorkSlider({ limit = 4 }) {
//   const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
//   const [i, setI] = useState(0);

//   const item = items[i];

//   const next = () => setI((p) => (p + 1) % items.length);
//   const prev = () => setI((p) => (p - 1 + items.length) % items.length);

//   if (!item) return null;

//   return (
//     <section className="relative overflow-hidden bg-zinc-950 py-24" id="work">
//       {/* Decorative Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] pointer-events-none" />

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
//         {/* Header Section */}
//         <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
//               <Camera className="h-3 w-3" /> Recent Transformations
//             </div>
//             <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase">
//               The <span className="text-zinc-500 italic">Finish</span> Line
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="flex gap-2 mr-4">
//               <button
//                 onClick={prev}
//                 className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
//                 aria-label="Previous"
//               >
//                 <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
//               </button>
//               <button
//                 onClick={next}
//                 className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
//                 aria-label="Next"
//               >
//                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </button>
//             </div>

//             <Link
//               to="/portfolio"
//               className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-blue-600 hover:text-white"
//             >
//               Full Gallery
//             </Link>
//           </div>
//         </div>

//         {/* Main Display Grid */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.4, ease: "circOut" }}
//               className="grid gap-8 lg:grid-cols-12"
//             >
//               {/* Interactive Visual Showcase (8 Columns) */}
//               <div className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 aspect-video sm:h-125 cursor-crosshair">
//                 {/* AFTER IMAGE (The "Result") */}
//                 <img
//                   src={item.afterImg}
//                   alt="After detailing"
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//                 <div className="absolute top-6 right-6 z-20 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/40">
//                   Pro Result
//                 </div>

//                 {/* BEFORE IMAGE (The "Curtain") */}
//                 <motion.div
//                   className="absolute inset-0 z-10 overflow-hidden border-r-2 border-blue-500/50 shadow-[15px_0_30px_rgba(0,0,0,0.5)]"
//                   initial={{ width: "50%" }}
//                   whileHover={{ width: "15%" }}
//                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                 >
//                   <img
//                     src={item.beforeImg}
//                     alt="Before detailing"
//                     className="h-full w-[80vw] max-w-none object-cover brightness-[0.7] grayscale-[0.3]"
//                     style={{ width: "1000px" }} // Set a fixed large width so it doesn't squish when the container shrinks
//                   />
//                   <div className="absolute top-6 left-6 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
//                     Original State
//                   </div>
//                 </motion.div>

//                 {/* Interactive Hint */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
//                   <div className="bg-zinc-950/80 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10">
//                     <MousePointer2
//                       size={14}
//                       className="text-blue-500 animate-bounce"
//                     />
//                     Hover to reveal
//                   </div>
//                 </div>
//               </div>

//               {/* Information Panel (4 Columns) */}
//               <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
//                     <MapPin className="h-3.5 w-3.5 text-blue-500" />{" "}
//                     {item.location}
//                   </div>
//                   <h3 className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <div className="relative rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm overflow-hidden group">
//                   {/* Decorative quote mark */}
//                   <span className="absolute -top-2 -right-2 text-6xl font-serif text-white/5 select-none">
//                     "
//                   </span>
//                   <p className="relative z-10 text-zinc-400 text-sm leading-relaxed italic font-medium">
//                     {item.notes}
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
//                     Key Treatments
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {item.tags?.map((t) => (
//                       <span
//                         key={t}
//                         className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/10 bg-blue-500/5 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-400"
//                       >
//                         <CheckCircle2 className="h-3 w-3" />
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer Link */}
//                 <div className="flex items-center justify-between pt-6 border-t border-white/5">
//                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700">
//                     Project <span className="text-white">{i + 1}</span>{" "}
//                     <span className="mx-2 text-zinc-800">/</span> {items.length}
//                   </div>
//                   <Link
//                     to={`/portfolio/${item.id}`}
//                     className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
//                   >
//                     View Case Study{" "}
//                     <ArrowRight
//                       size={12}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                   </Link>
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
  Camera,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolio";

export default function PreviousWorkSlider({ limit = 4 }) {
  const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
  const [i, setI] = useState(0);

  // New state for smooth slider tracking (works on mobile too)
  const [sliderPos, setSliderPos] = useState(50);

  const item = items[i];

  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  // Smooth slider handler for Mouse and Touch
  const handleMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = (e.pageX || e.touches[0].pageX) - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  if (!item) return null;

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24" id="work">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Camera className="h-3 w-3" /> Recent Transformations
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase">
              The <span className="text-zinc-500 italic">Finish</span> Line
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-2 mr-4">
              <button
                onClick={prev}
                className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={next}
                className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-blue-600 hover:text-white"
            >
              Full Gallery
            </Link>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="grid gap-8 lg:grid-cols-12 items-center"
            >
              {/* FIX 2: Added 'isolate' and fixed aspect-ratio container to prevent overlap */}
              <div
                className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 aspect-video isolate touch-none cursor-ew-resize"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                {/* AFTER IMAGE */}
                <img
                  src={item.afterImg}
                  alt="After"
                  className="absolute inset-0 h-full w-full object-cover select-none"
                />
                <div className="absolute top-6 right-6 z-20 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                  Pro Result
                </div>

                {/* BEFORE IMAGE (The Curtain) */}
                {/* FIX 1: Using style.width for pixel-perfect smooth movement */}
                <motion.div
                  className="absolute inset-0 z-10 overflow-hidden border-r-2 border-blue-500 shadow-[10px_0_20px_rgba(0,0,0,0.5)]"
                  style={{ width: `${sliderPos}%` }}
                  transition={{ type: "spring", bounce: 0, duration: 0.1 }}
                >
                  <div className="relative h-full w-250 sm:w-300">
                    <img
                      src={item.beforeImg}
                      alt="Before"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.7] grayscale-[0.3] select-none"
                      style={{ width: "calc(100vw * 0.66)" }} // Keeps image scale consistent
                    />
                  </div>
                  <div className="absolute top-6 left-6 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                    Original State
                  </div>
                </motion.div>

                {/* Slider Handlebar */}
                <div
                  className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-zinc-400" />
                      <div className="w-0.5 h-3 bg-zinc-400" />
                    </div>
                  </div>
                </div>

                {/* FIX 3: Hint disappears on touch/move */}
                <div
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-500 ${sliderPos !== 50 ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="bg-zinc-950/80 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10">
                    <MousePointer2
                      size={14}
                      className="text-blue-500 animate-pulse"
                    />
                    Slide to reveal
                  </div>
                </div>
              </div>

              {/* Information Panel */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin className="h-3.5 w-3.5 text-blue-500" />{" "}
                    {item.location}
                  </div>
                  <h3 className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                    {item.title}
                  </h3>
                </div>

                <div className="relative rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="absolute -top-2 -right-2 text-6xl font-serif text-white/5 select-none">
                    "
                  </span>
                  <p className="relative z-10 text-zinc-400 text-sm leading-relaxed italic font-medium">
                    {item.notes}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    Key Treatments
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/10 bg-blue-500/5 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-400"
                      >
                        <CheckCircle2 className="h-3 w-3" /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700">
                    Project <span className="text-white">{i + 1}</span> /{" "}
                    {items.length}
                  </div>
                  {/* <Link
                    to={`/portfolio/${item.id}`}
                    className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                  >
                    View Details{" "}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
