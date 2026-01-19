import { motion } from "framer-motion";
import { ChevronRight, Zap, Star } from "lucide-react";
import { business } from "../data/business";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] overflow-hidden bg-zinc-950 pt-20 flex items-center justify-center"
    >
      {/* --- Premium Background Layer --- */}
      <div className="absolute inset-0 z-0 text-center">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 h-[60%] w-[60%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse" />
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          alt="Luxury Car Detail"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8"
        >
          <Zap className="h-3 w-3 fill-blue-400" />
          The Gold Standard of Mobile Detailing
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl lg:text-[120px] uppercase mb-8"
        >
          Showroom <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Perfection
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-zinc-400 font-medium mb-10 leading-relaxed italic"
        >
          Professional mobile detailing at your doorstep in {business.city}. We
          restore, protect, and maintain your vehicle to its peak condition.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="#quote"
            className="group relative flex items-center gap-3 rounded-2xl bg-blue-600 px-12 py-6 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:-translate-y-1"
          >
            Get an Instant Quote
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Social Proof Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="ml-2 text-white font-black text-xs uppercase tracking-widest">
                5.0 Rated
              </span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700" />
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Trusted by <span className="text-white">200+</span> Local Owners
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
