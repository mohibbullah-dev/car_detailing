import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "../data/business";

export default function WhatsAppBubble({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden sm:flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-2xl border border-zinc-200"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <p className="text-[10px] font-black text-zinc-900 uppercase tracking-tighter">
          Active now in {business.city}
        </p>
      </motion.div>

      <motion.button
        onClick={onOpenBooking}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <MessageCircle size={32} fill="white" />
      </motion.button>
    </div>
  );
}
