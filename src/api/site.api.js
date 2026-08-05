import { apiFetch } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";

export function getSiteContentApi() {
  return apiFetch("/api/site");
}

export function updateSiteContentApi(payload) {
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
