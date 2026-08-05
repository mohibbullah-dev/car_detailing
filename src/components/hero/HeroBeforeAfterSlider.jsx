import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

const FALLBACK_AFTER =
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop";

export default function HeroBeforeAfterSlider({ beforeUrl, afterUrl }) {
  const [sliderPos, setSliderPos] = useState(50);

  const after = afterUrl || FALLBACK_AFTER;
  const before = beforeUrl || after;

  const handleMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div
        className="hero-comparison relative isolate aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0a0a0a] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:aspect-[16/11] lg:aspect-[4/3]"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
        role="img"
        aria-label="Before and after car detailing comparison. Drag to compare."
      >
        {/* Studio ambient glow behind car */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(225,6,0,0.15) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)",
          }}
        />

        {/* AFTER — base layer */}
        <img
          src={after}
          alt="After professional detailing — mirror gloss finish"
          className="absolute inset-0 h-full w-full select-none object-cover object-center pointer-events-none"
          draggable={false}
        />

        {/* BEFORE — clipped overlay */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-[100vw] max-w-none lg:w-[900px]">
            <img
              src={before}
              alt="Before detailing — dull finish"
              className="absolute inset-0 h-full w-full select-none object-cover object-center brightness-[0.55] grayscale-[0.35] pointer-events-none"
              draggable={false}
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-px bg-white/30 shadow-[4px_0_24px_rgba(0,0,0,0.6)]" />
        </div>

        {/* BEFORE badge */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/55 px-4 py-1.5 backdrop-blur-md sm:left-6 sm:top-6"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
            Before
          </span>
        </motion.div>

        {/* AFTER badge */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute right-5 top-5 z-20 rounded-full bg-[#E10600] px-4 py-1.5 shadow-[0_4px_20px_rgba(225,6,0,0.45)] sm:right-6 sm:top-6"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white">
            After
          </span>
        </motion.div>

        {/* Slider handle */}
        <div
          className="absolute inset-y-0 z-30 w-px bg-white/50"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:h-12 sm:w-12">
            <ChevronsLeftRight
              size={16}
              strokeWidth={2}
              className="text-zinc-800"
            />
          </div>
        </div>

        {/* Bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </motion.div>
  );
}
