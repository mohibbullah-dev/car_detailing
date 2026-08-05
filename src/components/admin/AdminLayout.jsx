import { useEffect } from "react";
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

  useEffect(() => {
    if (!token) {
      navigate("/admin/login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  const title = ROUTE_TITLES[location.pathname] || "Admin";

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <AdminSidebar />
      <div className="pl-[260px]">
        <main className="mx-auto max-w-7xl px-6 py-8">
          <AdminTopBar title={title} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
