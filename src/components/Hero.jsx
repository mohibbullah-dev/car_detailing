// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   ChevronRight,
// } from "lucide-react";
// import { business } from "../data/business";

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-screen overflow-hidden bg-zinc-950 pt-20"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops)) from-blue-900/20 via-zinc-950 to-zinc-950"></div>
//         <img
//           src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
//           className="w-full h-full object-cover opacity-30 mix-blend-overlay"
//           alt="Luxury Car Detail"
//         />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
//         {/* Left Side: Copy */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="lg:w-3/5"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8">
//             <Sparkles className="h-3.5 w-3.5" />
//             Premium Mobile Detailing in {business.city}
//           </div>

//           <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl lg:text-8xl uppercase mb-8">
//             Showroom <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
//               Perfection
//             </span>{" "}
//             <br />
//             Delivered.
//           </h1>

//           <p className="max-w-xl text-lg text-zinc-400 font-medium mb-10 leading-relaxed">
//             Professional mobile detailing at your doorstep. We use
//             industry-leading ceramic coatings and deep-clean techniques to
//             restore your vehicle to its peak condition.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <a
//               href="#quote"
//               className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all"
//             >
//               Book Your Detail <ChevronRight className="h-4 w-4" />
//             </a>
//             <div className="flex items-center gap-3 px-4">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-800 animate-pulse"
//                   />
//                 ))}
//               </div>
//               <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
//                 Joined by 200+ <br />
//                 Local Owners
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side: Trust & Comparison Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mt-16 lg:mt-0 lg:w-2/5"
//         >
//           <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-xl shadow-2xl">
//             <div className="flex items-center justify-between mb-6">
//               <div className="text-xs font-black uppercase tracking-widest text-white">
//                 Live Transformations
//               </div>
//               <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-bold text-white">
//                 <Star className="h-3 w-3 text-amber-500 fill-amber-500" /> 5.0
//                 Rating
//               </div>
//             </div>

//             {/* Visual Comparison Area */}
//             <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5">
//               <img
//                 src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
//                 className="h-full w-full object-cover"
//                 alt="Detailing Result"
//               />
//               <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-zinc-950/80 p-3 backdrop-blur-md border border-white/5">
//                 <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">
//                   Latest Project
//                 </div>
//                 <div className="text-xs font-bold text-white uppercase italic">
//                   Ceramic Pro Coating — Tesla Model 3
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="rounded-2xl border border-white/5 bg-zinc-800/50 p-4">
//                 <ShieldCheck className="h-5 w-5 text-blue-500 mb-2" />
//                 <div className="text-xs font-black text-white uppercase mb-1">
//                   Insured
//                 </div>
//                 <div className="text-[10px] text-zinc-500 leading-tight">
//                   Full coverage for your peace of mind.
//                 </div>
//               </div>
//               <div className="rounded-2xl border border-white/5 bg-zinc-800/50 p-4">
//                 <Sparkles className="h-5 w-5 text-blue-500 mb-2" />
//                 <div className="text-xs font-black text-white uppercase mb-1">
//                   Mobile
//                 </div>
//                 <div className="text-[10px] text-zinc-500 leading-tight">
//                   We come to you with power & water.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Star, ChevronRight, Zap } from "lucide-react";
import { business } from "../data/business";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-zinc-950 pt-20 flex items-center"
    >
      {/* --- Premium Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Glows */}
        <div className="absolute top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-zinc-600/5 blur-[140px]" />

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          alt="Luxury Car Detail"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-16">
        {/* --- Left Side: Copy --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-3/5"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8"
          >
            <Zap className="h-3 w-3 fill-blue-400" />
            Premium Mobile Detailing in {business.city}
          </motion.div>

          <h1 className="text-6xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl lg:text-9xl uppercase mb-8">
            Showroom <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              Perfection
            </span>{" "}
            <br />
            Delivered.
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-zinc-400 font-medium mb-10 leading-relaxed italic">
            Professional detailing at your doorstep. We use industry-leading
            ceramic coatings to restore your vehicle to its peak condition.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            {/* Shimmering Button */}
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden flex items-center gap-2 rounded-2xl bg-blue-600 px-10 py-5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Detail{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </motion.a>

            <div className="flex items-center gap-4 px-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="client"
                      className="opacity-80"
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500">
                Joined by <span className="text-white">200+</span> <br />
                Local Owners
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Side: Floating Transformation Card --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, // Floating effect
          }}
          style={{ y: [0, -20, 0] }} // Framer motion floating sequence
          className="mt-16 lg:mt-0 lg:w-2/5 relative"
        >
          {/* External Glow behind card */}
          <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl opacity-50" />

          <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-5 px-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                  Transformation Live
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-bold text-blue-400">
                <Star className="h-3 w-3 fill-blue-400" /> 5.0
              </div>
            </div>

            {/* Visual Comparison Area */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Detailing Result"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">
                  <Sparkles size={10} /> Latest Result
                </div>
                <div className="text-lg font-black text-white uppercase tracking-tighter italic leading-none">
                  Ceramic Pro <br /> Tesla Model 3
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <ShieldCheck className="h-5 w-5 text-blue-500 mb-2" />
                <div className="text-[10px] font-black text-white uppercase mb-1 tracking-widest">
                  Insured
                </div>
                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">
                  Peace of Mind
                </div>
              </div>
              <div className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <Sparkles className="h-5 w-5 text-blue-500 mb-2" />
                <div className="text-[10px] font-black text-white uppercase mb-1 tracking-widest">
                  Mobile
                </div>
                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">
                  We Come To You
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white">
          Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
