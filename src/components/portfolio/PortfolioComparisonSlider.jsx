import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronsLeftRight, Car } from "lucide-react";

export default function PortfolioComparisonSlider({
  beforeUrl,
  afterUrl,
  title,
  index = 0,
  detailUrl,
}) {
  const [sliderPos, setSliderPos] = useState(50);

  const after = afterUrl;
  const before = beforeUrl || afterUrl;

  const handleMove = useCallback((e) => {
    e.stopPropagation();
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  }, []);

  const stopNav = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="relative">
      {/* Car title badge — top left */}
      {detailUrl ? (
        <Link
          to={detailUrl}
          className="absolute left-5 top-5 z-40 flex items-center gap-2.5 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E10600]/60 focus-visible:outline-offset-4"
          onClick={(e) => e.stopPropagation()}
        >
          <TitleBadge title={title} />
        </Link>
      ) : (
        <div className="absolute left-5 top-5 z-40 flex items-center gap-2.5">
          <TitleBadge title={title} />
        </div>
      )}

      <div
        className="hero-comparison relative isolate aspect-[16/10] w-full cursor-ew-resize touch-none overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0a0a0a] shadow-[0_16px_48px_-16px_rgba(0,0,0,0.75)]"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
        onClick={stopNav}
        onKeyDown={stopNav}
        role="img"
        aria-label={`Before and after comparison for ${title}`}
      >
        {/* Studio red ambient */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 45%, rgba(225,6,0,0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          }}
        />

        {/* Vertical red light bars — studio effect */}
        <div className="pointer-events-none absolute inset-y-0 left-[18%] z-[1] w-px bg-gradient-to-b from-transparent via-[#E10600]/25 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-[22%] z-[1] w-px bg-gradient-to-b from-transparent via-[#E10600]/20 to-transparent" />

        {/* AFTER base */}
        <img
          src={after}
          alt={`${title} after detailing`}
          className="absolute inset-0 h-full w-full select-none object-cover object-center pointer-events-none"
          loading={index < 3 ? "eager" : "lazy"}
          draggable={false}
        />

        {/* BEFORE overlay */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-[100vw] max-w-none lg:w-[700px]">
            <img
              src={before}
              alt={`${title} before detailing`}
              className="absolute inset-0 h-full w-full select-none object-cover object-center brightness-[0.5] grayscale-[0.4] pointer-events-none"
              loading={index < 3 ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-px bg-white/35 shadow-[3px_0_20px_rgba(0,0,0,0.5)]" />
        </div>

        {/* BEFORE badge — bottom left */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
          className="pointer-events-none absolute bottom-5 left-5 z-20 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/65">
            Before
          </span>
        </motion.div>

        {/* AFTER badge — bottom right */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15 + 0.4,
          }}
          className="pointer-events-none absolute bottom-5 right-5 z-20 rounded-md bg-[#E10600] px-3 py-1.5 shadow-[0_4px_16px_rgba(225,6,0,0.4)]"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white">
            After
          </span>
        </motion.div>

        {/* Slider handle */}
        <div
          className="absolute inset-y-0 z-30 w-px bg-white/45"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
            <ChevronsLeftRight
              size={14}
              strokeWidth={2}
              className="text-zinc-800"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
    </div>
  );
}

function TitleBadge({ title }) {
  return (
    <>
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">
        <Car size={14} strokeWidth={1.5} className="text-white/80" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
        {title}
      </span>
    </>
  );
}
