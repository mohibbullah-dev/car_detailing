import { http } from "./http";

// POST /api/auth/login
export async function loginApi({ email, password }) {
  const res = await http.post("/api/auth/login", { email, password });
  return res.data; // { token }
}

// POST /api/auth/bootstrap (optional: one-time)
export async function bootstrapAdminApi() {
  const res = await http.post("/api/auth/bootstrap");
  return res.data;
}
