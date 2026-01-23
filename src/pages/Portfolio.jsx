// import { usePortfolioList } from "../hooks/usePortfolio";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   Camera,
//   MapPin,
//   Sparkles,
//   AlertCircle,
//   Loader2,
//   ArrowRight,
// } from "lucide-react";

// export default function Portfolio() {
//   const { data, isLoading, error } = usePortfolioList();

//   return (
//     <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
//       {/* Background Glow */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[10%] right-[5%] h-[50%] w-[50%] rounded-full bg-blue-600/5 blur-[140px]" />
//         <div className="absolute bottom-[10%] left-[5%] h-[40%] w-[40%] rounded-full bg-blue-900/5 blur-[120px]" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
//         {/* Header Section */}
//         <header className="mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6"
//           >
//             <Camera className="h-3 w-3" /> Visual Gallery
//           </motion.div>
//           <h1 className="text-5xl font-black text-white tracking-tighter uppercase sm:text-7xl lg:text-8xl italic">
//             The Finish{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-500 not-italic">
//               Line.
//             </span>
//           </h1>
//           <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-500 leading-relaxed font-medium">
//             A curated showcase of our recent detailing projects. From daily
//             drivers to luxury showpieces, restored to{" "}
//             <span className="text-white">absolute perfection.</span>
//           </p>
//         </header>

//         {/* State Handling */}
//         {isLoading ? (
//           <div className="flex flex-col items-center justify-center py-32 rounded-[3rem] glass border-white/5">
//             <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-6" />
//             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
//               Fetching Portfolio...
//             </p>
//           </div>
//         ) : error ? (
//           <div className="flex flex-col items-center justify-center py-20 rounded-[3rem] glass border-red-500/20">
//             <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
//             <p className="text-xs font-black uppercase tracking-widest text-red-400">
//               Failed to load work: {error.message}
//             </p>
//           </div>
//         ) : !data?.length ? (
//           <div className="flex flex-col items-center justify-center py-20 rounded-[3rem] glass border-white/5 text-center">
//             <Sparkles className="h-10 w-10 text-zinc-700 mb-4" />
//             <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
//               No projects uploaded yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
//             {data.map((item, idx) => (
//               <motion.div
//                 key={item._id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative glass rounded-[2.5rem] p-5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:border-blue-500/30"
//               >
//                 {/* Logic: Link remains exactly as you had it */}
//                 <Link
//                   to={`/portfolio/${item._id}`}
//                   className="absolute inset-0 z-30 cursor-pointer"
//                   aria-label={`View details for ${item.title}`}
//                 />

//                 {/* Image Container with Aspect Ratio Logic */}
//                 <div className="relative grid grid-cols-2 gap-3 z-10 overflow-hidden">
//                   <div className="relative overflow-hidden rounded-2xl">
//                     <span className="absolute left-2 top-2 z-10 rounded-lg glass px-2 py-1 text-[7px] font-black uppercase tracking-widest text-white/70">
//                       Before
//                     </span>
//                     <img
//                       src={item.beforeUrl}
//                       alt="Before"
//                       className="h-44 w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="relative overflow-hidden rounded-2xl">
//                     <span className="absolute left-2 top-2 z-10 rounded-lg bg-blue-600 px-2 py-1 text-[7px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/40">
//                       After
//                     </span>
//                     <img
//                       src={item.afterUrl}
//                       alt="After"
//                       className="h-44 w-full object-cover transition-all duration-700 group-hover:scale-110 shadow-2xl"
//                       loading="lazy"
//                     />
//                   </div>
//                 </div>

//                 {/* Content Logic */}
//                 <div className="mt-8 px-2 space-y-4 z-10 relative">
//                   <div className="flex items-start justify-between gap-4">
//                     <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight leading-tight">
//                       {item.title}
//                     </h3>
//                     <div className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 glass rounded-xl text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
//                       <MapPin className="h-3 w-3 text-blue-500" />
//                       {item.location}
//                     </div>
//                   </div>
//                   <p className="text-xs leading-relaxed text-zinc-500 line-clamp-2 italic font-medium">
//                     "{item.notes}"
//                   </p>

//                   <div className="pt-4 border-t border-white/5 flex items-center justify-between">
//                     <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
//                       View Details
//                       <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                     </div>
//                     <Sparkles className="h-4 w-4 text-zinc-800" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

import { usePortfolioList } from "../hooks/usePortfolio";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera,
  MapPin,
  Sparkles,
  AlertCircle,
  Loader2,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const { data, isLoading, error } = usePortfolioList();

  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] h-[60%] w-[60%] rounded-full bg-blue-600/5 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] h-[40%] w-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* --- Refined Header Section --- */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8"
          >
            <Zap className="h-3 w-3 fill-blue-400" /> Professional Results
          </motion.div>

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-8">
            The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 not-italic">
              Finish Line.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-zinc-500 leading-relaxed font-medium border-l-2 border-blue-600/30 pl-6 italic">
            A curated showcase of our recent detailing projects. From daily
            drivers to luxury showpieces, restored to{" "}
            <span className="text-white font-bold uppercase tracking-widest text-[10px]">
              absolute perfection.
            </span>
          </p>
        </header>

        {/* --- State Handling --- */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40 rounded-[3rem] glass border-white/5">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-6 shadow-glow-blue" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
              Syncing Gallery...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-[3rem] glass border-red-500/20">
            <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-red-400">
              Connection Failed: {error.message}
            </p>
          </div>
        ) : !data?.length ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-[3rem] glass border-white/5 text-center">
            <Sparkles className="h-10 w-10 text-zinc-800 mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-zinc-600">
              Showroom is currently empty.
            </p>
          </div>
        ) : (
          /* --- Portfolio Grid --- */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {data.map((item, idx) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass rounded-[2.5rem] p-4 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-blue-500/40"
              >
                <Link
                  to={`/portfolio/${item._id}`}
                  className="absolute inset-0 z-30 cursor-pointer"
                  aria-label={`View ${item.title}`}
                />

                {/* Split Image Preview */}
                <div className="relative grid grid-cols-2 gap-2 z-10 overflow-hidden rounded-[2rem]">
                  <div className="relative h-48 overflow-hidden">
                    <span className="absolute left-3 top-3 z-10 rounded-lg bg-black/60 backdrop-blur-md px-2 py-1 text-[7px] font-black uppercase tracking-widest text-white/50">
                      Before
                    </span>
                    <img
                      src={item.beforeUrl}
                      alt="Before"
                      className="h-full w-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="relative h-48 overflow-hidden border-l border-blue-500/20">
                    <span className="absolute right-3 top-3 z-10 rounded-lg bg-blue-600 px-2 py-1 text-[7px] font-black uppercase tracking-widest text-white shadow-glow-blue">
                      After
                    </span>
                    <img
                      src={item.afterUrl}
                      alt="After"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>
                </div>

                {/* Content Logic */}
                <div className="mt-6 px-3 pb-4 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-500">
                      <MapPin size={10} />
                      <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">
                        {item.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tighter uppercase italic line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] leading-relaxed text-zinc-500 line-clamp-2 italic font-medium">
                    {item.notes}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
                      Explore Case
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
                    </div>
                    <Sparkles className="h-4 w-4 text-zinc-900 group-hover:text-blue-900 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
