// import { motion } from "framer-motion";
// import { ChevronRight, Zap, Star, ShieldCheck } from "lucide-react";
// import { business } from "../data/business";

// export default function Hero({ onOpenBooking }) {
//   return (
//     <section
//       id="top"
//       className="relative min-h-screen overflow-hidden bg-zinc-950 flex items-center justify-center"
//     >
//       {/* --- Premium Background Layer --- */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70%] w-[70%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
//         <img
//           src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
//           className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
//           alt="Luxury Car Detail"
//         />
//         {/* Deep Overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center flex flex-col items-center">
//         {/* Premium Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10 shadow-xl"
//         >
//           <Zap className="h-3 w-3 fill-blue-400" />
//           The Gold Standard of Mobile Detailing
//         </motion.div>

//         {/* Main Title - Extreme Impact */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative mb-10"
//         >
//           <h1 className="text-[14vw] sm:text-[10vw] lg:text-[140px] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
//             Showroom <br />
//             <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
//               Perfection
//               {/* Subtle Glow behind the main word */}
//               <span className="absolute inset-0 blur-2xl bg-blue-500/20 -z-10" />
//             </span>
//           </h1>
//         </motion.div>

//         {/* Subtext - Better spacing and weight */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="max-w-xl text-zinc-400 font-medium mb-12 leading-relaxed text-sm sm:text-base lg:text-lg border-l-2 border-blue-600/30 pl-6 text-left"
//         >
//           Professional mobile detailing at your doorstep in{" "}
//           <span className="text-white font-bold">{business.city}</span>.
//           Expertly restoring your vehicle to its peak aesthetic condition with
//           ceramic-grade protection.
//         </motion.p>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col items-center gap-10 w-full"
//         >
//           <button
//             onClick={onOpenBooking}
//             className="group relative flex items-center gap-4 rounded-full bg-blue-600 px-10 py-5 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95"
//           >
//             Get an Instant Quote
//             <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </button>

//           {/* Luxury Proof Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-t border-white/5 pt-10 w-full max-w-2xl">
//             <div className="flex flex-col items-center sm:items-end gap-1">
//               <div className="flex items-center gap-1 text-amber-500">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={14} fill="currentColor" />
//                 ))}
//               </div>
//               <span className="text-white font-black text-[10px] uppercase tracking-widest">
//                 5.0 Rated Master Detailing
//               </span>
//             </div>

//             <div className="flex items-center justify-center sm:justify-start gap-3">
//               <div className="h-10 w-[1px] bg-zinc-800 hidden sm:block" />
//               <div className="text-left">
//                 <div className="flex items-center gap-2 text-emerald-500 mb-0.5">
//                   <ShieldCheck size={14} />
//                   <span className="text-[10px] font-black uppercase tracking-tighter">
//                     Verified Service
//                   </span>
//                 </div>
//                 <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500">
//                   Trusted by <span className="text-white">200+</span> Local
//                   Owners
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
//         <span className="text-[8px] uppercase tracking-[0.4em] font-black">
//           Explore
//         </span>
//         <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent" />
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { ChevronRight, Zap, Star, ShieldCheck } from "lucide-react";
// import { business } from "../data/business";

// export default function Hero({ onOpenBooking }) {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[90vh] overflow-hidden bg-obsidian flex items-center justify-center pt-20"
//     >
//       {/* --- Premium Background Layer with Neon Accents --- */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[80%] w-[80%] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
//         <img
//           src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
//           className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
//           alt="Luxury Car Detail"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/90 to-obsidian" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 text-center flex flex-col items-center">
//         {/* Luxury Bento Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-3 rounded-2xl glass px-5 py-2.5 text-[9px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8 border-white/5 shadow-2xl"
//         >
//           <Zap className="h-3 w-3 fill-blue-400 shadow-glow-blue" />
//           Mobile Master Detailers
//         </motion.div>

//         {/* High-Impact Typography */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative mb-8"
//         >
//           <h1 className="text-[12vw] sm:text-[10vw] lg:text-[130px] font-black leading-[0.85] tracking-tighter text-white uppercase italic">
//             Precision <br />
//             <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
//               Restoration
//               <span className="absolute inset-0 blur-3xl bg-blue-500/30 -z-10" />
//             </span>
//           </h1>
//         </motion.div>

