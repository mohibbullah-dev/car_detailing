import { apiFetch, useBackendWrites } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";
import { isSupabaseMode } from "../lib/supabase";
import { sbGetSite, sbSaveSite } from "../lib/supabaseData";
import { DEFAULT_SITE, mergeSite } from "../data/siteDefaults";

export function getSiteContentApi() {
  if (useBackendWrites) return apiFetch("/api/site");
  if (isSupabaseMode) {
    return sbGetSite().then((data) => data || {});
  }
  return Promise.resolve({});
}

export async function updateSiteContentApi(payload) {
  if (useBackendWrites) {
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

  if (isSupabaseMode) {
    const current = (await sbGetSite()) || {};
    const base = Object.keys(current).length > 0 ? current : DEFAULT_SITE;
    const next = mergeSite({
      ...base,
      ...payload,
      updatedAt: new Date().toISOString(),
    });
    if (payload.business)
      next.business = { ...next.business, ...payload.business };
    if (payload.pricing)
      next.pricing = { ...next.pricing, ...payload.pricing };
    if (payload.reviews)
      next.reviews = { ...next.reviews, ...payload.reviews };
    if (payload.faq) next.faq = { ...next.faq, ...payload.faq };
    if (payload.heroStats) next.heroStats = payload.heroStats;
    await sbSaveSite(next);
    return next;
  }

  throw new Error("No write target configured");
}
