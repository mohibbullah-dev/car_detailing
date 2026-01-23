// import React, { useState } from "react";
// import {
//   Car,
//   PhoneCall,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   X,
//   Calendar,
// } from "lucide-react";
// import { business } from "../data/business";
// import { Link, useNavigate } from "react-router-dom";
// import { tokenStorage } from "../lib/storage";

// export default function Header({ onOpenBooking }) {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isAdmin = !!tokenStorage.get();

//   const navItems = [
//     { label: "Services", href: "#services" },
//     { label: "Reviews", href: "#reviews" },
//     { label: "Work", href: "#work" },
//   ];

//   const handleLogout = () => {
//     tokenStorage.clear();
//     setIsMenuOpen(false);
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <header className="fixed top-0 z-50 w-full px-4 py-4">
//       <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 glass rounded-[2rem] transition-all duration-300">
//         <Link
//           to="/"
//           onClick={() => setIsMenuOpen(false)}
//           className="flex items-center gap-3 group relative z-50"
//         >
//           <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
//             <Car className="h-6 w-6 text-blue-500" />
//           </div>
//           <div className="leading-tight">
//             <div className="text-base font-black uppercase tracking-tighter text-white">
//               {business.name}
//             </div>
//             <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
//               Precision Detailing • {business.city}
//             </div>
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-blue-500 transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-3 relative z-50">
//           {isAdmin && (
//             <div className="hidden lg:flex items-center gap-3 mr-4 border-r border-white/10 pr-4">
//               <Link
//                 to="/admin/portfolio"
//                 className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white/10"
//               >
//                 <LayoutDashboard className="h-3.5 w-3.5" /> Dashboard
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
//               >
//                 <LogOut className="h-4 w-4" />
//               </button>
//             </div>
//           )}

//           <a
//             href={`tel:${business.phoneTel}`}
//             className="hidden xl:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mr-4"
//           >
//             <PhoneCall size={14} className="text-blue-500" /> {business.phone}
//           </a>

//           <button
//             onClick={onOpenBooking}
//             className="group hidden sm:flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)]"
//           >
//             <Calendar className="h-4 w-4" />
//             <span>Book Now</span>
//           </button>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-24 left-4 right-4 glass rounded-3xl transition-all duration-300 md:hidden ${
//           isMenuOpen
//             ? "opacity-100 visible translate-y-0"
//             : "opacity-0 invisible -translate-y-4"
//         }`}
//       >
//         <div className="flex flex-col space-y-1 p-6">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               onClick={() => setIsMenuOpen(false)}
//               className="rounded-xl p-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white"
//             >
//               {item.label}
//             </a>
//           ))}
//           <div className="pt-4 mt-2 border-t border-white/5">
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 onOpenBooking();
//               }}
//               className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-xs font-black uppercase tracking-widest text-white"
//             >
//               <Calendar className="h-4 w-4" /> Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import {
  Car,
  PhoneCall,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Calendar,
  ShieldCheck,
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
    <header className="fixed top-0 z-50 w-full px-4 py-6">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 glass rounded-[2.5rem] transition-all duration-500 hover:border-white/20">
        {/* Left: Branding with Neon Accent */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-4 group relative z-50"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-500/30 bg-blue-600/10 shadow-glow-blue transition-transform group-hover:scale-110">
            <Car className="h-6 w-6 text-blue-500" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-black uppercase tracking-tighter text-white">
              {business.name}
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-blue-500 font-black">
              Precision Detailing • {business.city}
            </div>
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Admin */}
        <div className="flex items-center gap-3 relative z-50">
          {isAdmin && (
            <div className="hidden lg:flex items-center gap-2 mr-2">
              <Link
                to="/admin/portfolio"
                className="flex items-center gap-2 rounded-xl bg-blue-600/10 border border-blue-500/20 px-4 py-2 text-[9px] font-black uppercase tracking-widest text-blue-400 hover:bg-blue-600/20 transition-all"
              >
                <ShieldCheck className="h-3.5 w-3.5" /> Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:bg-red-500/20 hover:text-red-500 transition-all"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}

          <a
            href={`tel:${business.phoneTel}`}
            className="hidden xl:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
          >
            <PhoneCall size={18} className="text-zinc-400" />
          </a>

          <button
            onClick={onOpenBooking}
            className="group hidden sm:flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-glow-blue active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Refactored */}
      <div
        className={`absolute top-32 left-4 right-4 glass rounded-[2.5rem] p-4 transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl p-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 flex w-full items-center justify-center gap-3 rounded-[1.5rem] bg-blue-600 py-5 text-[10px] font-black uppercase tracking-widest text-white shadow-glow-blue"
          >
            <Calendar className="h-4 w-4" /> Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
