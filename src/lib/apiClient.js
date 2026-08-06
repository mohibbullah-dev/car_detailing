/**
 * Routing helpers:
 * - Supabase = public reads + Auth login (works on Vercel)
 * - Backend API = admin writes (service role bypasses storage RLS)
 *   Used whenever VITE_API_BASE is set (local .env).
 */
export const isSupabaseMode = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const rawBase = import.meta.env.VITE_API_BASE || "";
export const API_BASE = String(rawBase).replace(/\/$/, "");

/** Prefer Express/backend for mutations when a base URL is configured */
export const useBackendWrites = Boolean(API_BASE);

export async function apiFetch(path, options = {}) {
  if (!API_BASE) {
    throw new Error("VITE_API_BASE is not configured");
  }

  const url = API_BASE + path;

  let res;
  try {
    res = await fetch(url, options);
  } catch {
    throw new Error("Network error: backend not reachable / CORS blocked");
  }

  const text = await res.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new Error(data?.message || data || `Request failed (${res.status})`);
  }

  return data;
}
