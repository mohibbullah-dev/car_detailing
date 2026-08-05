import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useBusiness, useSite } from "../../context/SiteContentContext";

const INFO_ICONS = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
};

function formatValueLines(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [String(value ?? "")];
  return value
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
}

export default function ContactInfoGrid() {
  const business = useBusiness();
  const { contact } = useSite();
  const contactInfoItems = contact.infoItems;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {contactInfoItems.map((item, index) => {
        const Icon = INFO_ICONS[item.icon];
        const rawValue = business[item.valueKey];
        const lines = formatValueLines(rawValue);
        const href = item.hrefKey
          ? `${item.hrefPrefix}${business[item.hrefKey]}`
          : null;
        const Wrapper = href ? "a" : "div";

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Wrapper
              {...(href
                ? {
                    href,
                    target: item.icon === "mapPin" ? "_blank" : undefined,
                    rel:
                      item.icon === "mapPin"
                        ? "noopener noreferrer"
                        : undefined,
                  }
                : {})}
              className="contact-info-card group flex h-full min-h-[96px] items-center gap-4 px-5 py-4 sm:min-h-[108px] sm:px-5 sm:py-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E10600]/30 bg-[#E10600]/10 transition-colors group-hover:border-[#E10600]/45 group-hover:bg-[#E10600]/15">
                <Icon size={18} strokeWidth={1.5} className="text-[#E10600]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {item.label}
                </p>
                <div className="mt-1.5 space-y-0.5">
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="break-words text-[13px] leading-snug text-zinc-400 transition-colors group-hover:text-zinc-300 sm:text-[14px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  );
}
