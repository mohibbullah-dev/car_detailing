import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const FEATURE_ICONS = {
  zap: Zap,
  message: MessageCircle,
  calendar: Calendar,
  shield: ShieldCheck,
  award: Award,
};

export default function ContactFeaturesBar() {
  const { contact } = useSite();
  const contactFeatures = contact.features;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="hero-glass-card mt-12 grid grid-cols-1 gap-6 p-6 sm:mt-14 sm:grid-cols-2 sm:p-8 lg:mt-16 lg:grid-cols-5 lg:gap-4"
    >
      {contactFeatures.map(({ id, title, description, icon }) => {
        const Icon = FEATURE_ICONS[icon];
        return (
          <div
            key={id}
            className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center"
          >
            <Icon
              size={18}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-[#E10600] lg:mt-0"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                {title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
