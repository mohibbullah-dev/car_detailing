// import { motion } from "framer-motion";
// import { ChevronRight, Zap, Star } from "lucide-react";
// import { business } from "../data/business";

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[90vh] overflow-hidden bg-zinc-950 pt-20 flex items-center justify-center"
//     >
//       {/* --- Premium Background Layer --- */}
//       <div className="absolute inset-0 z-0 text-center">
//         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 h-[60%] w-[60%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse" />
//         <img
//           src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
//           className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
//           alt="Luxury Car Detail"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950 to-zinc-950" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center flex flex-col items-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8"
//         >
//           <Zap className="h-3 w-3 fill-blue-400" />
//           The Gold Standard of Mobile Detailing
//         </motion.div>

//         {/* Main Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-6xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl lg:text-[120px] uppercase mb-8"
//         >
//           Showroom <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
//             Perfection
//           </span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="max-w-2xl text-lg sm:text-xl text-zinc-400 font-medium mb-10 leading-relaxed italic"
//         >
//           Professional mobile detailing at your doorstep in {business.city}. We
//           restore, protect, and maintain your vehicle to its peak condition.
//         </motion.p>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col items-center gap-8"
//         >
//           <a
//             href="#quote"
//             className="group relative flex items-center gap-3 rounded-2xl bg-blue-600 px-12 py-6 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:-translate-y-1"
//           >
//             Get an Instant Quote
//             <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </a>

//           {/* Social Proof Social Proof */}
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <div className="flex items-center gap-1 text-amber-500">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={14} fill="currentColor" />
//               ))}
//               <span className="ml-2 text-white font-black text-xs uppercase tracking-widest">
//                 5.0 Rated
//               </span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700" />
//             <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
//               Trusted by <span className="text-white">200+</span> Local Owners
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
//         <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ChevronRight, Zap, Star, ShieldCheck } from "lucide-react";
import { business } from "../data/business";

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-zinc-950 flex items-center justify-center"
    >
      {/* --- Premium Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70%] w-[70%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          alt="Luxury Car Detail"
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center flex flex-col items-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10 shadow-xl"
        >
          <Zap className="h-3 w-3 fill-blue-400" />
          The Gold Standard of Mobile Detailing
        </motion.div>

        {/* Main Title - Extreme Impact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10"
        >
          <h1 className="text-[14vw] sm:text-[10vw] lg:text-[140px] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
            Showroom <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
              Perfection
              {/* Subtle Glow behind the main word */}
              <span className="absolute inset-0 blur-2xl bg-blue-500/20 -z-10" />
            </span>
          </h1>
        </motion.div>

        {/* Subtext - Better spacing and weight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-zinc-400 font-medium mb-12 leading-relaxed text-sm sm:text-base lg:text-lg border-l-2 border-blue-600/30 pl-6 text-left"
        >
          Professional mobile detailing at your doorstep in{" "}
          <span className="text-white font-bold">{business.city}</span>.
          Expertly restoring your vehicle to its peak aesthetic condition with
          ceramic-grade protection.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-10 w-full"
        >
          <button
            onClick={onOpenBooking}
            className="group relative flex items-center gap-4 rounded-full bg-blue-600 px-10 py-5 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95"
          >
            Get an Instant Quote
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Luxury Proof Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-t border-white/5 pt-10 w-full max-w-2xl">
            <div className="flex flex-col items-center sm:items-end gap-1">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-white font-black text-[10px] uppercase tracking-widest">
                5.0 Rated Master Detailing
              </span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="h-10 w-[1px] bg-zinc-800 hidden sm:block" />
              <div className="text-left">
                <div className="flex items-center gap-2 text-emerald-500 mb-0.5">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    Verified Service
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                  Trusted by <span className="text-white">200+</span> Local
                  Owners
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.4em] font-black">
          Explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
