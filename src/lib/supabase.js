import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseMode = Boolean(url && anonKey);

export const supabase = isSupabaseMode
  ? createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: "royal-shine-admin",
      },
    })
  : null;

export const DATA_BUCKET = "app-data";
export const IMAGES_BUCKET = "portfolio-images";
