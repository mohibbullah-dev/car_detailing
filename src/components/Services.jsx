// import { motion } from "framer-motion";
// import {
//   Car,
//   CheckCircle2,
//   ShieldCheck,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// export default function Services() {
//   const cards = [
//     {
//       icon: <Sparkles className="h-5 w-5 text-blue-700" />,
//       title: "Interior Deep Clean",
//       price: "From £60",
//       desc: "Seats, carpets, mats, plastics and trims — deep cleaned and refreshed for a premium feel.",
//       bullets: ["Vacuum + shampoo", "Stain attention", "Odour neutralising"],
//     },
//     {
//       icon: <Car className="h-5 w-5 text-blue-700" />,
//       title: "Exterior Polish",
//       price: "From £90",
//       desc: "Decontamination and polish to restore gloss, clarity and a slick, reflective finish.",
//       bullets: ["Wash + clay bar", "Single-stage polish", "Sealant protection"],
//     },
//     {
//       icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
//       title: "Full Ceramic Coating",
//       price: "From £200",
//       desc: "Long-lasting protection with deep shine and hydrophobic performance for easier maintenance.",
//       bullets: [
//         "Paint prep included",
//         "High-gloss finish",
//         "Durable protection",
//       ],
//     },
//   ];

//   return (
//     <section id="services" className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
//               Services
//             </h2>
//             <p className="mt-2 text-base text-zinc-600">
//               Choose a package that fits your car and your schedule — we handle
//               the rest.
//             </p>
//           </div>

//           <a
//             href="#quote"
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
//           >
//             Get a Quote <CheckCircle2 className="h-4 w-4" />
//           </a>
//         </div>

//         <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
//           {cards.map((c, idx) => (
//             <motion.div
//               key={c.title}
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.45,
//                 ease: "easeOut",
//                 delay: idx * 0.05,
//               }}
//               className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-white">
//                   {c.icon}
//                 </div>
//                 <div className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-extrabold text-zinc-900">
//                   {c.price}
//                 </div>
//               </div>

//               <div className="mt-4 text-lg font-extrabold text-zinc-900">
//                 {c.title}
//               </div>
//               <div className="mt-2 text-sm text-zinc-600">{c.desc}</div>

//               <ul className="mt-4 space-y-2 text-sm text-zinc-700">
//                 {c.bullets.map((b) => (
//                   <li key={b} className="flex items-center gap-2">
//                     <CheckCircle2 className="h-4 w-4 text-blue-700" />
//                     {b}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6">
//                 <a
//                   href="#quote"
//                   className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-blue-800"
//                 >
//                   Get pricing <ArrowRight className="h-4 w-4" />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Services() {
  const cards = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Interior Deep Clean",
      price: "From £60",
      desc: "Seats, carpets, mats, plastics and trims — deep cleaned and refreshed for a premium feel.",
      bullets: ["Vacuum + shampoo", "Stain attention", "Odour neutralising"],
      highlight: false,
    },
    {
      icon: <Car className="h-6 w-6 text-blue-500" />,
      title: "Exterior Polish",
      price: "From £90",
      desc: "Decontamination and polish to restore gloss, clarity and a slick, reflective finish.",
      bullets: ["Wash + clay bar", "Single-stage polish", "Sealant protection"],
      highlight: true, // Highlights the middle card
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "Full Ceramic Coating",
      price: "From £200",
      desc: "Long-lasting protection with deep shine and hydrophobic performance for easier maintenance.",
      bullets: [
        "Paint prep included",
        "High-gloss finish",
        "Durable protection",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-zinc-950 py-24 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" /> Our Expertise
            </h2>
            <h3 className="text-4xl font-black text-white tracking-tighter sm:text-5xl">
              Curated <span className="text-zinc-600 italic">Packages.</span>
            </h3>
            <p className="mt-4 text-lg text-zinc-400">
              Choose a package that fits your vehicle's needs. We handle the
              detailing; you enjoy the drive.
            </p>
          </div>

          <a
            href="#quote"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-black transition-all hover:bg-zinc-200"
          >
            Get a Quote{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "circOut",
                delay: idx * 0.1,
              }}
              // Card Styling
              className={`group relative flex flex-col justify-between rounded-[2rem] border p-8 transition-all duration-300 hover:-translate-y-1
                ${
                  c.highlight
                    ? "bg-zinc-900 border-blue-500/30 shadow-2xl shadow-blue-900/20"
                    : "bg-zinc-900/50 border-white/5 hover:border-white/10 hover:bg-zinc-900"
                }
              `}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl border transition-colors
                    ${c.highlight ? "bg-blue-600 border-blue-500 text-white" : "bg-white/5 border-white/10 text-zinc-400 group-hover:text-blue-500 group-hover:bg-blue-500/10"}
                  `}
                  >
                    {/* If highlighted, force icon white, else inherit */}
                    {c.highlight ? (
                      <c.icon.type
                        {...c.icon.props}
                        className="h-6 w-6 text-white"
                      />
                    ) : (
                      c.icon
                    )}
                  </div>

                  <div className="rounded-full border border-white/10 bg-zinc-800 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                    {c.price}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-black text-white">{c.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {c.desc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="mt-8 space-y-4 border-t border-white/5 pt-8">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm font-medium text-zinc-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Link */}
              <div className="mt-8">
                <a
                  href="#quote"
                  className={`flex w-full items-center justify-center rounded-xl py-4 text-xs font-black uppercase tracking-widest transition-all
                    ${
                      c.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  Book Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
