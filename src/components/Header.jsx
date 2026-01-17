// import { Car, PhoneCall } from "lucide-react";
// import { business } from "../data/business";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const navItems = [
//     { label: "Services", href: "#services" },
//     { label: "Reviews", href: "#reviews" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
//       <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <a href="#top" className="flex items-center gap-3">
//           <div className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white shadow-sm">
//             <Car className="h-5 w-5 text-zinc-900" />
//           </div>
//           <div className="leading-tight">
//             <div className="text-sm font-extrabold text-zinc-900">
//               {business.name}
//             </div>
//             <div className="text-xs text-zinc-500">
//               Mobile detailing • {business.city}
//             </div>
//           </div>
//         </a>
//         {/* <Link
//           to="/portfolio"
//           className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition"
//         >
//           Portfolio
//         </Link> */}

//         <nav className="hidden items-center gap-6 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2">
//           <a
//             href={`tel:${business.phoneTel}`}
//             className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
//           >
//             <PhoneCall className="h-4 w-4" />
//             Call Now
//           </a>

//           <a
//             href={`tel:${business.phoneTel}`}
//             className="sm:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
//             aria-label="Call Now"
//           >
//             <PhoneCall className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// next disign
// import { Car, PhoneCall } from "lucide-react";
// import { business } from "../data/business";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const navItems = [
//     { label: "Services", href: "#services" },
//     { label: "Reviews", href: "#reviews" },
//     { label: "Work", href: "#work" },
//   ];

//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
//       <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
//         {/* Logo Section */}
//         <a href="#top" className="flex items-center gap-3 group">
//           <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group-hover:border-blue-500/60">
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
//         </a>

//         {/* Desktop Nav */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         {/* Action Button */}
//         <div className="flex items-center gap-4">
//           <a
//             href={`tel:${business.phoneTel}`}
//             className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-blue-600 hover:text-white"
//           >
//             <PhoneCall className="h-3.5 w-3.5" />
//             <span className="hidden sm:inline">Get Quote</span>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// latest update with login button included
// import { Car, PhoneCall, LayoutDashboard, LogOut } from "lucide-react";
// import { business } from "../data/business";
// import { Link, useNavigate } from "react-router-dom";
// import { tokenStorage } from "../lib/storage";

// export default function Header() {
//   const navigate = useNavigate();

//   // Check if admin is logged in
//   const isAdmin = !!tokenStorage.get();

//   const navItems = [
//     { label: "Services", href: "#services" },
//     { label: "Reviews", href: "#reviews" },
//     { label: "Work", href: "#work" },
//   ];

//   const handleLogout = () => {
//     tokenStorage.clear(); // Remove the token
//     navigate("/"); // Redirect to home
//     window.location.reload(); // Refresh to update UI states
//   };

//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
//       <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group-hover:border-blue-500/60">
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

//         {/* Desktop Nav */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           {isAdmin ? (
//             /* Admin Specific UI */
//             <>
//               <Link
//                 to="/admin/portfolio"
//                 className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all"
//               >
//                 <LayoutDashboard className="h-3.5 w-3.5" />
//                 <span className="hidden lg:inline">Dashboard</span>
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="group flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
//                 title="Logout"
//               >
//                 <LogOut className="h-4 w-4" />
//               </button>
//             </>
//           ) : (
//             /* Regular User UI */
//             <a
//               href={`tel:${business.phoneTel}`}
//               className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-blue-600 hover:text-white"
//             >
//               <PhoneCall className="h-3.5 w-3.5" />
//               <span className="hidden sm:inline">Get Quote</span>
//             </a>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// mobile version added
// import React, { useState } from "react";
// import {
//   Car,
//   PhoneCall,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   X,
//   PlusCircle,
// } from "lucide-react";
// import { business } from "../data/business";
// import { Link, useNavigate } from "react-router-dom";
// import { tokenStorage } from "../lib/storage";

// export default function Header() {
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
//     <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
//       <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
//         {/* Logo Section */}
//         <Link
//           to="/"
//           onClick={() => setIsMenuOpen(false)}
//           className="flex items-center gap-3 group relative z-50"
//         >
//           <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group-hover:border-blue-500/60">
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

//         {/* Desktop Nav (Hidden on Mobile) */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         {/* Action Buttons & Mobile Toggle */}
//         <div className="flex items-center gap-3 relative z-50">
//           {/* Desktop Admin View */}
//           <div className="hidden md:flex items-center gap-3">
//             {isAdmin ? (
//               <>
//                 <Link
//                   to="/admin/portfolio"
//                   className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all"
//                 >
//                   <LayoutDashboard className="h-3.5 w-3.5" />
//                   <span>Dashboard</span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
//                 >
//                   <LogOut className="h-4 w-4" />
//                 </button>
//               </>
//             ) : (
//               <a
//                 href={`tel:${business.phoneTel}`}
//                 className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black hover:bg-blue-600 hover:text-white transition-all"
//               >
//                 <PhoneCall className="h-3.5 w-3.5" />
//                 <span>Get Quote</span>
//               </a>
//             )}
//           </div>

