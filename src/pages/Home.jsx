import React from "react";
import { useBusinessStatus } from "../context/BusinessStatusContext";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Hero from "../components/Hero";
import PriceCalculator from "../components/PriceCalculator";
import Services from "../components/Services";
import PreviousWorkSlider from "../components/PreviousWorkSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import MaintenanceSection from "../components/MaintenanceSection";
import ServiceArea from "../components/ServiceArea";
import FAQ from "../components/FAQ";

export default function Home({ onOpenBooking }) {
  const { isClosed, reason } = useBusinessStatus();

  return (
    <div className="relative">
      {/* PROFESSIONAL CLOSED OVERLAY BANNER */}
      <AnimatePresence>
        {isClosed && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-0 w-full z-50 px-4 pointer-events-none"
          >
            <div className="max-w-xl mx-auto bg-red-600/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 pointer-events-auto">
              <div className="bg-white/20 p-2 rounded-xl">
                <AlertCircle className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">
                  Bookings Paused
                </h4>
                <p className="text-white/90 text-sm font-medium leading-tight">
                  {reason}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`transition-all duration-700 ${isClosed ? "grayscale-[0.5] brightness-[0.7]" : ""}`}
      >
        <Hero onOpenBooking={onOpenBooking} />
        <PreviousWorkSlider limit={4} />
        <MaintenanceSection />
        <PriceCalculator />
        <Services onOpenBooking={onOpenBooking} />
        <TestimonialSlider />
        <FAQ />
        <ServiceArea />
      </div>
    </div>
  );
}
