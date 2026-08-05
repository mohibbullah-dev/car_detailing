import { motion } from "framer-motion";
import {
  Droplets,
  Disc3,
  ShieldCheck,
  Sparkles,
  Car,
  ChevronRight,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const STEP_ICONS = {
  droplets: Droplets,
  disc: Disc3,
  shield: ShieldCheck,
  sparkles: Sparkles,
  car: Car,
};

export default function ProcessSteps() {
  const { process } = useSite();
  const processSteps = process.steps;

  return (
    <div className="mt-14 sm:mt-16 lg:mt-20">
      {/* Desktop: 5 columns with arrows */}
      <div className="hidden xl:flex xl:items-stretch xl:justify-between xl:gap-2">
        {processSteps.map((step, index) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <div key={step.number} className="flex flex-1 items-stretch">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="process-step-card flex flex-1 flex-col items-center px-4 py-8 text-center"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#E10600]/40 bg-[#E10600]/10">
                  <span className="text-[10px] font-semibold text-white">
                    {step.number}
                  </span>
                </div>

                <Icon
                  size={36}
                  strokeWidth={1.25}
                  className="mb-6 text-[#E10600]"
                />

                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  {step.title}
                </h3>

                <p className="text-[11px] leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </motion.article>

              {index < processSteps.length - 1 && (
                <div
                  className="flex shrink-0 items-center px-1 text-zinc-700"
                  aria-hidden="true"
                >
                  <ChevronRight size={16} strokeWidth={1.5} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tablet / mobile grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
        {processSteps.map((step, index) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="process-step-card flex flex-col items-center px-5 py-8 text-center"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#E10600]/40 bg-[#E10600]/10">
                <span className="text-[10px] font-semibold text-white">
                  {step.number}
                </span>
              </div>

              <Icon
                size={32}
                strokeWidth={1.25}
                className="mb-5 text-[#E10600]"
              />

              <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {step.title}
              </h3>

              <p className="text-[11px] leading-relaxed text-zinc-500">
                {step.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