//           {/* Mobile Menu Toggle Button */}
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

//       {/* Mobile Slide-down Menu */}
//       <div
//         className={`absolute top-0 left-0 w-full bg-zinc-950 border-b border-white/10 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-y-20 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}`}
//       >
//         <div className="flex flex-col space-y-1 p-6">
//           {isAdmin ? (
//             /* Admin Mobile Menu */
//             <>
//               <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 border-b border-white/5 pb-2">
//                 Admin Command
//               </div>
//               <Link
//                 to="/admin/portfolio"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="flex items-center gap-3 rounded-xl p-4 text-sm font-bold text-white bg-white/5 mb-2"
//               >
//                 <LayoutDashboard className="h-5 w-5 text-blue-500" /> Manage
//                 Portfolio
//               </Link>
//               <Link
//                 to="/admin/upload"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="flex items-center gap-3 rounded-xl p-4 text-sm font-bold text-white bg-white/5 mb-4"
//               >
//                 <PlusCircle className="h-5 w-5 text-blue-500" /> Upload New Work
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-3 rounded-xl p-4 text-sm font-bold text-red-500 border border-red-500/20 bg-red-500/5"
//               >
//                 <LogOut className="h-5 w-5" /> Sign Out
//               </button>
//             </>
//           ) : (
//             /* Regular User Mobile Menu */
//             <>
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="rounded-xl p-4 text-sm font-bold uppercase tracking-widest text-zinc-400 active:bg-white/5 active:text-blue-500"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <div className="pt-4 mt-4 border-t border-white/5">
//                 <a
//                   href={`tel:${business.phoneTel}`}
//                   className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20"
//                 >
//                   <PhoneCall className="h-4 w-4" /> Call to Book
//                 </a>
//               </div>
//             </>
//           )}
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
} from "lucide-react";
import { business } from "../data/business";
import { Link, useNavigate } from "react-router-dom";
import { tokenStorage } from "../lib/storage";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust navbar look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 z-100 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl py-2"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-4 group relative z-50"
        >
          <div className="relative">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all group-hover:scale-110 group-hover:border-blue-500">
              <Car className="h-6 w-6 text-blue-500 transition-transform group-hover:rotate-[-5deg]" />
            </div>
            {isAdmin && (
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 border-2 border-zinc-950 flex items-center justify-center">
                <ShieldCheck size={10} className="text-white" />
              </div>
            )}
          </div>

          <div className="leading-tight">
            <div className="text-lg font-black uppercase tracking-tighter text-white">
              {business.name.split(" ")[0]}{" "}
              <span className="text-blue-500 italic">
                {business.name.split(" ")[1]}
              </span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-extrabold flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-blue-500/50" />
              {business.city} Expert Detailing
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden md:flex items-center gap-4">
            {isAdmin ? (
              <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-2xl border border-white/5">
                <Link
                  to="/admin/portfolio"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <a
                href={`tel:${business.phoneTel}`}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <PhoneCall className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
                <span>Instant Quote</span>
              </a>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all md:hidden ${
              isMenuOpen
                ? "bg-blue-600 border-blue-500 text-white"
                : "bg-white/5 border-white/10 text-white"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed inset-0 top-0 -z-10 h-screen w-full bg-zinc-950/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center space-y-8 p-10">
          {isAdmin && (
            <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 bg-blue-500/10 w-fit px-4 py-1 rounded-full">
              <ShieldCheck size={12} /> Admin Mode
            </div>
          )}

          <div className="flex flex-col space-y-6">
            {(isAdmin
              ? [
                  {
                    label: "Portfolio Manager",
                    href: "/admin/portfolio",
                    icon: <LayoutDashboard />,
                  },
                  {
                    label: "New Transformation",
                    href: "/admin/upload",
                    icon: <PlusCircle />,
                  },
                ]
              : navItems
            ).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
              >
                {item.icon && (
                  <span className="text-blue-500">{item.icon}</span>
                )}
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10">
            {isAdmin ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 py-5 text-xs font-black uppercase tracking-widest text-red-500"
              >
                <LogOut className="h-5 w-5" /> Terminate Session
              </button>
            ) : (
              <a
                href={`tel:${business.phoneTel}`}
                className="flex w-full items-center justify-center gap-4 rounded-2xl bg-blue-600 py-6 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-600/40"
              >
                <PhoneCall className="h-5 w-5" /> Call {business.name}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
