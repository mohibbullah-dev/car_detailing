import { http } from "./http";
import { isSupabaseMode } from "../lib/supabase";
import { sbLogin } from "../lib/supabaseData";

export async function loginApi({ email, password }) {
  // Production / demo: talk to Supabase Auth directly (works on Vercel)
  if (isSupabaseMode) {
    return sbLogin(email, password);
  }
  const res = await http.post("/api/auth/login", { email, password });
  return res.data;
}

export async function bootstrapAdminApi() {
  if (isSupabaseMode) {
    return { message: "Use Supabase Auth user (Dashboard → Authentication)" };
  }
  const res = await http.post("/api/auth/bootstrap");
  return res.data;
}
