import { http } from "./http";
import { isSupabaseMode } from "../lib/supabase";
import { useBackendWrites } from "../lib/apiClient";
import { sbLogin } from "../lib/supabaseData";

export async function loginApi({ email, password }) {
  // When local API is configured, ALWAYS use it (JWT works with admin writes).
  // Do not silently fall back to Supabase — that breaks Open/Close + saves.
  if (useBackendWrites) {
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
  if (useBackendWrites) {
    const res = await http.post("/api/auth/bootstrap");
    return res.data;
  }
  if (isSupabaseMode) {
    return { message: "Use Supabase Auth user (Dashboard → Authentication)" };
  }
  const res = await http.post("/api/auth/bootstrap");
  return res.data;
}
