import { Car, PhoneCall } from "lucide-react";
import { business } from "../data/business";
import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white shadow-sm">
            <Car className="h-5 w-5 text-zinc-900" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-zinc-900">
              {business.name}
            </div>
            <div className="text-xs text-zinc-500">
              Mobile detailing • {business.city}
            </div>
          </div>
        </a>
        {/* <Link
          to="/portfolio"
          className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition"
        >
          Portfolio
        </Link> */}

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>

          <a
            href={`tel:${business.phoneTel}`}
            className="sm:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition"
            aria-label="Call Now"
          >
            <PhoneCall className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
