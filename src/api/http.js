// frontend/src/api/http.js
import axios from "axios";
import { tokenStorage } from "../lib/storage";

const rawBase = import.meta.env.VITE_API_BASE;
const BASE_URL = (rawBase || "").replace(/\/$/, "");

export const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
