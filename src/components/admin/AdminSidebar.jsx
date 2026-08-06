import { NavLink, useNavigate } from "react-router-dom";
import {
  Crown,
  ExternalLink,
  HelpCircle,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  Package,
  Settings,
  X,
} from "lucide-react";
import { useBusiness } from "../../context/SiteContentContext";
import { useBusinessStatus } from "../../context/BusinessStatusContext";
import { tokenStorage } from "../../lib/storage";

const navLinkClass = ({ isActive }) =>
  [
    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
    isActive
      ? "bg-[#E10600]/10 text-[#E10600]"
      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white",
  ].join(" ");

const mobileTabClass = ({ isActive }) =>
  [
    "flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-semibold transition",
    isActive ? "text-[#E10600]" : "text-zinc-500",
  ].join(" ");

function NavItem({ to, icon: Icon, children, end, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={navLinkClass}
      onClick={() => onNavigate?.()}
    >
      <Icon size={18} className="shrink-0" />
      {children}
    </NavLink>
  );
}

function NavSection({ label, children }) {
  return (
    <div className="space-y-1">
      <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function SidebarNav({ onNavigate }) {
  return (
    <nav className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-3 py-4">
      <NavSection label="Manage">
        <NavItem to="/admin" icon={LayoutDashboard} end onNavigate={onNavigate}>
          Dashboard
        </NavItem>
        <NavItem to="/admin/portfolio" icon={Image} onNavigate={onNavigate}>
          Portfolio / Work
        </NavItem>
      </NavSection>

      <NavSection label="Content">
        <NavItem to="/admin/packages" icon={Package} onNavigate={onNavigate}>
          Packages
        </NavItem>
        <NavItem
          to="/admin/reviews"
          icon={MessageSquare}
          onNavigate={onNavigate}
        >
          Reviews
        </NavItem>
        <NavItem to="/admin/faqs" icon={HelpCircle} onNavigate={onNavigate}>
          FAQs
        </NavItem>
      </NavSection>

      <NavSection label="Settings">
        <NavItem to="/admin/settings" icon={Settings} onNavigate={onNavigate}>
          Settings
        </NavItem>
      </NavSection>
    </nav>
  );
}

export default function AdminSidebar({
  moreOpen = false,
  onMoreOpen,
  onMoreClose,
}) {
  const navigate = useNavigate();
  const business = useBusiness();
  const { isClosed, toggleStatus, toggling } = useBusinessStatus();
  const brandName = business?.name || "Royal Shine";

  const handleLogout = () => {
    tokenStorage.clear();
    onMoreClose?.();
    navigate("/admin/login");
  };

  return (
    <>
      {/* Desktop / large tablet: fixed left rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-white/5 bg-[#070707] lg:flex">
        <div className="shrink-0 border-b border-white/5 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E10600]/15 text-[#E10600]">
              <Crown size={20} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{brandName}</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-4 shrink-0 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            System Status
          </p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${isClosed ? "bg-red-500" : "bg-emerald-500"}`}
              />
              <span
                className={`text-sm font-semibold ${isClosed ? "text-red-400" : "text-emerald-400"}`}
              >
                {isClosed ? "Closed" : "Open"}
              </span>
            </div>
            <button
              type="button"
              disabled={toggling}
              onClick={() => toggleStatus()}
              className={`rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition disabled:opacity-50 ${
                isClosed
                  ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                  : "bg-red-500/15 text-red-400 hover:bg-red-500/25"
              }`}
            >
              {toggling ? "..." : isClosed ? "Open" : "Close"}
            </button>
          </div>
        </div>

        <SidebarNav />

        <div className="shrink-0 space-y-1 border-t border-white/5 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
          >
            <ExternalLink size={18} />
            View site
          </NavLink>
        </div>
      </aside>

      {/* Mobile / small: bottom tabs */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: "max(0.25rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-lg items-stretch">
          <NavLink to="/admin" end className={mobileTabClass}>
            <LayoutDashboard size={20} />
            <span className="truncate">Home</span>
          </NavLink>
          <NavLink to="/admin/portfolio" className={mobileTabClass}>
            <Image size={20} />
            <span className="truncate">Work</span>
          </NavLink>
          <NavLink to="/admin/packages" className={mobileTabClass}>
            <Package size={20} />
            <span className="truncate">Plans</span>
          </NavLink>
          <NavLink to="/admin/settings" className={mobileTabClass}>
            <Settings size={20} />
            <span className="truncate">Settings</span>
          </NavLink>
          <button
            type="button"
            onClick={onMoreOpen}
            className={[
              "flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-semibold transition",
              moreOpen ? "text-[#E10600]" : "text-zinc-500",
            ].join(" ")}
          >
            <MoreHorizontal size={20} />
            <span>More</span>
          </button>
        </div>
      </nav>

      {/* Mobile More sheet */}
      {moreOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
          onClick={onMoreClose}
        />
      )}
      <div
        className={[
          "fixed inset-x-0 bottom-0 z-[70] max-h-[min(70dvh,520px)] rounded-t-3xl border border-white/10 bg-[#0c0c0c] shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          moreOpen ? "translate-y-0" : "translate-y-full pointer-events-none",
        ].join(" ")}
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        aria-hidden={!moreOpen}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <div>
            <p className="text-sm font-bold text-white">{brandName}</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-600">
              More options
            </p>
          </div>
          <button
            type="button"
            onClick={onMoreClose}
            className="rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-3 py-3">
          <div className="mb-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${isClosed ? "bg-red-500" : "bg-emerald-500"}`}
                />
                <span className="text-sm font-semibold text-white">
                  {isClosed ? "Closed" : "Open for business"}
                </span>
              </div>
              <button
                type="button"
                disabled={toggling}
                onClick={() => toggleStatus()}
                className={`rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider disabled:opacity-50 ${
                  isClosed
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                }`}
              >
                {toggling ? "Saving..." : isClosed ? "Open now" : "Close now"}
              </button>
            </div>
          </div>

          <NavItem
            to="/admin/reviews"
            icon={MessageSquare}
            onNavigate={onMoreClose}
          >
            Reviews
          </NavItem>
          <NavItem to="/admin/faqs" icon={HelpCircle} onNavigate={onMoreClose}>
            FAQs
          </NavItem>
          <NavItem to="/admin/upload" icon={Image} onNavigate={onMoreClose}>
            Add Work
          </NavItem>
          <NavLink
            to="/"
            onClick={onMoreClose}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400"
          >
            <ExternalLink size={18} />
            View site
          </NavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
