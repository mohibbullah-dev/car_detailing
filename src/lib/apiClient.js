const rawBase = import.meta.env.VITE_API_BASE || "https://YOUR_BACKEND_DOMAIN";
export const API_BASE = rawBase.replace(/\/$/, "");

export async function apiFetch(path, options = {}) {
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
