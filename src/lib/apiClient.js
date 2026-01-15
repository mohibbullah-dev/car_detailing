// frontend/src/lib/apiClient.js
const rawBase = import.meta.env.VITE_API_BASE;

if (!rawBase) {
  console.warn(
    "❌ VITE_API_BASE missing. Add it to .env.local or Vercel env vars."
  );
}

export const API_BASE = (rawBase || "").replace(/\/$/, "");

export async function apiFetch(path, options = {}) {
  const url = API_BASE + path;

  let res;
  try {
    res = await fetch(url, options);
  } catch {
    throw new Error("Network error: backend not reachable / CORS blocked");
  }

  const text = await res.text();
  let data;
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
