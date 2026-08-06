/**
 * Routing helpers:
 * - Local: VITE_API_BASE=http://localhost:8080 → Express backend (service role)
 * - Vercel: no API base → Supabase public reads + /api/* serverless writes
 */
const rawBase = import.meta.env.VITE_API_BASE || "";
export const API_BASE = String(rawBase).replace(/\/$/, "");

/** Absolute backend URL (localhost Express). Relative "/api" counts too. */
export const useBackendWrites = Boolean(API_BASE);

export async function apiFetch(path, options = {}) {
  if (!API_BASE) {
    throw new Error("VITE_API_BASE is not configured");
  }

  const url = `${API_BASE}${path}`;

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
