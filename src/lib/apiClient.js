// frontend/src/lib/apiClient.js
const rawBase = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export const API_BASE = rawBase.replace(/\/$/, ""); // remove trailing slash

export async function apiFetch(path, options = {}) {
  const url = API_BASE + path;

  let res;
  try {
    res = await fetch(url, options);
  } catch (e) {
    // network/CORS/backend-down
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
