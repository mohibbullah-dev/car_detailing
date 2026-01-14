// frontend/src/lib/apiClient.js
export const API_BASE = "https://cardetaillingbackend4-3v448inl.b4a.run";

export async function apiFetch(path, options = {}) {
  const res = await fetch(API_BASE + path, options);

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text; // fallback for non-json
  }

  if (!res.ok) {
    throw new Error(data?.message || data || `Request failed (${res.status})`);
  }

  return data;
}
