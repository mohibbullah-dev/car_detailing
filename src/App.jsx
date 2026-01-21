import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useBusinessStatus } from "./context/BusinessStatusContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminUpload from "./pages/AdminUpload";
import AdminPortfolio from "./pages/AdminPortfolio";
import WhatsAppBubble from "./components/WhatsAppBubble";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { isClosed } = useBusinessStatus(); // Listen to the Brain

  const handleOpenBooking = () => {
    if (isClosed) return; // Block opening if closed
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header onOpenBooking={handleOpenBooking} />

      <Routes>
        <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/upload" element={<AdminUpload />} />
        <Route path="/admin/portfolio" element={<AdminPortfolio />} />
      </Routes>

      <Footer />

      {/* Only show WhatsApp bubble if business is open */}
      {!isClosed && <WhatsAppBubble onOpenBooking={handleOpenBooking} />}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
