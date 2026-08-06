import { http } from "./http";
import { isSupabaseMode } from "../lib/supabase";
import { preferLocalBackend } from "../lib/apiClient";
import { sbLogin } from "../lib/supabaseData";

export async function loginApi({ email, password }) {
  if (preferLocalBackend()) {
    const res = await http.post("/api/auth/login", { email, password });
    return res.data;
  }

  if (isSupabaseMode) {
    return sbLogin(email, password);
  }

  const res = await http.post("/api/auth/login", { email, password });
  return res.data;
}

export async function bootstrapAdminApi() {
  if (preferLocalBackend()) {
    const res = await http.post("/api/auth/bootstrap");
    return res.data;
  }
  if (isSupabaseMode) {
    return { message: "Use Supabase Auth user (Dashboard → Authentication)" };
  }
  const res = await http.post("/api/auth/bootstrap");
  return res.data;
}
