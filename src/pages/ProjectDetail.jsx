// import React from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { usePortfolioList } from "../hooks/usePortfolio";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   MapPin,
//   Calendar,
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
// } from "lucide-react";

// export default function ProjectDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data, isLoading } = usePortfolioList();

//   if (isLoading)
//     return (
//       <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   if (!data) return null;

//   // Find current project and its index for pagination
//   const currentIndex = data.findIndex((p) => p._id === id);
//   const project = data[currentIndex];
//   const prevProject = data[currentIndex - 1];
//   const nextProject = data[currentIndex + 1];

//   if (!project)
//     return (
//       <div className="text-white py-24 text-center">Project not found</div>
//     );

//   return (
//     <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-4 sm:px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Navigation Top */}
//         <Link
//           to="/portfolio"
//           className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 mb-12 transition-colors uppercase text-[10px] font-black tracking-widest"
//         >
//           <ArrowLeft size={14} /> Back to Gallery
//         </Link>

//         <header className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full">
//               Verified Result
//             </span>
//             <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
//               <Calendar size={12} /> Recent Work
//             </span>
//           </div>
//           <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
//             {project.title}
//           </h1>
//           <div className="flex items-center gap-6 text-zinc-400">
//             <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
//               <MapPin size={16} className="text-blue-500" /> {project.location}
//             </span>
//           </div>
//         </header>

//         {/* Hero Comparison Area */}
//         <div className="grid gap-6 mb-20">
//           <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 shadow-2xl">
//             <img
//               src={project.afterUrl}
//               className="w-full aspect-[16/9] object-cover"
//               alt="Showroom Result"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
//             <div className="absolute bottom-8 left-8">
//               <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
//                 Final Finish
//               </p>
//               <h3 className="text-2xl font-bold italic group-hover:translate-x-2 transition-transform">
//                 Showroom Perfection.
//               </h3>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6">
//             <div className="bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8">
//               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-4 flex items-center gap-2">
//                 <ShieldCheck size={14} className="text-blue-500" /> The
//                 Assignment
//               </h4>
//               <p className="text-xl text-zinc-300 leading-relaxed italic">
//                 "{project.notes}"
//               </p>
//             </div>
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/5">
//               <span className="absolute left-4 top-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase">
//                 Initial State
//               </span>
//               <img
//                 src={project.beforeUrl}
//                 className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
//                 alt="Before"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Pagination System */}
//         <footer className="mt-20 pt-10 border-t border-white/5">
//           <div className="flex items-center justify-between">
//             {prevProject ? (
//               <Link
//                 to={`/portfolio/${prevProject._id}`}
//                 className="group flex flex-col items-start gap-2"
//               >
//                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2 group-hover:text-blue-500">
//                   <ChevronLeft size={14} /> Previous Project
//                 </span>
//                 <span className="text-lg font-bold text-zinc-400 group-hover:text-white transition-colors">
//                   {prevProject.title}
//                 </span>
//               </Link>
//             ) : (
//               <div />
//             )}

//             {nextProject ? (
//               <Link
//                 to={`/portfolio/${nextProject._id}`}
//                 className="group flex flex-col items-end gap-2 text-right"
//               >
//                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2 group-hover:text-blue-500">
//                   Next Project <ChevronRight size={14} />
//                 </span>
//                 <span className="text-lg font-bold text-zinc-400 group-hover:text-white transition-colors">
//                   {nextProject.title}
//                 </span>
//               </Link>
//             ) : (
//               <div />
//             )}
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePortfolioList } from "../hooks/usePortfolio";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Maximize2,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = usePortfolioList();

  if (isLoading)
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center text-white">
        <Zap className="h-10 w-10 text-blue-600 animate-pulse mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
          Decrypting Case Study...
        </p>
      </div>
    );

  if (!data) return null;

  const currentIndex = data.findIndex((p) => p._id === id);
  const project = data[currentIndex];
  const prevProject = data[currentIndex - 1];
  const nextProject = data[currentIndex + 1];

  if (!project)
    return (
      <div className="bg-obsidian min-h-screen text-white flex items-center justify-center italic font-black uppercase tracking-widest">
        Project Lost in Archive
      </div>
    );

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Top */}
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-3 text-zinc-500 hover:text-white mb-12 transition-all uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-2"
          />
          Return to Vault
        </Link>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg shadow-glow-blue">
              Master Detail
            </span>
            <span className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Calendar size={12} className="text-blue-500" /> Professional
              Grade
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  i % 2 === 0
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-500 not-italic"
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl border-white/5">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {project.location}
              </span>
            </div>
          </div>
        </header>

        {/* --- Bento Showroom Grid --- */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          {/* Main Hero View (After) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 relative group overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900 shadow-2xl"
          >
            <img
              src={project.afterUrl}
              className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Showroom Result"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">
                Final Outcome
              </p>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">
                Showroom Perfection.
              </h3>
            </div>
            <div className="absolute top-10 right-10 p-4 glass rounded-full opacity-0 group-hover:opacity-100 transition-all">
              <Maximize2 size={20} />
            </div>
          </motion.div>

          {/* Side Details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* The Assignment */}
            <div className="flex-1 glass bg-white/[0.02] border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-center">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 flex items-center gap-3">
                <ShieldCheck
                  size={16}
                  className="text-blue-500 shadow-glow-blue"
                />
                The Specs
              </h4>
              <p className="text-2xl text-white leading-tight italic font-bold tracking-tight">
                "{project.notes}"
              </p>
            </div>

            {/* Before Preview */}
            <div className="relative h-64 overflow-hidden rounded-[2.5rem] border border-white/5 group">
              <span className="absolute left-6 top-6 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/50 border border-white/10">
                Initial Condition
              </span>
              <img
                src={project.beforeUrl}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                alt="Before"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* --- Smart Pagination --- */}
        <footer className="mt-32 pt-12 border-t border-white/5">
          <div className="grid grid-cols-2 gap-4 sm:gap-12">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject._id}`}
                className="group flex flex-col items-start gap-4 p-8 glass rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-all"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-3 group-hover:text-blue-500 transition-colors">
                  <ChevronLeft size={14} /> Previous Entry
                </span>
                <span className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter text-zinc-400 group-hover:text-white transition-colors line-clamp-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/portfolio/${nextProject._id}`}
                className="group flex flex-col items-end gap-4 p-8 glass rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-all text-right"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-3 group-hover:text-blue-500 transition-colors">
                  Next Entry <ChevronRight size={14} />
                </span>
                <span className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter text-zinc-400 group-hover:text-white transition-colors line-clamp-1">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
