export default function PortfolioBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#070707]" />

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

      <div className="hero-noise absolute inset-0 opacity-[0.035]" />

      <div
        className="absolute -top-[15%] -left-[8%] h-[65%] w-[50%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(225,6,0,0.16) 0%, rgba(225,6,0,0.05) 42%, transparent 70%)",
        }}
      />

      <div
        className="absolute -bottom-[10%] -right-[5%] h-[60%] w-[48%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(122,0,0,0.2) 0%, rgba(122,0,0,0.07) 45%, transparent 70%)",
        }}
      />

      {/* PORTFOLIO watermark */}
      <div
        className="absolute right-0 top-[8%] hidden select-none font-hero-display uppercase leading-none tracking-[-0.04em] text-white/[0.03] lg:block"
        style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
      >
        Portfolio
      </div>
    </div>
  );
}
