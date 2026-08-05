import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useBusinessStatus } from "./context/BusinessStatusContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Reviews from "./pages/Reviews";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPortfolioPage from "./pages/admin/AdminPortfolioPage";
import AdminUpload from "./pages/AdminUpload";
import AdminPackages from "./pages/admin/AdminPackages";
import AdminReviewsManage from "./pages/admin/AdminReviewsManage";
import AdminFaqsManage from "./pages/admin/AdminFaqsManage";
import AdminSettings from "./pages/admin/AdminSettings";
import WhatsAppBubble from "./components/WhatsAppBubble";
import BookingModal from "./components/BookingModal";

function isAdminRoute(pathname) {
  return pathname.startsWith("/admin");
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { isClosed } = useBusinessStatus();
  const location = useLocation();
  const showPublicChrome = !isAdminRoute(location.pathname);

  const handleOpenBooking = () => {
    if (isClosed) return;
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {showPublicChrome && <Header onOpenBooking={handleOpenBooking} />}

      <Routes>
        <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="portfolio" element={<AdminPortfolioPage />} />
          <Route path="upload" element={<AdminUpload />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="reviews" element={<AdminReviewsManage />} />
          <Route path="faqs" element={<AdminFaqsManage />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>

      {showPublicChrome && <Footer />}

      {showPublicChrome && !isClosed && (
        <WhatsAppBubble onOpenBooking={handleOpenBooking} />
      )}

      {showPublicChrome && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </div>
  );
}
