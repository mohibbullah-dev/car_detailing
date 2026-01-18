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

//   // New state for smooth slider tracking (works on mobile too)
//   const [sliderPos, setSliderPos] = useState(50);

//   const item = items[i];

//   const next = () => setI((p) => (p + 1) % items.length);
//   const prev = () => setI((p) => (p - 1 + items.length) % items.length);

//   // Smooth slider handler for Mouse and Touch
//   const handleMove = (e) => {
//     const container = e.currentTarget.getBoundingClientRect();
//     const x = (e.pageX || e.touches[0].pageX) - container.left;
//     const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
//     setSliderPos(percentage);
//   };

//   if (!item) return null;

//   return (
//     <section className="relative overflow-hidden bg-zinc-950 py-24" id="work">
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
//               >
//                 <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
//               </button>
//               <button
//                 onClick={next}
//                 className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white transition-all hover:border-blue-500 hover:text-blue-500"
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
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.4, ease: "circOut" }}
//               className="grid gap-8 lg:grid-cols-12 items-center"
//             >
//               {/* FIX 2: Added 'isolate' and fixed aspect-ratio container to prevent overlap */}
//               <div
//                 className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 aspect-video isolate touch-none cursor-ew-resize"
//                 onMouseMove={handleMove}
//                 onTouchMove={handleMove}
//               >
//                 {/* AFTER IMAGE */}
//                 <img
//                   src={item.afterImg}
//                   alt="After"
//                   className="absolute inset-0 h-full w-full object-cover select-none"
//                 />
//                 <div className="absolute top-6 right-6 z-20 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
//                   Pro Result
//                 </div>

//                 {/* BEFORE IMAGE (The Curtain) */}
//                 {/* FIX 1: Using style.width for pixel-perfect smooth movement */}
//                 <motion.div
//                   className="absolute inset-0 z-10 overflow-hidden border-r-2 border-blue-500 shadow-[10px_0_20px_rgba(0,0,0,0.5)]"
//                   style={{ width: `${sliderPos}%` }}
//                   transition={{ type: "spring", bounce: 0, duration: 0.1 }}
//                 >
//                   <div className="relative h-full w-250 sm:w-300">
//                     <img
//                       src={item.beforeImg}
//                       alt="Before"
//                       className="absolute inset-0 h-full w-full object-cover brightness-[0.7] grayscale-[0.3] select-none"
//                       style={{ width: "calc(100vw * 0.66)" }} // Keeps image scale consistent
//                     />
//                   </div>
//                   <div className="absolute top-6 left-6 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
//                     Original State
//                   </div>
//                 </motion.div>

//                 {/* Slider Handlebar */}
//                 <div
//                   className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize"
//                   style={{ left: `${sliderPos}%` }}
//                 >
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full shadow-xl flex items-center justify-center">
//                     <div className="flex gap-0.5">
//                       <div className="w-0.5 h-3 bg-zinc-400" />
//                       <div className="w-0.5 h-3 bg-zinc-400" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* FIX 3: Hint disappears on touch/move */}
//                 <div
//                   className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-500 ${sliderPos !== 50 ? "opacity-0" : "opacity-100"}`}
//                 >
//                   <div className="bg-zinc-950/80 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10">
//                     <MousePointer2
//                       size={14}
//                       className="text-blue-500 animate-pulse"
//                     />
//                     Slide to reveal
//                   </div>
//                 </div>
//               </div>

//               {/* Information Panel */}
//               <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
//                     <MapPin className="h-3.5 w-3.5 text-blue-500" />{" "}
//                     {item.location}
//                   </div>
//                   <h3 className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <div className="relative rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
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
//                         <CheckCircle2 className="h-3 w-3" /> {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between pt-6 border-t border-white/5">
//                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700">
//                     Project <span className="text-white">{i + 1}</span> /{" "}
//                     {items.length}
//                   </div>
//                   {/* <Link
//                     to={`/portfolio/${item.id}`}
//                     className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
//                   >
//                     View Details{" "}
//                     <ArrowRight
//                       size={12}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                   </Link> */}
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
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolio";

export default function PreviousWorkSlider({ limit = 4 }) {
  const items = useMemo(() => portfolioItems.slice(0, limit), [limit]);
  const [i, setI] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const item = items[i];

  const next = () => {
    setI((p) => (p + 1) % items.length);
    setSliderPos(50);
  };
  const prev = () => {
    setI((p) => (p - 1 + items.length) % items.length);
    setSliderPos(50);
  };

  const handleMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  if (!item) return null;

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24" id="work">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles className="h-3.5 w-3.5 fill-blue-500/20" /> Showroom
              Standards
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase leading-none">
              The{" "}
              <span className="text-zinc-700 italic font-light">
                Transformation.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="group grid h-14 w-14 place-items-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:bg-blue-600 hover:border-blue-600"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={next}
                className="group grid h-14 w-14 place-items-center rounded-full border border-white/5 bg-zinc-900/50 text-white transition-all hover:bg-blue-600 hover:border-blue-600"
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-12 lg:grid-cols-12 items-start"
            >
              {/* Interactive Slider Container */}
              <div
                className="lg:col-span-8 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 aspect-[16/10] sm:aspect-video isolate touch-none cursor-ew-resize shadow-2xl"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                {/* AFTER IMAGE (Base) */}
                <img
                  src={item.afterImg}
                  alt="After Detailing"
                  className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                />

                {/* BEFORE IMAGE (The Overlay) */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/20 shadow-[15px_0_30px_rgba(0,0,0,0.5)]"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="relative h-full w-[100vw] lg:w-[850px]">
                    <img
                      src={item.beforeImg}
                      alt="Before Detailing"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.6] grayscale-[0.2] select-none pointer-events-none"
                    />
                  </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                  <div className="rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/10">
                    Before
                  </div>
                </div>
                <div className="absolute top-6 right-6 z-20 pointer-events-none">
                  <div className="rounded-full bg-blue-600 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
                    Professional After
                  </div>
                </div>

                {/* Handlebar Visual Upgrade */}
                <div
                  className="absolute inset-y-0 z-30 w-0.5 bg-white/50 cursor-ew-resize"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                    <div className="relative h-10 w-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-zinc-300 rounded-full" />
                        <div className="w-1 h-3 bg-zinc-300 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Initial Help Hint */}
                <AnimatePresence>
                  {sliderPos === 50 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
                    >
                      <div className="bg-white px-6 py-3 rounded-2xl text-[10px] font-black text-black uppercase tracking-tighter flex items-center gap-3 shadow-2xl">
                        <MousePointer2 size={14} className="animate-bounce" />
                        Drag to compare
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Info Panel Upgrade */}
              <div className="lg:col-span-4 flex flex-col justify-start space-y-8 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-500 text-[11px] font-black uppercase tracking-widest">
                    <MapPin className="h-4 w-4" /> {item.location}
                  </div>
                  <h3 className="text-4xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                    {item.title}
                  </h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Camera size={40} />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic font-medium relative z-10">
                    "{item.notes}"
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-2">
                    Treatments Applied
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 rounded-lg bg-zinc-900 border border-white/5 px-3 py-2"
                      >
                        <CheckCircle2 size={12} className="text-blue-500" />
                        <span className="text-[10px] font-bold text-zinc-300 uppercase">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">
                    Client Showcase
                  </span>
                  <span className="text-xs font-black text-white italic">
                    {i + 1} / {items.length}
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