//         {/* Glass-Bordered Value Statement */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="max-w-2xl text-zinc-400 font-medium mb-14 leading-relaxed text-sm sm:text-base lg:text-lg border-l-2 border-blue-600/40 pl-8 text-left"
//         >
//           Experience showroom perfection at your doorstep in{" "}
//           <span className="text-white font-bold">{business.city}</span>. We
//           provide elite ceramic coating and paint correction services that
//           safeguard your vehicle's value.
//         </motion.p>

//         {/* Main Interaction Area */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col items-center gap-12 w-full"
//         >
//           <button
//             onClick={onOpenBooking}
//             className="group relative flex items-center gap-5 rounded-2xl bg-blue-600 px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-glow-blue transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95"
//           >
//             Get Professional Quote
//             <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </button>

//           {/* Social Proof Module */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center border-t border-white/5 pt-12 w-full max-w-2xl">
//             <div className="flex flex-col items-center sm:items-end gap-2">
//               <div className="flex items-center gap-1.5 text-amber-500">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={16}
//                     fill="currentColor"
//                     className="drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
//                   />
//                 ))}
//               </div>
//               <span className="text-white font-black text-[9px] uppercase tracking-[0.2em]">
//                 Elite Detailing Specialist
//               </span>
//             </div>

//             <div className="flex items-center justify-center sm:justify-start gap-5">
//               <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
//               <div className="text-left">
//                 <div className="flex items-center gap-2 text-blue-500 mb-1">
//                   <ShieldCheck size={16} className="shadow-glow-blue" />
//                   <span className="text-[10px] font-black uppercase tracking-widest">
//                     Guaranteed Finish
//                   </span>
//                 </div>
//                 <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-500">
//                   Trusted by <span className="text-white font-black">200+</span>{" "}
//                   Luxury Owners
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Explore Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
//         <span className="text-[8px] uppercase tracking-[0.5em] font-black text-blue-400">
//           The Gallery
//         </span>
//         <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
//       </div>
//     </section>
//   );
// }\
import { motion } from "framer-motion";
import { ChevronRight, Zap, Star, ShieldCheck, MapPin } from "lucide-react";
import { business } from "../data/business";

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] overflow-hidden bg-obsidian flex items-center justify-center pt-10 pb-10 px-4"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70%] w-[80%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          alt="Luxury Car Detail"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/90 to-obsidian" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-6xl glass rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* LEFT COLUMN: BRAND IMPACT */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-[8px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 w-fit">
              <Zap size={10} className="fill-blue-400" />
              Elite Mobile Detailing
            </div>

            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase italic">
                The
              </h1>
              {/* FIXED OVERFLOW: Reduced size to 5xl/6xl and tightened tracking */}
              <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black leading-none tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 uppercase italic">
                Transformation.
              </h1>
            </div>

            <p className="max-w-md text-zinc-400 font-medium mb-8 leading-relaxed text-sm border-l-2 border-blue-600/40 pl-6 italic">
              Restoring showroom perfection at your location in{" "}
              <span className="text-white font-bold">{business.city}</span>.
            </p>

            <button
              onClick={onOpenBooking}
              className="group w-fit flex items-center gap-4 rounded-xl bg-blue-600 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-glow-blue transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95"
            >
              Book Appointment
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* RIGHT COLUMN: DATA & PROOF */}
          <div className="lg:col-span-5 bg-white/[0.01] p-8 lg:p-12 flex flex-col justify-center gap-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-500">
                <MapPin size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Service Area
                </span>
              </div>
              <p className="text-lg font-black italic text-white uppercase tracking-tight">
                {business.city} & Surrounding
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-black text-white">5.0</span>
                </div>
                <p className="text-[7px] uppercase tracking-widest text-zinc-500 font-bold">
                  Google Rating
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-blue-500 mb-1">
                  <ShieldCheck size={12} />
                  <span className="text-[10px] font-black text-white">
                    200+
                  </span>
                </div>
                <p className="text-[7px] uppercase tracking-widest text-zinc-500 font-bold">
                  Verified Work
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Ceramic Coating", "Paint Correction", "Interior Detail"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-zinc-500"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
