import React, { useState } from "react";
import {
  Car,
  PhoneCall,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import { business } from "../data/business";
import { Link, useNavigate } from "react-router-dom";
import { tokenStorage } from "../lib/storage";

export default function Header({ onOpenBooking }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAdmin = !!tokenStorage.get();

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Work", href: "#work" },
  ];

  const handleLogout = () => {
    tokenStorage.clear();
    setIsMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3 group relative z-50"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Car className="h-6 w-6 text-blue-500" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-black uppercase tracking-tighter text-white">
              {business.name}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              Precision Detailing • {business.city}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 relative z-50">
          {isAdmin && (
            <div className="hidden md:flex items-center gap-3 mr-4 border-r border-white/10 pr-4">
              <Link
                to="/admin/portfolio"
                className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400"
              >
                <LayoutDashboard className="h-3.5 w-3.5" /> Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}

          <a
            href={`tel:${business.phoneTel}`}
            className="hidden xl:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mr-4"
          >
            <PhoneCall size={14} className="text-blue-500" /> {business.phone}
          </a>

          {/* New Trigger: Modal instead of direct link */}
          <button
            onClick={onOpenBooking}
            className="group hidden sm:flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)]"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-zinc-950 border-b border-white/10 transition-all duration-300 md:hidden ${isMenuOpen ? "translate-y-20 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}`}
      >
        <div className="flex flex-col space-y-1 p-6">
          {!isAdmin && (
            <>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl p-4 text-sm font-bold uppercase tracking-widest text-zinc-400"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-sm font-black uppercase tracking-widest text-white"
                >
                  <Calendar className="h-4 w-4" /> Book Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
