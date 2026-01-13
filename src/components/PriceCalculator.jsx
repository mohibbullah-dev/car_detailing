import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { business } from "../data/business";

const SIZE_MULTIPLIER = { Small: 1, Sedan: 1.15, SUV: 1.3 };

const SERVICES = [
  {
    name: "Express Wash",
    price: 30,
    description: "Quick refresh • Exterior wash • Wheels cleaned",
  },
  {
    name: "Full Detail",
    price: 80,
    description: "Interior + exterior • Decon • Gloss finish",
  },
  {
    name: "Ceramic Coating",
    price: 200,
    description: "Long-lasting protection • Deep shine • Hydrophobic",
  },
];

const formatGBP = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    n
  );

function PrimaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-zinc-100 ${className}`}
    >
      {children}
    </a>
  );
}

export default function PriceCalculator() {
  const [carSize, setCarSize] = useState("Sedan");
  const [serviceType, setServiceType] = useState(SERVICES[1].name);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.name === serviceType) ?? SERVICES[0],
    [serviceType]
  );

  const total = useMemo(() => {
    const multiplier = SIZE_MULTIPLIER[carSize] ?? 1;
    return Math.round(selectedService.price * multiplier);
  }, [carSize, selectedService.price]);

  const waMessage = useMemo(() => {
    const text =
      `Hi ${business.name}! I'd like to book a mobile detailing service in ${business.city}.%0A%0A` +
      `Car Size: ${carSize}%0A` +
      `Service: ${selectedService.name}%0A` +
      `Estimated Total: ${formatGBP(total)}%0A%0A` +
      `Preferred date/time: `;
    return text;
  }, [carSize, selectedService.name, total]);

  const waLink = `https://wa.me/${business.whatsappNumber}?text=${waMessage}`;

  return (
    <section id="quote" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
              Instant Quote Calculator
            </h2>
            <p className="text-base text-zinc-600">
              Select your car size and service type. Your total updates live —
              then book in seconds via WhatsApp.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Transparent pricing",
                `Mobile service across ${business.city}`,
                "Fast booking",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-700" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-extrabold text-zinc-900">
                  Car Size
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {Object.keys(SIZE_MULTIPLIER).map((size) => {
                    const active = carSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setCarSize(size)}
                        className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          active
                            ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                            : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm font-extrabold text-zinc-900">
                  Service Type
                </label>
                <div className="mt-2 space-y-2">
                  {SERVICES.map((s) => {
                    const active = serviceType === s.name;
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => setServiceType(s.name)}
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          active
                            ? "border-blue-700 bg-blue-700/5"
                            : "border-zinc-200 bg-white hover:bg-zinc-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-extrabold text-zinc-900">
                              {s.name}
                            </div>
                            <div className="mt-1 text-xs text-zinc-600">
                              {s.description}
                            </div>
                          </div>
                          <div className="text-sm font-extrabold text-zinc-900">
                            {formatGBP(s.price)}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-zinc-600">
                      Live Total
                    </div>
                    <div className="text-2xl font-extrabold text-zinc-900">
                      {formatGBP(total)}
                    </div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700">
                    Includes size multiplier
                  </div>
                </div>
                <div className="mt-2 text-xs text-zinc-600">
                  Final quote may vary slightly based on vehicle condition
                  (we’ll confirm before starting).
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={waLink} className="flex-1">
                  Book via WhatsApp <MessageCircle className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton
                  href={`tel:${business.phoneTel}`}
                  className="flex-1"
                >
                  Call Now <PhoneCall className="h-4 w-4" />
                </SecondaryButton>
              </div>

              <div className="text-xs text-zinc-500">
                Demo note: WhatsApp message includes the selected car size,
                service, and estimated total.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
