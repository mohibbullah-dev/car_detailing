import axios from "axios";
import { tokenStorage } from "../lib/storage";

// Put this in frontend .env if you want:
// VITE_API_BASE_URL=http://localhost:5000
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://car-detailling-backend.vercel.app/";

export const http = axios.create({
  baseURL: BASE_URL,
});

// Auto attach JWT for protected routes
http.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
