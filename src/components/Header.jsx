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
import { Car, PhoneCall, LayoutDashboard, LogOut } from "lucide-react";
import { business } from "../data/business";
import { Link, useNavigate } from "react-router-dom";
import { tokenStorage } from "../lib/storage";

export default function Header() {
  const navigate = useNavigate();

  // Check if admin is logged in
  const isAdmin = !!tokenStorage.get();

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Work", href: "#work" },
  ];

  const handleLogout = () => {
    tokenStorage.clear(); // Remove the token
    navigate("/"); // Redirect to home
    window.location.reload(); // Refresh to update UI states
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group-hover:border-blue-500/60">
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

        {/* Desktop Nav */}
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {isAdmin ? (
            /* Admin Specific UI */
            <>
              <Link
                to="/admin/portfolio"
                className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">Dashboard</span>
              </Link>

              <button
                onClick={handleLogout}
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            /* Regular User UI */
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-blue-600 hover:text-white"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Get Quote</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
