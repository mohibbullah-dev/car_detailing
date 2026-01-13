import { motion } from "framer-motion";
import { Car, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { business } from "../data/business";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900">
      <Sparkles className="h-4 w-4 text-blue-700" />
      {children}
    </span>
  );
}

function PrimaryButton({ children, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge>
              Outreach Demo • Serving within {business.serviceRadiusMiles} miles
              • 5★ Rated
            </Badge>

            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Premium Car Detailing in {business.city} — We Bring the Shine to
              You.
            </h1>

            <p className="text-base text-zinc-600 sm:text-lg">
              Professional mobile detailing at your home or workplace. Interior
              deep cleans, exterior polishing, and long-lasting ceramic
              protection — finished with a premium touch.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#quote">
                Get a Quote <CheckCircle2 className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#services">
                View Services <Sparkles className="h-4 w-4" />
              </SecondaryButton>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
                  title: "Insured",
                  desc: "Care you can trust",
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-blue-700" />,
                  title: "Premium Finish",
                  desc: "Detail-level results",
                },
                {
                  icon: <Car className="h-5 w-5 text-blue-700" />,
                  title: "Mobile Service",
                  desc: "We come to you",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-600">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-zinc-900">
                    Before → After
                  </div>
                  <div className="text-xs text-zinc-500">
                    Premium transformation
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1">
                  <Star
                    className="h-4 w-4 text-amber-500"
                    fill="currentColor"
                  />
                  <span className="text-xs font-bold text-zinc-900">5.0</span>
                  <span className="text-xs text-zinc-500">(Google)</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">
                    Before
                  </div>
                  <div className="mt-3 h-28 rounded-xl border border-zinc-200 bg-white" />
                  <div className="mt-3 text-xs text-zinc-500">
                    Light swirls • Dust • Marks
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">
                    After
                  </div>
                  <div className="mt-3 h-28 rounded-xl border border-zinc-200 bg-white" />
                  <div className="mt-3 text-xs text-zinc-500">
                    Gloss • Depth • Protection
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white">
                    <Sparkles className="h-5 w-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-zinc-900">
                      Same-week appointments
                    </div>
                    <div className="text-xs text-zinc-600">
                      Message us for availability in {business.city}.
                    </div>
                  </div>
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-700/10 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-zinc-900/5 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
