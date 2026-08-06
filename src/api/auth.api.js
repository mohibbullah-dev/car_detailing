import { http } from "./http";
import { isSupabaseMode } from "../lib/supabase";
import { useBackendWrites } from "../lib/apiClient";
import { sbLogin } from "../lib/supabaseData";

export async function loginApi({ email, password }) {
  // Local Express backend when configured
  if (useBackendWrites && !API_BASE_IS_RELATIVE()) {
    const res = await http.post("/api/auth/login", { email, password });
    return res.data;
  }

  // Vercel / production: Supabase Auth (token works with /api serverless)
  if (isSupabaseMode) {
    return sbLogin(email, password);
  }

  const res = await http.post("/api/auth/login", { email, password });
  return res.data;
}

function API_BASE_IS_RELATIVE() {
  const base = import.meta.env.VITE_API_BASE || "";
  return base.startsWith("/");
}

export async function bootstrapAdminApi() {
  if (isSupabaseMode) {
    return { message: "Use Supabase Auth user (Dashboard → Authentication)" };
  }
  const res = await http.post("/api/auth/bootstrap");
  return res.data;
}
