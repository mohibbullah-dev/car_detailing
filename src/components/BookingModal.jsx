import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Car, MapPin, Sparkles, Send } from "lucide-react";
import { useBusiness } from "../context/SiteContentContext";
import { generateWhatsAppLink } from "../lib/whatsapp";

export default function BookingModal({ isOpen, onClose }) {
  const business = useBusiness();
  const [formData, setFormData] = useState({
    name: "",
    car: "",
    service: "Full Detail",
    location: "",
  });

  useEffect(() => {
    if (business.city) {
      setFormData((prev) =>
        prev.location ? prev : { ...prev, location: business.city },
      );
    }
  }, [business.city]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const detailBlock = `\n\n--- Appointment Request ---\n👤 Name: ${formData.name}\n🚗 Car: ${formData.car}\n📍 Location: ${formData.location}\n🛠 Service: ${formData.service}`;
    const whatsappUrl =
      generateWhatsAppLink(formData.service, "Quote Request", business) +
      encodeURIComponent(detailBlock);
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const inputClass =
    "w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none transition-all placeholder:text-zinc-700 focus:border-[#E10600]/50";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl"
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#7a0000] via-[#E10600] to-[#ff2a20]"
              aria-hidden="true"
            />

            <button
              onClick={onClose}
              className="absolute right-8 top-8 z-10 text-zinc-500 transition-colors hover:text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E10600]">
                <Sparkles size={12} className="animate-pulse" /> Priority
                Booking
              </div>
              <h3 className="text-3xl font-black uppercase leading-none tracking-tighter text-white">
                Get Your <span className="text-[#E10600]">Quote.</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="ml-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Full Name
                </label>
                <input
                  required
                  autoFocus
                  className={inputClass}
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Car Model
                  </label>
                  <div className="relative">
                    <Car
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={16}
                    />
                    <input
                      required
                      className={`${inputClass} pl-12 pr-6`}
                      placeholder="e.g. BMW M4"
                      onChange={(e) =>
                        setFormData({ ...formData, car: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={16}
                    />
                    <input
                      required
                      className={`${inputClass} pl-12 pr-6`}
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="ml-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Service Type
                </label>
                <select
                  className={`${inputClass} cursor-pointer appearance-none`}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option className="bg-zinc-900">Full Detail</option>
                  <option className="bg-zinc-900">Ceramic Coating</option>
                  <option className="bg-zinc-900">Interior Restoration</option>
                  <option className="bg-zinc-900">Maintenance Wash</option>
                </select>
              </div>

              <button
                type="submit"
                className="group mt-4 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#E10600] text-xs font-black uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(225,6,0,0.35)] transition-all hover:-translate-y-1 hover:bg-[#c00500] active:scale-95"
              >
                Confirm via WhatsApp
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
