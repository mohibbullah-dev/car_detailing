import { Loader2, AlertCircle, Sparkles } from "lucide-react";

export function PortfolioLoading() {
  return (
    <div
      className="hero-glass-card flex flex-col items-center justify-center py-32"
      role="status"
      aria-live="polite"
    >
      <Loader2
        className="mb-6 h-10 w-10 animate-spin text-[#E10600]"
        aria-hidden="true"
      />
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Syncing Gallery...
      </p>
    </div>
  );
}

export function PortfolioError({ message }) {
  return (
    <div
      className="hero-glass-card flex flex-col items-center justify-center border-red-500/20 py-24"
      role="alert"
    >
      <AlertCircle className="mb-4 h-10 w-10 text-[#E10600]" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
        Connection Failed: {message}
      </p>
    </div>
  );
}

export function PortfolioEmpty() {
  return (
    <div className="hero-glass-card flex flex-col items-center justify-center py-24 text-center">
      <Sparkles className="mb-4 h-10 w-10 text-zinc-700" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Showroom is currently empty.
      </p>
    </div>
  );
}
