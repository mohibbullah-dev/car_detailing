// frontend/src/api/portfolio.api.js
import { apiFetch } from "../lib/apiClient";
import { tokenStorage } from "../lib/storage";

// GET /api/portfolio
export function getPortfolioApi() {
  return apiFetch("/api/portfolio");
}

// POST /api/portfolio (multipart) - needs Bearer token
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

  // must match multer fields:
  fd.append("before", beforeFile);
  fd.append("after", afterFile);

  return apiFetch("/api/portfolio", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // IMPORTANT: FormData হলে Content-Type set করবে না
    },
    body: fd,
  });
}

// DELETE /api/portfolio/:id - needs Bearer token
export function deletePortfolioApi(id) {
  const token = tokenStorage.get();
  if (!token) throw new Error("Admin token missing. Please login again.");

  return apiFetch(`/api/portfolio/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
