import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopBar from "./AdminTopBar";
import { tokenStorage } from "../../lib/storage";

const ROUTE_TITLES = {
  "/admin": "Dashboard",
  "/admin/portfolio": "Portfolio / Work",
  "/admin/upload": "Add Work",
  "/admin/packages": "Packages",
  "/admin/reviews": "Reviews",
  "/admin/faqs": "FAQs",
  "/admin/settings": "Settings",
};

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = tokenStorage.get();
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login", { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [moreOpen]);

  if (!token) {
    return null;
  }

  const title = ROUTE_TITLES[location.pathname] || "Admin";

  return (
    <div className="min-h-dvh bg-[#070707] text-white">
      <AdminSidebar
        moreOpen={moreOpen}
        onMoreOpen={() => setMoreOpen(true)}
        onMoreClose={() => setMoreOpen(false)}
      />

      <div className="lg:pl-[260px]">
        <main className="mx-auto w-full max-w-7xl px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-5 sm:px-6 sm:pt-8 lg:pb-10">
          <AdminTopBar title={title} />
          <div className="min-w-0 overflow-x-hidden">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
