// import { http } from "./http";

// // GET /api/portfolio
// export async function getPortfolioApi() {
//   const res = await http.get("/api/portfolio");
//   return res.data; // array
// }

// // POST /api/portfolio (multipart form-data)
// export async function createPortfolioApi({
//   title,
//   location,
//   notes,
//   tags,
//   beforeFile,
//   afterFile,
// }) {
//   const fd = new FormData();
//   fd.append("title", title);
//   fd.append("location", location);
//   fd.append("notes", notes);

//   // backend expects tags as string "a,b,c"
//   if (Array.isArray(tags)) fd.append("tags", tags.join(","));
//   else if (typeof tags === "string") fd.append("tags", tags);

//   fd.append("before", beforeFile);
//   fd.append("after", afterFile);

//   const res = await http.post("/api/portfolio", fd, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

//   return res.data;
// }

// // DELETE /api/portfolio/:id (optional)
// export async function deletePortfolioApi(id) {
//   const res = await http.delete(`/api/portfolio/${id}`);
//   return res.data;
// }

// frontend/src/api/portfolio.api.js
import { apiFetch } from "../lib/apiClient";

// GET /api/portfolio
export function getPortfolioApi() {
  return apiFetch("/api/portfolio");
}

// POST /api/portfolio
export function createPortfolioApi({
  title,
  location,
  notes,
  tags,
  beforeFile,
  afterFile,
}) {
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
    body: fd,
  });
}

// DELETE /api/portfolio/:id
export function deletePortfolioApi(id) {
  return apiFetch(`/api/portfolio/${id}`, {
    method: "DELETE",
  });
}
