// import React, { useState, useEffect } from "react";
// import {
//   Car,
//   PhoneCall,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   X,
//   PlusCircle,
//   ShieldCheck,
// } from "lucide-react";
// import { business } from "../data/business";
// import { Link, useNavigate } from "react-router-dom";
// import { tokenStorage } from "../lib/storage";

// export default function Header() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll to adjust navbar look
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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
//     <header
//       className={`fixed top-0 z-100 w-full transition-all duration-300 ${
//         scrolled
//           ? "border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl py-2"
//           : "border-b border-transparent bg-transparent py-4"
//       }`}
//     >
//       <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
//         {/* Logo Section */}
//         <Link
//           to="/"
//           onClick={() => setIsMenuOpen(false)}
//           className="flex items-center gap-4 group relative z-50"
//         >
//           <div className="relative">
//             <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all group-hover:scale-110 group-hover:border-blue-500">
//               <Car className="h-6 w-6 text-blue-500 transition-transform group-hover:rotate-[-5deg]" />
//             </div>
//             {isAdmin && (
//               <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 border-2 border-zinc-950 flex items-center justify-center">
//                 <ShieldCheck size={10} className="text-white" />
//               </div>
//             )}
//           </div>

//           <div className="leading-tight">
//             <div className="text-lg font-black uppercase tracking-tighter text-white">
//               {business.name.split(" ")[0]}{" "}
//               <span className="text-blue-500 italic">
//                 {business.name.split(" ")[1]}
//               </span>
//             </div>
//             <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-extrabold flex items-center gap-2">
//               <span className="inline-block h-1 w-1 rounded-full bg-blue-500/50" />
//               {business.city} Expert Detailing
//             </div>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden items-center gap-10 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="group relative text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-white transition-colors"
//             >
//               {item.label}
//               <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
//             </a>
//           ))}
//         </nav>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-4 relative z-50">
//           <div className="hidden md:flex items-center gap-4">
//             {isAdmin ? (
//               <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-2xl border border-white/5">
//                 <Link
//                   to="/admin/portfolio"
//                   className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
//                 >
//                   <LayoutDashboard className="h-3.5 w-3.5" />
//                   <span>Dashboard</span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
//                   title="Logout"
//                 >
//                   <LogOut className="h-4 w-4" />
//                 </button>
//               </div>
//             ) : (
//               <a
//                 href={`tel:${business.phoneTel}`}
//                 className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-0.5"
//               >
//                 <PhoneCall className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
//                 <span>Instant Quote</span>
//               </a>
//             )}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all md:hidden ${
//               isMenuOpen
//                 ? "bg-blue-600 border-blue-500 text-white"
//                 : "bg-white/5 border-white/10 text-white"
//             }`}
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Slide-down Menu */}
//       <div
//         className={`fixed inset-0 top-0 -z-10 h-screen w-full bg-zinc-950/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden ${
//           isMenuOpen
//             ? "translate-y-0 opacity-100"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="flex h-full flex-col justify-center space-y-8 p-10">
//           {isAdmin && (
//             <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 bg-blue-500/10 w-fit px-4 py-1 rounded-full">
//               <ShieldCheck size={12} /> Admin Mode
//             </div>
//           )}

//           <div className="flex flex-col space-y-6">
//             {(isAdmin
//               ? [
//                   {
//                     label: "Portfolio Manager",
//                     href: "/admin/portfolio",
//                     icon: <LayoutDashboard />,
//                   },
//                   {
//                     label: "New Transformation",
//                     href: "/admin/upload",
//                     icon: <PlusCircle />,
//                   },
//                 ]
//               : navItems
//             ).map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
//               >
//                 {item.icon && (
//                   <span className="text-blue-500">{item.icon}</span>
//                 )}
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           <div className="pt-10 border-t border-white/10">
//             {isAdmin ? (
//               <button
//                 onClick={handleLogout}
//                 className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 py-5 text-xs font-black uppercase tracking-widest text-red-500"
//               >
//                 <LogOut className="h-5 w-5" /> Terminate Session
//               </button>
//             ) : (
//               <a
//                 href={`tel:${business.phoneTel}`}
//                 className="flex w-full items-center justify-center gap-4 rounded-2xl bg-blue-600 py-6 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-600/40"
//               >
//                 <PhoneCall className="h-5 w-5" /> Call {business.name}
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Car,
  PhoneCall,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  PlusCircle,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { business } from "../data/business";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { tokenStorage } from "../lib/storage";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdmin = !!tokenStorage.get();

  const navItems = [
    { label: "Services", href: "services" },
    { label: "Gallery", href: "work" },
    { label: "Reviews", href: "reviews" },
  ];

  // Smart Scroll Logic
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      // If not on home, go home then scroll
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      // If on home, scroll directly
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogout = () => {
    tokenStorage.clear();
    setIsMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-2xl py-3"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-4 group relative z-[110]"
        >
          <div className="relative">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-blue-600/20">
              <Car className="h-6 w-6 text-blue-500 transition-transform group-hover:rotate-[-10deg]" />
            </div>
            {isAdmin && (
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 border-2 border-zinc-950 flex items-center justify-center animate-pulse">
                <ShieldCheck size={10} className="text-white" />
              </div>
            )}
          </div>

          <div className="leading-tight hidden sm:block">
            <div className="text-xl font-black uppercase tracking-tighter text-white">
              {business.name.split(" ")[0]}{" "}
              <span className="text-blue-500 italic">
                {business.name.split(" ")[1]}
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-black">
              Elite Detailing
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group relative text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full shadow-[0_0_10px_#2563eb]" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 relative z-[110]">
          <div className="hidden md:flex items-center gap-4">
            {isAdmin ? (
              <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                <Link
                  to="/admin/portfolio"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>Admin Panel</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${business.phoneTel}`}
                  className="hidden xl:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mr-4"
                >
                  <PhoneCall size={14} className="text-blue-500" />{" "}
                  {business.phone}
                </a>
                <Link
                  to="/portfolio"
                  className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all lg:hidden ${
              isMenuOpen
                ? "bg-blue-600 border-blue-500 text-white rotate-90"
                : "bg-white/5 border-white/10 text-white"
            }`}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen w-full bg-zinc-950/98 backdrop-blur-3xl transition-all duration-500 ease-[transform,opacity] lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col justify-center p-12">
          <div className="space-y-12">
            {(isAdmin
              ? [
                  {
                    label: "Dashboard",
                    href: "/admin/portfolio",
                    icon: <LayoutDashboard size={32} />,
                  },
                  {
                    label: "New Job",
                    href: "/admin/upload",
                    icon: <PlusCircle size={32} />,
                  },
                ]
              : navItems
            ).map((item, idx) => (
              <a
                key={item.href}
                href={isAdmin ? item.href : `#${item.href}`}
                onClick={(e) =>
                  isAdmin ? setIsMenuOpen(false) : handleNavClick(e, item.href)
                }
                className="flex items-center gap-6 text-5xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-all transform hover:translate-x-4"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-blue-600 text-2xl">0{idx + 1}.</span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/10">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex w-full items-center justify-center gap-4 rounded-3xl bg-blue-600 py-8 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-600/40"
            >
              <PhoneCall size={20} /> Call Now For Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
