export default function AdminTopBar({
  title = "Dashboard",
  subtitle = "Welcome back, Admin",
}) {
  return (
    <header className="mb-6 flex items-start justify-between gap-3 border-b border-white/5 pb-5 sm:mb-8 sm:pb-6">
      <div className="min-w-0">
        <h1 className="font-hero-display text-2xl uppercase leading-none tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="mt-1.5 text-xs text-zinc-500 sm:text-sm">{subtitle}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-2.5 py-2 sm:px-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E10600]/20 text-xs font-bold text-[#E10600]">
          SA
        </div>
        <span className="hidden text-xs font-semibold text-zinc-300 sm:inline">
          Super Admin
        </span>
      </div>
    </header>
  );
}
