import axios from "axios";
import { tokenStorage } from "../lib/storage";
import { API_BASE } from "../lib/apiClient";

export const http = axios.create({
  baseURL: API_BASE || undefined,
});

http.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
