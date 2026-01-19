import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminUpload from "./pages/AdminUpload";
import AdminPortfolio from "./pages/AdminPortfolio";
import WhatsAppBubble from "./components/WhatsAppBubble";
import BookingModal from "./components/BookingModal"; // Import the new modal

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<Home onOpenBooking={() => setIsBookingOpen(true)} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/upload" element={<AdminUpload />} />
        <Route path="/admin/portfolio" element={<AdminPortfolio />} />
      </Routes>

      <Footer />

      <WhatsAppBubble onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
