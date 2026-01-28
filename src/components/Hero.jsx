import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { business } from "../data/business";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[100svh] bg-obsidian flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Fixed Gradient for Readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian lg:bg-gradient-to-r lg:from-obsidian lg:via-obsidian/80 lg:to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Car Detail"
          className="w-full h-full object-cover object-center lg:object-right opacity-40 lg:opacity-70"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content Column */}
          <motion.div
            className="lg:col-span-8 xl:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
              <Zap size={12} className="text-blue-500 fill-blue-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">
                Elite Mobile Detailing
              </span>
            </div>

            {/* Responsive Heading: Fluid scaling + Overflow Fix */}
            <h1 className="flex flex-col text-white font-black uppercase leading-[0.8] tracking-tighter mb-8 italic">
              <span className="text-[15vw] sm:text-[10vw] lg:text-[100px]">
                THE
              </span>
              <span className="text-[12.5vw] sm:text-[10vw] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 not-italic block break-all">
                TRANSFORMATION.
              </span>
            </h1>

            <p className="max-w-md text-zinc-400 text-sm sm:text-base lg:text-lg mb-10 leading-relaxed font-medium italic border-l-4 border-blue-600 pl-5">
              Restoring showroom perfection at your location in{" "}
              <span className="text-white font-bold underline decoration-blue-600/50">
                {business.city}
              </span>
              . Precision paint correction and ceramic protection.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="h-16 px-8 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-glow-blue active:scale-95"
              >
                Book Appointment <ArrowRight size={18} />
              </button>

              <div className="flex items-center gap-4 px-6 h-16 glass-card rounded-2xl">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-blue-500 fill-blue-500"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-black leading-none">
                    5.0 RATING
                  </span>
                  <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-widest">
                    200+ Verified Works
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Service Bento Panel */}
          <motion.div
            className="lg:col-span-4 xl:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-[2.5rem] relative group">
              <div className="space-y-6 relative z-10">
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-blue-500" /> Service
                  Coverage
                </div>
                <div className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {business.city} & <br />
                  Surrounding Areas
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    "Ceramic",
                    "Paint Correction",
                    "Deep Clean",
                    "Interior",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-3 border border-white/5"
                    >
                      <div className="h-1 w-1 rounded-full bg-blue-500" />
                      <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
