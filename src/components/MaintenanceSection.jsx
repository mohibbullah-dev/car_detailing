import React from "react";
import { Check, Crown, CalendarDays, ArrowRight } from "lucide-react";
import { maintenancePlans } from "../data/plans";
import { business } from "../data/business";

export default function MaintenanceSection() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">
              <Crown className="h-3 w-3" /> Exclusive Membership
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase leading-none">
              The Maintenance{" "}
              <span className="text-blue-600 italic">Club.</span>
            </h2>
            <p className="mt-6 text-zinc-400 font-medium">
              Keep your vehicle in showroom condition year-round. Our recurring
              plans are designed for {business.city}'s elite owners who value
              perfection.
            </p>
          </div>

          <div className="hidden lg:block pb-2">
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold">
              <CalendarDays className="text-blue-500" size={20} />
              No Long-Term Contracts • Cancel Anytime
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {maintenancePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 ${
                plan.recommended
                  ? "border-blue-600 bg-blue-600/5 shadow-[0_0_40px_rgba(37,99,235,0.1)]"
                  : "border-white/10 bg-zinc-900/40 hover:border-white/20"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-6 right-8 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">
                    £{plan.price}
                  </span>
                  <span className="text-zinc-500 font-bold lowercase tracking-normal">
                    /{plan.frequency}
                  </span>
                </div>
              </div>

              <ul className="mb-10 space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm font-medium text-zinc-300"
                  >
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${business.whatsappNumber}?text=I'm interested in joining the ${plan.name}!`}
                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-5 text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                  plan.recommended
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Join the club <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
