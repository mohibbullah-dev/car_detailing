import { NavLink, useNavigate } from "react-router-dom";
import {
  Crown,
  ExternalLink,
  HelpCircle,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Package,
  Settings,
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

function NavItem({ to, icon: Icon, children, end }) {
  return (
    <NavLink to={to} end={end} className={navLinkClass}>
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

export default function AdminSidebar() {
  const navigate = useNavigate();
  const business = useBusiness();
  const { isClosed } = useBusinessStatus();
  const brandName = business?.name || "Royal Shine";

  const handleLogout = () => {
    tokenStorage.clear();
    navigate("/admin/login");
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-white/5 bg-[#070707]">
      <div className="border-b border-white/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E10600]/15 text-[#E10600]">
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

      <div className="mx-4 mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          System Status
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${isClosed ? "bg-red-500" : "bg-emerald-500"}`}
          />
          <span
            className={`text-sm font-semibold ${isClosed ? "text-red-400" : "text-emerald-400"}`}
          >
            {isClosed ? "Closed" : "Open"}
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
        <NavSection label="Manage">
          <NavItem to="/admin" icon={LayoutDashboard} end>
            Dashboard
          </NavItem>
          <NavItem to="/admin/portfolio" icon={Image}>
            Portfolio / Work
          </NavItem>
        </NavSection>

        <NavSection label="Content">
          <NavItem to="/admin/packages" icon={Package}>
            Packages
          </NavItem>
          <NavItem to="/admin/reviews" icon={MessageSquare}>
            Reviews
          </NavItem>
          <NavItem to="/admin/faqs" icon={HelpCircle}>
            FAQs
          </NavItem>
        </NavSection>

        <NavSection label="Settings">
          <NavItem to="/admin/settings" icon={Settings}>
            Settings
          </NavItem>
        </NavSection>
      </nav>

      <div className="space-y-2 border-t border-white/5 p-4">
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
  );
}
