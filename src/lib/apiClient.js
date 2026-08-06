/**
 * Local only: VITE_API_BASE=http://localhost:8080
 * Production (Vercel): ignore localhost — use Supabase public reads + /api serverless
 */

function sanitizeApiBase(raw) {
  const base = String(raw || "").replace(/\/$/, "");
  if (!base) return "";

  const isLoopback =
    /localhost|127\.0\.0\.1/i.test(base);

  // Built for production → never ship a loopback API URL
  if (import.meta.env.PROD && isLoopback) return "";

  // Runtime safety: deployed hostname must not call localhost
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    const onDeployedHost =
      host && host !== "localhost" && host !== "127.0.0.1";
    if (onDeployedHost && isLoopback) return "";
  }

  return base;
}

export const API_BASE = sanitizeApiBase(import.meta.env.VITE_API_BASE);

/** True only for a real reachable backend (local Express), not broken localhost-on-Vercel */
export const useBackendWrites = Boolean(API_BASE);

export function preferLocalBackend() {
  return useBackendWrites && /^https?:\/\//i.test(API_BASE);
}

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
