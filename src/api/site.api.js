import { apiFetch } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";
import { isSupabaseMode } from "../lib/supabase";
import { sbGetSite, sbSaveSite } from "../lib/supabaseData";

export function getSiteContentApi() {
  if (isSupabaseMode) return sbGetSite().then((data) => data || {});
  return apiFetch("/api/site");
}

export function updateSiteContentApi(payload) {
  if (isSupabaseMode) {
    return sbGetSite().then(async (current) => {
      const next = { ...(current || {}), ...payload, updatedAt: new Date().toISOString() };
      await sbSaveSite(next);
      return next;
    });
  }

  const token = tokenStorage.get();
  return apiFetch("/api/site", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });
}
