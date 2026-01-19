import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Car, MapPin, Sparkles, Send } from "lucide-react";
import { business } from "../data/business";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    car: "",
    service: "Full Detail",
    location: business.city,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Royal Shine! My name is ${formData.name}. I'm interested in a ${formData.service} for my ${formData.car} in ${formData.location}. Could you provide a quote?`;
    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-[10px] mb-2">
                <Sparkles size={12} /> Fast Booking
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                Get Your <span className="text-blue-500">Quote.</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">
                  Full Name
                </label>
                <input
                  required
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">
                    Car Model
                  </label>
                  <div className="relative">
                    <Car
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                      size={18}
                    />
                    <input
                      required
                      className="w-full rounded-2xl border border-white/5 bg-white/5 pl-12 pr-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all"
                      placeholder="e.g. BMW M4"
                      onChange={(e) =>
                        setFormData({ ...formData, car: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                      size={18}
                    />
                    <input
                      required
                      className="w-full rounded-2xl border border-white/5 bg-white/5 pl-12 pr-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all"
                      defaultValue={business.city}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">
                  Service Type
                </label>
                <select
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all appearance-none"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option className="bg-zinc-900">Full Detail</option>
                  <option className="bg-zinc-900">Ceramic Coating</option>
                  <option className="bg-zinc-900">Interior Deep Clean</option>
                  <option className="bg-zinc-900">Paint Correction</option>
                </select>
              </div>

              <button
                type="submit"
                className="group w-full mt-4 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-xs font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-lg"
              >
                Continue to WhatsApp <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
