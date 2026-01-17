// import { business } from "../data/business";

// export default function Footer() {
//   return (
//     <footer className="border-t border-zinc-200 bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="space-y-2">
//             <div className="text-sm font-extrabold text-zinc-900">
//               {business.name}
//             </div>
//             <div className="text-sm text-zinc-600">
//               Premium mobile car detailing in {business.city}. Serving within{" "}
//               {business.serviceRadiusMiles} miles.
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="text-sm font-extrabold text-zinc-900">
//               Quick Links
//             </div>
//             <div className="flex flex-col gap-2 text-sm">
//               <a className="text-zinc-700 hover:text-zinc-900" href="#services">
//                 Services
//               </a>
//               <a className="text-zinc-700 hover:text-zinc-900" href="#reviews">
//                 Reviews
//               </a>
//               <a className="text-zinc-700 hover:text-zinc-900" href="#quote">
//                 Get a Quote
//               </a>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="text-sm font-extrabold text-zinc-900">Contact</div>
//             <div className="flex flex-col gap-2 text-sm text-zinc-700">
//               <a
//                 className="hover:text-zinc-900"
//                 href={`tel:${business.phoneTel}`}
//               >
//                 {business.phoneDisplay}
//               </a>
//               <a
//                 className="hover:text-zinc-900"
//                 href={`https://wa.me/${
//                   business.whatsappNumber
//                 }?text=${encodeURIComponent(
//                   `Hi ${business.name}! I'd like to book a mobile detailing service in ${business.city}.`
//                 )}`}
//               >
//                 WhatsApp booking
//               </a>
//               <span className="text-zinc-500">
//                 Mobile service • {business.city}
//               </span>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="text-sm font-extrabold text-zinc-900">
//               Demo Note
//             </div>
//             <div className="text-sm text-zinc-600">
//               This is a conversion-focused demo used for Google Maps outreach
//               and can be customized per client.
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             © {new Date().getFullYear()} {business.name}. All rights reserved.
//           </div>
//           <div>
//             Developed by{" "}
//             <span className="font-semibold text-zinc-700">
//               M.d.mohibbullah brm
//             </span>
//           </div>
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
    <footer className="border-t border-white/10 bg-zinc-950 pt-20 pb-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="text-xl font-black italic tracking-tighter text-white">
                ROYAL SHINE <span className="text-blue-600">DETAILING</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Precision mobile detailing delivered to your doorstep. Restoring
                showroom perfection across {business.city}.
              </p>
            </div>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white text-zinc-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Menu
            </h3>
            <ul className="mt-6 space-y-4">
              {["Services", "Our Work", "Reviews", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-blue-500"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Contact
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  WhatsApp Booking
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-zinc-400">
                <MapPin className="mt-1 h-4 w-4 text-blue-600" />
                <span>
                  Mobile Service • {business.city}
                  <br />
                  <span className="text-xs text-zinc-600">
                    Serving within {business.serviceRadiusMiles} miles
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Demo Note / Badge */}
          <div className="rounded-2xl border border-blue-900/30 bg-blue-900/10 p-6 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-blue-400">
              Dev Note
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-blue-200/70">
              This is a conversion-optimized demo site designed for Google Maps
              outreach. All elements are customizable.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              System Operational
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            Developed by{" "}
            <span className="text-zinc-400 font-bold">M.d.mohibbullah brm</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
