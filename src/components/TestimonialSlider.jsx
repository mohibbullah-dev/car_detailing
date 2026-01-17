// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
// import { business } from "../data/business";

// const REVIEWS = [
//   {
//     name: "Sarah M.",
//     title: "Full Detail",
//     text: "Absolutely spotless. The interior looks brand new and the paint has a deep glossy finish. Super professional and arrived on time.",
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
//         <Star key={i} className="h-4 w-4 text-amber-500" fill="currentColor" />
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
//       5500,
//     );
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section id="reviews" className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//           <div className="space-y-3">
//             <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
//               Real Results. Real People.
//             </h2>
//             <p className="text-base text-zinc-600">
//               Demo reviews for outreach preview — you can swap with real Google
//               reviews later.
//             </p>

//             <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div className="text-sm font-extrabold text-zinc-900">
//                   Google Reviews
//                 </div>
//                 <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1">
//                   <StarsRow />
//                   <span className="text-xs font-bold text-zinc-900">5.0</span>
//                 </div>
//               </div>
//               <div className="mt-2 text-xs text-zinc-500">
//                 *Demo content for design preview
//               </div>
//             </div>
//           </div>

//           <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
//             <div className="flex items-center justify-between">
//               <div className="text-sm font-extrabold text-zinc-900">
//                 Customer Testimonial
//               </div>

//               <div className="flex items-center gap-2">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIndex((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
//                   }
//                   className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
//                   aria-label="Previous review"
//                 >
//                   <ArrowLeft className="h-4 w-4" />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIndex((p) => (p + 1) % REVIEWS.length)}
//                   className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
//                   aria-label="Next review"
//                 >
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             <div className="mt-5">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.35, ease: "easeOut" }}
//                   className="space-y-4"
//                 >
//                   <StarsRow />
//                   <p className="text-base leading-relaxed text-zinc-700">
//                     “{review.text}”
//                   </p>

//                   <div className="flex items-center justify-between gap-4 border-t border-zinc-200 pt-4">
//                     <div>
//                       <div className="text-sm font-extrabold text-zinc-900">
//                         {review.name}
//                       </div>
//                       <div className="text-xs text-zinc-500">
//                         {review.title}
//                       </div>
//                     </div>

//                     <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
//                       <CheckCircle2 className="h-4 w-4 text-blue-700" />
//                       Demo review
//                     </span>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="#quote"
//                 className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
//               >
//                 Get a Quote
//               </a>
//               <div className="mt-2 text-xs text-zinc-500">
//                 Outreach tip: this section builds trust when you send the demo
//                 link to Google Maps leads.
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
} from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    title: "Full Detail Package",
    text: "Absolutely spotless. The interior looks brand new and the paint has a deep glossy finish. Super professional and arrived exactly on time.",
  },
  {
    name: "James T.",
    title: "Exterior Polish",
    text: "Swirls removed and the shine is unreal. Great attention to detail, and the convenience of mobile service is a game-changer.",
  },
  {
    name: "Amina K.",
    title: "Ceramic Coating",
    text: "The coating made a huge difference — water beads right off. Friendly service, clear pricing, and amazing results.",
  },
  {
    name: "Tom R.",
    title: "Express Wash",
    text: "Quick but thorough. Wheels and paintwork came up brilliantly. Perfect for a maintenance clean between details.",
  },
];

function StarsRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
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
      6000, // Slightly slower for better readability
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="reviews"
      className="relative bg-zinc-950 py-24 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Heading & Trust */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">
                <MessageSquare className="h-3 w-3" /> Client Voices
              </div>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
                Real Results. <br />
                <span className="text-zinc-600 italic">Real People.</span>
              </h2>
              <p className="mt-6 text-lg text-zinc-400 max-w-sm leading-relaxed">
                Don't just take our word for it. See what our clients in your
                area are saying about their transformation.
              </p>
            </div>

            {/* Google Trust Box */}
            <div className="inline-flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-4xl font-black text-white">5.0</div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <StarsRow />
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Average Google Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Review Card */}
          <div className="relative">
            {/* Decorative Quote Icon behind card */}
            <Quote className="absolute -top-10 -right-6 h-32 w-32 text-white/5 rotate-180" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl shadow-black/50 sm:p-12">
              {/* Card Header (Nav) */}
              <div className="mb-8 flex items-center justify-between">
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Recent Feedback
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setIndex((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
                    }
                    className="group rounded-full border border-white/5 bg-zinc-800 p-3 text-zinc-400 transition hover:bg-blue-600 hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIndex((p) => (p + 1) % REVIEWS.length)}
                    className="group rounded-full border border-white/5 bg-zinc-800 p-3 text-zinc-400 transition hover:bg-blue-600 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Animated Content */}
              <div className="min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <StarsRow />

                    <p className="mt-6 text-xl font-medium leading-relaxed text-zinc-200">
                      "{review.text}"
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-black text-white">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">
                            {review.name}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {review.title}
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-500">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA inside card */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#quote"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
                >
                  Get Similar Results <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-center text-[10px] text-zinc-600">
                  * Note for demo: These serve as placeholders for your real
                  Google Reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
