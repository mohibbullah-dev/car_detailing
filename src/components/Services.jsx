import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const cards = [
    {
      icon: <Sparkles className="h-5 w-5 text-blue-700" />,
      title: "Interior Deep Clean",
      price: "From £60",
      desc: "Seats, carpets, mats, plastics and trims — deep cleaned and refreshed for a premium feel.",
      bullets: ["Vacuum + shampoo", "Stain attention", "Odour neutralising"],
    },
    {
      icon: <Car className="h-5 w-5 text-blue-700" />,
      title: "Exterior Polish",
      price: "From £90",
      desc: "Decontamination and polish to restore gloss, clarity and a slick, reflective finish.",
      bullets: ["Wash + clay bar", "Single-stage polish", "Sealant protection"],
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
      title: "Full Ceramic Coating",
      price: "From £200",
      desc: "Long-lasting protection with deep shine and hydrophobic performance for easier maintenance.",
      bullets: [
        "Paint prep included",
        "High-gloss finish",
        "Durable protection",
      ],
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
              Services
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Choose a package that fits your car and your schedule — we handle
              the rest.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            Get a Quote <CheckCircle2 className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: idx * 0.05,
              }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-white">
                  {c.icon}
                </div>
                <div className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-extrabold text-zinc-900">
                  {c.price}
                </div>
              </div>

              <div className="mt-4 text-lg font-extrabold text-zinc-900">
                {c.title}
              </div>
              <div className="mt-2 text-sm text-zinc-600">{c.desc}</div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-700" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-blue-800"
                >
                  Get pricing <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
