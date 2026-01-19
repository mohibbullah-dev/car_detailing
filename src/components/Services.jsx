import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import { generateWhatsAppLink } from "../lib/whatsapp";

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
                  href={generateWhatsAppLink(c.title, c.price)} // Sends title and price to WhatsApp
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center rounded-xl py-4 text-xs font-black uppercase tracking-widest transition-all
      ${
        c.highlight
          ? "bg-blue-600 text-white hover:bg-blue-500"
          : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
      }
    `}
                >
                  Book {c.title}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
