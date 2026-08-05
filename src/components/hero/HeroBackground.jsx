export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* Carbon fiber texture ~4% */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,0.06) 25%, transparent 25%),
            linear-gradient(225deg, rgba(255,255,255,0.06) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),
            linear-gradient(315deg, rgba(255,255,255,0.06) 25%, transparent 25%)
          `,
          backgroundSize: "4px 4px",
          backgroundPosition: "0 0, 2px 0, 2px -2px, 0 2px",
        }}
      />

      {/* Film noise */}
      <div className="hero-noise absolute inset-0 opacity-[0.035]" />

      {/* Top-left red radial glow */}
      <div
        className="absolute -top-[20%] -left-[10%] h-[70%] w-[55%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(225,6,0,0.18) 0%, rgba(225,6,0,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Bottom-right dark red glow */}
      <div
        className="absolute -bottom-[15%] -right-[5%] h-[65%] w-[50%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(122,0,0,0.22) 0%, rgba(122,0,0,0.08) 45%, transparent 70%)",
        }}
      />

      {/* Subtle top-left grey lift */}
      <div
        className="absolute top-0 left-0 h-[40%] w-[35%]"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(255,255,255,0.03) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
