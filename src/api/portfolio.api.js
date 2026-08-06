import { apiFetch, useBackendWrites } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";
import { isSupabaseMode } from "../lib/supabase";
import {
  sbCreatePortfolio,
  sbDeletePortfolio,
  sbGetPortfolio,
  sbUpdatePortfolio,
} from "../lib/supabaseData";

function preferLocalBackend() {
  const base = import.meta.env.VITE_API_BASE || "";
  return useBackendWrites && /^https?:\/\//i.test(base);
}

export function getPortfolioApi() {
  if (preferLocalBackend()) return apiFetch("/api/portfolio");
  if (isSupabaseMode) return sbGetPortfolio();
  if (useBackendWrites) return apiFetch("/api/portfolio");
  return Promise.resolve([]);
}

export function createPortfolioApi(payload) {
  if (preferLocalBackend()) {
    const token = tokenStorage.get();
    if (!token) throw new Error("Admin token missing. Please login again.");

    const fd = new FormData();
    fd.append("title", payload.title);
    fd.append("location", payload.location);
    fd.append("notes", payload.notes);
    fd.append("tags", payload.tags || "");
    fd.append("before", payload.beforeFile);
    fd.append("after", payload.afterFile);

    return apiFetch("/api/portfolio", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
  }

  if (isSupabaseMode) return sbCreatePortfolio(payload);
  throw new Error("No write target configured");
}

export function updatePortfolioApi(id, payload) {
  if (preferLocalBackend()) {
    const token = tokenStorage.get();
    if (!token) throw new Error("Admin token missing. Please login again.");

    const fd = new FormData();
    fd.append("title", payload.title);
    fd.append("location", payload.location);
    fd.append("notes", payload.notes);
    fd.append("tags", payload.tags || "");
    if (payload.beforeFile) fd.append("before", payload.beforeFile);
    if (payload.afterFile) fd.append("after", payload.afterFile);

    return apiFetch(`/api/portfolio/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
  }

  if (isSupabaseMode) return sbUpdatePortfolio(id, payload);
  throw new Error("No write target configured");
}

export function deletePortfolioApi(id) {
  if (preferLocalBackend()) {
    const token = tokenStorage.get();
    if (!token) throw new Error("Admin token missing. Please login again.");

    return apiFetch(`/api/portfolio/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  if (isSupabaseMode) return sbDeletePortfolio(id);
  throw new Error("No write target configured");
}
