import { Search } from "lucide-react";

export default function AdminTopBar({
  title = "Dashboard",
  subtitle = "Welcome back, Admin",
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  showSearch = false,
}) {
  return (
    <header className="mb-8 flex flex-col gap-4 border-b border-white/5 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-hero-display text-3xl uppercase tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {showSearch && (
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              value={searchValue || ""}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-xl border border-white/5 bg-white/[0.03] py-2.5 pl-9 pr-4 text-sm text-white outline-none transition focus:border-[#E10600]/50 sm:w-56"
            />
          </div>
        )}

        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E10600]/20 text-xs font-bold text-[#E10600]">
            SA
          </div>
          <span className="hidden text-xs font-semibold text-zinc-300 sm:inline">
            Super Admin
          </span>
        </div>
      </div>
    </header>
  );
}
