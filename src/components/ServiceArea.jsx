import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ShieldCheck, Zap, Globe } from "lucide-react";
import { business } from "../data/business";

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500">
              <Navigation className="h-3 w-3 fill-blue-500" /> Mobile Service
              Hub
            </div>

            <h2 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl leading-none">
              Your Driveway, <br />
              <span className="text-zinc-600 italic font-light">
                Our Studio.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-zinc-400">
              We operate a fully self-contained mobile unit in{" "}
              <span className="text-white">{business.city}</span>. We bring our
              own de-ionised water and power—all we need is your keys.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest">
                    Full Coverage
                  </p>
                  <p className="text-sm text-zinc-500">
                    {business.serviceRadiusMiles} Mile Radius from City Centre
                  </p>
                </div>
              </div>
            </div>

            {/* Area Pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {business.mainAreas.map((area) => (
                <div
                  key={area}
                  className="group flex items-center gap-2 rounded-full border border-white/5 bg-zinc-900/50 px-4 py-2 transition-colors hover:border-blue-500/30"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Radar Map Visual */}
          <div className="relative flex justify-center items-center h-[500px] w-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]">
            {/* Background Grid (CSS only) */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Animated Radar Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.2, 0], scale: [0.5, 1.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: ring * 1.2,
                  ease: "easeOut",
                }}
                className="absolute h-[300px] w-[300px] rounded-full border border-blue-500"
              />
            ))}

            {/* Central Pin */}
            <div className="relative z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-zinc-950 border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="h-8 w-8 text-blue-500 fill-blue-500/20" />
              </motion.div>
              <span className="mt-2 text-[10px] font-black uppercase tracking-widest text-white">
                {business.city}
              </span>
            </div>

            {/* Floating Area Tags (Simulating Map Pins) */}
            <div className="absolute top-20 right-20 flex items-center gap-2 rounded-lg bg-zinc-900/80 border border-white/5 p-2 backdrop-blur-sm">
              <Globe size={10} className="text-blue-500" />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">
                Solihull
              </span>
            </div>
            <div className="absolute bottom-32 left-10 flex items-center gap-2 rounded-lg bg-zinc-900/80 border border-white/5 p-2 backdrop-blur-sm">
              <Globe size={10} className="text-blue-500" />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">
                Sutton Coldfield
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
