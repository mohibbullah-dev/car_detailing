import { motion } from "framer-motion";
import { Car, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { business } from "../data/business";

/** Replace these two image links anytime */
const BEFORE_IMG =
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80";

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

function ImageBox({ label, src, caption }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="text-xs font-semibold text-zinc-600">{label}</div>

      {/* Image */}
      <img
        src={src}
        alt={`${label} car detailing`}
        className="mt-3 h-40 w-full rounded-xl border border-zinc-200 object-cover bg-white"
        loading="lazy"
      />

      {/* Caption */}
      <div className="mt-3 text-xs text-zinc-500">{caption}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
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

          {/* RIGHT */}
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
                <ImageBox
                  label="Before"
                  src={BEFORE_IMG}
                  caption="Light swirls • Dust • Marks"
                />
                <ImageBox
                  label="After"
                  src={AFTER_IMG}
                  caption="Gloss • Depth • Protection"
                />
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
