// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   Star,
//   Quote,
//   MessageSquare,
// } from "lucide-react";

// const REVIEWS = [
//   {
//     name: "Sarah M.",
//     title: "Full Detail Package",
//     text: "Absolutely spotless. The interior looks brand new and the paint has a deep glossy finish. Super professional and arrived exactly on time.",
//   },
//   {
//     name: "James T.",
//     title: "Exterior Polish",
//     text: "Swirls removed and the shine is unreal. Great attention to detail, and the convenience of mobile service is a game-changer.",
//   },
//   {
//     name: "Amina K.",
//     title: "Ceramic Coating",
//     text: "The coating made a huge difference — water beads right off. Friendly service, clear pricing, and amazing results.",
//   },
//   {
//     name: "Tom R.",
//     title: "Express Wash",
//     text: "Quick but thorough. Wheels and paintwork came up brilliantly. Perfect for a maintenance clean between details.",
//   },
// ];

// function StarsRow() {
//   return (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
//       ))}
//     </div>
//   );
// }

// export default function TestimonialSlider() {
//   const [index, setIndex] = useState(0);
//   const review = REVIEWS[index];

//   useEffect(() => {
//     const t = setInterval(
//       () => setIndex((p) => (p + 1) % REVIEWS.length),
//       6000, // Slightly slower for better readability
//     );
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section
//       id="reviews"
//       className="relative bg-zinc-950 py-24 overflow-hidden"
//     >
//       {/* Ambient Glow */}
//       <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px]" />

//       <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
//           {/* Left Column: Heading & Trust */}
//           <div className="space-y-8">
//             <div>
//               <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">
//                 <MessageSquare className="h-3 w-3" /> Client Voices
//               </div>
//               <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
//                 Real Results. <br />
//                 <span className="text-zinc-600 italic">Real People.</span>
//               </h2>
//               <p className="mt-6 text-lg text-zinc-400 max-w-sm leading-relaxed">
//                 Don't just take our word for it. See what our clients in your
//                 area are saying about their transformation.
//               </p>
//             </div>

//             {/* Google Trust Box */}
//             <div className="inline-flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
//               <div className="text-4xl font-black text-white">5.0</div>
//               <div className="h-10 w-px bg-white/10" />
//               <div>
//                 <StarsRow />
//                 <div className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
//                   Average Google Rating
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: The Review Card */}
//           <div className="relative">
//             {/* Decorative Quote Icon behind card */}
//             <Quote className="absolute -top-10 -right-6 h-32 w-32 text-white/5 rotate-180" />

//             <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl shadow-black/50 sm:p-12">
//               {/* Card Header (Nav) */}
//               <div className="mb-8 flex items-center justify-between">
//                 <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
//                   Recent Feedback
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() =>
//                       setIndex((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
//                     }
//                     className="group rounded-full border border-white/5 bg-zinc-800 p-3 text-zinc-400 transition hover:bg-blue-600 hover:text-white"
//                   >
//                     <ArrowLeft className="h-4 w-4" />
//                   </button>
//                   <button
//                     onClick={() => setIndex((p) => (p + 1) % REVIEWS.length)}
//                     className="group rounded-full border border-white/5 bg-zinc-800 p-3 text-zinc-400 transition hover:bg-blue-600 hover:text-white"
//                   >
//                     <ArrowRight className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Animated Content */}
//               <div className="min-h-[220px] flex flex-col justify-between">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.4, ease: "circOut" }}
//                   >
//                     <StarsRow />

//                     <p className="mt-6 text-xl font-medium leading-relaxed text-zinc-200">
//                       "{review.text}"
//                     </p>

//                     <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
//                       <div className="flex items-center gap-3">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-black text-white">
//                           {review.name.charAt(0)}
//                         </div>
//                         <div>
//                           <div className="text-sm font-bold text-white">
//                             {review.name}
//                           </div>
//                           <div className="text-xs text-zinc-500">
//                             {review.title}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-500">
//                         <CheckCircle2 className="h-3 w-3" /> Verified
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               {/* CTA inside card */}
//               <div className="mt-8 pt-6 border-t border-white/5">
//                 <a
//                   href="#quote"
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
//                 >
//                   Get Similar Results <ArrowRight className="h-4 w-4" />
//                 </a>
//                 <p className="mt-4 text-center text-[10px] text-zinc-600">
//                   * Note for demo: These serve as placeholders for your real
//                   Google Reviews.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Sutton Coldfield",
    title: "Full Detail Package",
    text: "Absolutely spotless. The interior looks brand new and the paint has a deep glossy finish. Super professional and arrived exactly on time.",
    type: "Local Guide",
  },
  {
    name: "James T.",
    location: "Solihull",
    title: "Exterior Polish",
    text: "Swirls removed and the shine is unreal. Great attention to detail, and the convenience of mobile service is a game-changer.",
    type: "Verified Customer",
  },
  {
    name: "Amina K.",
    location: "Edgbaston",
    title: "Ceramic Coating",
    text: "The coating made a huge difference — water beads right off. Friendly service, clear pricing, and amazing results.",
    type: "Local Guide",
  },
];

function StarsRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const review = REVIEWS[index];

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % REVIEWS.length),
      8000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="reviews"
      className="relative bg-zinc-950 py-24 overflow-hidden border-t border-white/5"
    >
      {/* Background Polish */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Trust (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">
                <ShieldCheck className="h-3 w-3" /> 100% Verified Feedback
              </div>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.9] sm:text-7xl">
                The{" "}
                <span className="text-zinc-700 italic font-light">
                  Reputation.
                </span>
              </h2>
              <p className="mt-8 text-lg text-zinc-400 max-w-sm leading-relaxed font-medium">
                We take pride in every mirror-finish. Here is why Birmingham car
                owners trust Royal Shine.
              </p>
            </div>

            {/* Google Authority Box */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all hover:border-blue-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2.5 shadow-xl">
                  {/* Google G-Logo Placeholder Visual */}
                  <svg viewBox="0 0 24 24" className="h-full w-full">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-white">5.0</span>
                    <StarsRow />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Based on 48+ Google Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Review Card (Span 7) */}
          <div className="lg:col-span-7 relative">
            <Quote className="absolute -top-12 -right-4 h-32 w-32 text-blue-500/10 rotate-12" />

            <div className="relative rounded-[3rem] border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-md shadow-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col gap-8">
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center text-lg font-black text-blue-500 shadow-inner">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-white uppercase tracking-tight">
                              {review.name}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-zinc-700" />
                            <span className="text-[10px] font-bold text-blue-500 uppercase">
                              {review.type}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-500 font-medium">
                            {review.location}
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <StarsRow />
                      </div>
                    </div>

                    {/* Review Body */}
                    <blockquote className="text-2xl font-medium leading-tight text-zinc-200 tracking-tight sm:text-3xl">
                      "{review.text}"
                    </blockquote>

                    {/* Bottom Meta */}
                    <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/5">
                      <div className="flex items-center gap-2 rounded-lg bg-blue-500/5 px-3 py-1.5 border border-blue-500/10">
                        <CheckCircle2 size={12} className="text-blue-500" />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                          {review.title}
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                        Verified via Google Mobile
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute -bottom-6 right-12 flex gap-3">
                <button
                  onClick={() =>
                    setIndex((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
                  }
                  className="h-12 w-12 rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-2xl transition hover:bg-blue-600 flex items-center justify-center"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => setIndex((p) => (p + 1) % REVIEWS.length)}
                  className="h-12 w-12 rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-2xl transition hover:bg-blue-600 flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
