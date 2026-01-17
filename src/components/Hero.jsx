// import { motion } from "framer-motion";
// import { Car, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
// import { business } from "../data/business";

// /** Replace these two image links anytime */
// const BEFORE_IMG =
//   "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80";
// const AFTER_IMG =
//   "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80";

// function Badge({ children }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900">
//       <Sparkles className="h-4 w-4 text-blue-700" />
//       {children}
//     </span>
//   );
// }

// function PrimaryButton({ children, href }) {
//   return (
//     <a
//       href={href}
//       className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
//     >
//       {children}
//     </a>
//   );
// }

// function SecondaryButton({ children, href }) {
//   return (
//     <a
//       href={href}
//       className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100"
//     >
//       {children}
//     </a>
//   );
// }

// function ImageBox({ label, src, caption }) {
//   return (
//     <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
//       <div className="text-xs font-semibold text-zinc-600">{label}</div>

//       {/* Image */}
//       <img
//         src={src}
//         alt={`${label} car detailing`}
//         className="mt-3 h-40 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//         loading="lazy"
//       />

//       {/* Caption */}
//       <div className="mt-3 text-xs text-zinc-500">{caption}</div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section id="top" className="relative overflow-hidden bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55, ease: "easeOut" }}
//             className="space-y-6"
//           >
//             <Badge>
//               Outreach Demo • Serving within {business.serviceRadiusMiles} miles
//               • 5★ Rated
//             </Badge>

//             <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
//               Premium Car Detailing in {business.city} — We Bring the Shine to
//               You.
//             </h1>

//             <p className="text-base text-zinc-600 sm:text-lg">
//               Professional mobile detailing at your home or workplace. Interior
//               deep cleans, exterior polishing, and long-lasting ceramic
//               protection — finished with a premium touch.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <PrimaryButton href="#quote">
//                 Get a Quote <CheckCircle2 className="h-4 w-4" />
//               </PrimaryButton>
//               <SecondaryButton href="#services">
//                 View Services <Sparkles className="h-4 w-4" />
//               </SecondaryButton>
//             </div>

//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
//               {[
//                 {
//                   icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
//                   title: "Insured",
//                   desc: "Care you can trust",
//                 },
//                 {
//                   icon: <Sparkles className="h-5 w-5 text-blue-700" />,
//                   title: "Premium Finish",
//                   desc: "Detail-level results",
//                 },
//                 {
//                   icon: <Car className="h-5 w-5 text-blue-700" />,
//                   title: "Mobile Service",
//                   desc: "We come to you",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <div className="text-sm font-bold text-zinc-900">
//                         {item.title}
//                       </div>
//                       <div className="text-xs text-zinc-600">{item.desc}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
//             className="relative"
//           >
//             <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-sm font-extrabold text-zinc-900">
//                     Before → After
//                   </div>
//                   <div className="text-xs text-zinc-500">
//                     Premium transformation
//                   </div>
//                 </div>
//                 <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1">
//                   <Star
//                     className="h-4 w-4 text-amber-500"
//                     fill="currentColor"
//                   />
//                   <span className="text-xs font-bold text-zinc-900">5.0</span>
//                   <span className="text-xs text-zinc-500">(Google)</span>
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                 <ImageBox
//                   label="Before"
//                   src={BEFORE_IMG}
//                   caption="Light swirls • Dust • Marks"
//                 />
//                 <ImageBox
//                   label="After"
//                   src={AFTER_IMG}
//                   caption="Gloss • Depth • Protection"
//                 />
//               </div>

//               <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white">
//                     <Sparkles className="h-5 w-5 text-blue-700" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-sm font-bold text-zinc-900">
//                       Same-week appointments
//                     </div>
//                     <div className="text-xs text-zinc-600">
//                       Message us for availability in {business.city}.
//                     </div>
//                   </div>
//                   <a
//                     href={`tel:${business.phoneTel}`}
//                     className="text-xs font-bold text-blue-700 hover:text-blue-800"
//                   >
//                     Call
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-700/10 blur-2xl" />
//             <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-zinc-900/5 blur-2xl" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronRight,
} from "lucide-react";
import { business } from "../data/business";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-zinc-950 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops)) from-blue-900/20 via-zinc-950 to-zinc-950"></div>
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          alt="Luxury Car Detail"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        {/* Left Side: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-3/5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Mobile Detailing in {business.city}
          </div>

          <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl lg:text-8xl uppercase mb-8">
            Showroom <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              Perfection
            </span>{" "}
            <br />
            Delivered.
          </h1>

          <p className="max-w-xl text-lg text-zinc-400 font-medium mb-10 leading-relaxed">
            Professional mobile detailing at your doorstep. We use
            industry-leading ceramic coatings and deep-clean techniques to
            restore your vehicle to its peak condition.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#quote"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all"
            >
              Book Your Detail <ChevronRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-800 animate-pulse"
                  />
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Joined by 200+ <br />
                Local Owners
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Trust & Comparison Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16 lg:mt-0 lg:w-2/5"
        >
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-black uppercase tracking-widest text-white">
                Live Transformations
              </div>
              <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-bold text-white">
                <Star className="h-3 w-3 text-amber-500 fill-amber-500" /> 5.0
                Rating
              </div>
            </div>

            {/* Visual Comparison Area */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
                className="h-full w-full object-cover"
                alt="Detailing Result"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-zinc-950/80 p-3 backdrop-blur-md border border-white/5">
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">
                  Latest Project
                </div>
                <div className="text-xs font-bold text-white uppercase italic">
                  Ceramic Pro Coating — Tesla Model 3
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-zinc-800/50 p-4">
                <ShieldCheck className="h-5 w-5 text-blue-500 mb-2" />
                <div className="text-xs font-black text-white uppercase mb-1">
                  Insured
                </div>
                <div className="text-[10px] text-zinc-500 leading-tight">
                  Full coverage for your peace of mind.
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-zinc-800/50 p-4">
                <Sparkles className="h-5 w-5 text-blue-500 mb-2" />
                <div className="text-xs font-black text-white uppercase mb-1">
                  Mobile
                </div>
                <div className="text-[10px] text-zinc-500 leading-tight">
                  We come to you with power & water.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
