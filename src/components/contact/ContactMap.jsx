import { motion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import { useBusiness } from "../../context/SiteContentContext";

export default function ContactMap() {
  const business = useBusiness();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="contact-map-card flex min-h-[220px] flex-col overflow-hidden sm:min-h-[240px]"
    >
      <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
        <iframe
          title={`Map showing ${business.city} service area`}
          src={business.mapEmbedUrl}
          className="contact-map-iframe absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#070707]/20"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <MapPin
            size={28}
            fill="#E10600"
            className="text-[#E10600] drop-shadow-[0_4px_12px_rgba(225,6,0,0.5)]"
            aria-hidden="true"
          />
        </div>
      </div>

      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 border-t border-white/[0.08] px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/[0.03]"
      >
        <MapPin size={14} className="text-[#E10600]" />
        Get Directions
        <ChevronRight
          size={14}
          className="text-[#E10600] transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </a>
    </motion.div>
  );
}
