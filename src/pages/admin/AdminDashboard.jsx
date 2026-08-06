import { Link } from "react-router-dom";
import {
  ArrowRight,
  HelpCircle,
  Image,
  MessageSquare,
  Package,
  PlusCircle,
  Settings,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import { useBusinessStatus } from "../../context/BusinessStatusContext";
import { usePortfolioList } from "../../hooks/usePortfolio";

function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 sm:text-[10px]">
            {label}
          </p>
          <p className="mt-1.5 truncate text-2xl font-bold text-white sm:mt-2 sm:text-3xl">
            {value}
          </p>
        </div>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${accent}`}
        >
          <Icon size={16} className="sm:hidden" />
          <Icon size={18} className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}

function QuickAction({ to, icon: Icon, label }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-[#E10600]/30 hover:text-white"
    >
      <Icon size={16} className="text-[#E10600]" />
      {label}
      <ArrowRight
        size={14}
        className="ml-auto opacity-0 transition group-hover:opacity-100"
      />
    </Link>
  );
}

export default function AdminDashboard() {
  const { pricing, reviews, faq } = useSite();
  const { isClosed } = useBusinessStatus();
  const { data: portfolio = [], isLoading } = usePortfolioList();

  const recentItems = [...portfolio]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        <StatCard
          label="Portfolio Projects"
          value={isLoading ? "—" : portfolio.length}
          icon={Image}
          accent="bg-[#E10600]/15 text-[#E10600]"
        />
        <StatCard
          label="Packages"
          value={pricing?.plans?.length ?? 0}
          icon={Package}
          accent="bg-blue-500/15 text-blue-400"
        />
        <StatCard
          label="Reviews"
          value={reviews?.items?.length ?? 0}
          icon={MessageSquare}
          accent="bg-amber-500/15 text-amber-400"
        />
        <StatCard
          label="FAQs"
          value={faq?.items?.length ?? 0}
          icon={HelpCircle}
          accent="bg-purple-500/15 text-purple-400"
        />
        <StatCard
          label="System Status"
          value={isClosed ? "Closed" : "Open"}
          icon={isClosed ? ToggleLeft : ToggleRight}
          accent={
            isClosed
              ? "bg-red-500/15 text-red-400"
              : "bg-emerald-500/15 text-emerald-400"
          }
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Quick Actions
          </h2>
          <div className="space-y-2">
            <QuickAction to="/admin/upload" icon={PlusCircle} label="Add Work" />
            <QuickAction
              to="/admin/packages"
              icon={Package}
              label="Edit Packages"
            />
            <QuickAction
              to="/admin/reviews"
              icon={MessageSquare}
              label="Edit Reviews"
            />
            <QuickAction
              to="/admin/settings"
              icon={Settings}
              label="Settings"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Recent Portfolio
            </h2>
            <Link
              to="/admin/portfolio"
              className="text-xs font-medium text-[#E10600] hover:underline"
            >
              View all
            </Link>
          </div>

          {isLoading ? (
            <p className="text-sm text-zinc-500">Loading...</p>
          ) : recentItems.length === 0 ? (
            <p className="text-sm text-zinc-500">No portfolio items yet.</p>
          ) : (
            <ul className="space-y-3">
              {recentItems.map((item) => (
                <li key={item._id}>
                  <Link
                    to="/admin/portfolio"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-[#E10600]/20"
                  >
                    <img
                      src={item.beforeUrl}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-lg object-cover grayscale opacity-70"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {item.location || "—"}
                      </p>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-zinc-600" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
