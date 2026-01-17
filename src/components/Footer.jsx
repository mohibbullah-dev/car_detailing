// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   MapPin,
//   Phone,
//   MessageCircle,
//   ArrowUpRight,
// } from "lucide-react";
// import { business } from "../data/business";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-white/10 bg-zinc-950 pt-20 pb-10">
//       <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <div>
//               <div className="text-xl font-black italic tracking-tighter text-white">
//                 ROYAL SHINE <span className="text-blue-600">DETAILING</span>
//               </div>
//               <p className="mt-4 text-sm leading-relaxed text-zinc-400">
//                 Precision mobile detailing delivered to your doorstep. Restoring
//                 showroom perfection across {business.city}.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               {[Instagram, Facebook, Twitter].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white text-zinc-400"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">
//               Menu
//             </h3>
//             <ul className="mt-6 space-y-4">
//               {["Services", "Our Work", "Reviews", "FAQ"].map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`#${item.toLowerCase().replace(" ", "-")}`}
//                     className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-blue-500"
//                   >
//                     <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">
//               Contact
//             </h3>
//             <ul className="mt-6 space-y-4">
//               <li>
//                 <a
//                   href={`tel:${business.phoneTel}`}
//                   className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
//                 >
//                   <Phone className="h-4 w-4 text-blue-600" />
//                   {business.phoneDisplay}
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={`https://wa.me/${business.whatsappNumber}`}
//                   className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
//                 >
//                   <MessageCircle className="h-4 w-4 text-green-500" />
//                   WhatsApp Booking
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-sm font-medium text-zinc-400">
//                 <MapPin className="mt-1 h-4 w-4 text-blue-600" />
//                 <span>
//                   Mobile Service • {business.city}
//                   <br />
//                   <span className="text-xs text-zinc-600">
//                     Serving within {business.serviceRadiusMiles} miles
//                   </span>
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Demo Note / Badge */}
//           <div className="rounded-2xl border border-blue-900/30 bg-blue-900/10 p-6 backdrop-blur-sm">
//             <h3 className="text-xs font-black uppercase tracking-widest text-blue-400">
//               Dev Note
//             </h3>
//             <p className="mt-3 text-xs leading-relaxed text-blue-200/70">
//               This is a conversion-optimized demo site designed for Google Maps
//               outreach. All elements are customizable.
//             </p>
//             <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-500">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//               </span>
//               System Operational
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row gap-4">
//           <p className="text-xs text-zinc-600">
//             &copy; {currentYear} {business.name}. All rights reserved.
//           </p>
//           <p className="text-xs text-zinc-600 flex items-center gap-1">
//             Developed by{" "}
//             <span className="text-zinc-400 font-bold">M.d.mohibbullah brm</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { business } from "../data/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column - Centered on mobile */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-6">
            <div>
              <div className="text-2xl font-black italic tracking-tighter text-white">
                ROYAL SHINE <span className="text-blue-600">DETAILING</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 max-w-xs">
                Precision mobile detailing delivered to your doorstep. Restoring
                showroom perfection across {business.city}.
              </p>
            </div>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white text-zinc-400 shadow-lg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Navigation
            </h3>
            <ul className="mt-6 space-y-4">
              {["Services", "Our Work", "Reviews", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-zinc-400 transition hover:text-blue-500"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-green-500 shrink-0" />
                  WhatsApp Booking
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-zinc-400">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Mobile Service • {business.city}
                  <br />
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-tight">
                    Serving within {business.serviceRadiusMiles} miles
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Dev Note - Full width on very small, grid item otherwise */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <ArrowUpRight size={40} className="text-blue-500" />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
              Live Demo
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-blue-200/60">
              This conversion-optimized platform is designed for elite detailing
              brands. Customized for {business.name}.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-blue-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Engine Active
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stacks on mobile, splits on desktop */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-center md:flex-row md:text-left gap-6">
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-widest text-zinc-600">
              &copy; {currentYear} {business.name}. All rights reserved.
            </p>
          </div>

          <div className="order-1 md:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-400 transition">
              Terms
            </a>
            <p className="flex items-center gap-1">
              Built by{" "}
              <span className="text-zinc-300 font-black">
                M.d.mohibbullah brm
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
