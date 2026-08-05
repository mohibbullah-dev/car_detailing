import { Link } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  Crown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { useBusiness, useSite } from "../context/SiteContentContext";

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

function FooterNavLink({ label, href }) {
  const className =
    "group flex items-center gap-2 text-[13px] text-zinc-500 transition-colors hover:text-white";

  const content = (
    <>
      <ChevronRight
        size={12}
        className="text-[#E10600] transition-transform group-hover:translate-x-0.5"
      />
      {label}
    </>
  );

  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export default function Footer() {
  const business = useBusiness();
  const { footerLinks, footerServices } = useSite();
  const currentYear = new Date().getFullYear();

  const socialEntries = Object.entries(business.socials || {}).filter(
    ([, url]) => typeof url === "string" && url.trim().length > 0,
  );

  const brandName = (business.name || "Royal Shine").split(" ")[0] || "Royal";
  const brandRest =
    (business.name || "Royal Shine Detailing").replace(brandName, "").trim() ||
    "Detailing";

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#070707] pt-16 pb-8 font-[Inter,system-ui,sans-serif]">
      <div
        className="hero-noise pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[#E10600]/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E10600]/30 bg-[#E10600]/10">
                <Crown size={20} className="text-[#E10600]" />
              </div>
              <div>
                <p className="font-hero-display text-xl uppercase leading-none tracking-[-0.02em] text-white">
                  {brandName}
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E10600]">
                  {brandRest || business.tagline || "Detailing"}
                </p>
              </div>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-zinc-500">
              {business.footerBlurb ||
                `Premium mobile detailing delivered to your doorstep across ${business.city}.`}
            </p>

            {socialEntries.length > 0 ? (
              <div className="flex gap-3">
                {socialEntries.map(([key, url]) => {
                  const Icon = SOCIAL_ICONS[key] || Facebook;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all hover:border-[#E10600]/40 hover:text-[#E10600]"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            ) : (
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E10600] transition-colors hover:text-white"
              >
                <Mail size={14} />
                Email Us
              </a>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {(footerLinks || []).map(({ label, href }) => (
                <li key={label}>
                  <FooterNavLink label={label} href={href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Packages
            </h3>
            <ul className="mt-6 space-y-3">
              {(footerServices || []).map((item) => {
                const label = typeof item === "string" ? item : item.label;
                const href =
                  typeof item === "string" ? "/#pricing" : item.href || "/#pricing";
                return (
                  <li key={label}>
                    <FooterNavLink label={label} href={href} />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center gap-3 text-[13px] text-zinc-500 transition-colors hover:text-white"
                >
                  <Phone size={14} className="shrink-0 text-[#E10600]" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 break-all text-[13px] text-zinc-500 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0 text-[#E10600]" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-zinc-500">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#E10600]" />
                <span>{business.addressDisplay}</span>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-zinc-500">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#E10600]" />
                <span>{business.hoursDisplay}</span>
              </li>
            </ul>

            <a
              href="/#contact"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#E10600] to-[#7A0000] text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.02] sm:w-auto sm:px-6"
            >
              Book a Detail
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-zinc-600">
            &copy; {currentYear} {business.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-600">
            Serving {business.city} & surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
