import { apiFetch } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";

export function getPortfolioApi() {
  return apiFetch("/api/portfolio");
}

export function createPortfolioApi({
  title,
  location,
  notes,
  tags,
  beforeFile,
  afterFile,
}) {
  const token = tokenStorage.get();
  if (!token) throw new Error("Admin token missing. Please login again.");

  const fd = new FormData();
  fd.append("title", title);
  fd.append("location", location);
  fd.append("notes", notes);
  fd.append("tags", tags || "");

  fd.append("before", beforeFile);
  fd.append("after", afterFile);

  return apiFetch("/api/portfolio", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: fd,
  });
}

export function updatePortfolioApi(id, payload) {
  const token = tokenStorage.get();
  if (!token) throw new Error("Admin token missing. Please login again.");

  const fd = new FormData();
  fd.append("title", payload.title);
  fd.append("location", payload.location);
  fd.append("notes", payload.notes);
  fd.append("tags", payload.tags || "");

  // optional files
  if (payload.beforeFile) fd.append("before", payload.beforeFile);
  if (payload.afterFile) fd.append("after", payload.afterFile);

  return apiFetch(`/api/portfolio/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: fd,
  });
}

export function deletePortfolioApi(id) {
  const token = tokenStorage.get();
  if (!token) throw new Error("Admin token missing. Please login again.");

  return apiFetch(`/api/portfolio/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}
