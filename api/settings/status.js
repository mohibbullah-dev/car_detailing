import { cors, getAdminSupabase, DATA_BUCKET } from "../_lib/supabaseAdmin.js";

async function readPublicOrAdmin(path, fallback) {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  if (url) {
    const res = await fetch(
      `${url}/storage/v1/object/public/${DATA_BUCKET}/${path}?t=${Date.now()}`,
      { cache: "no-store" },
    );
    if (res.ok) {
      const text = await res.text();
      if (text) return JSON.parse(text);
    }
  }

  const supabase = getAdminSupabase();
  const { data, error } = await supabase.storage.from(DATA_BUCKET).download(path);
  if (error) return fallback;
  const text = await data.text();
  return text ? JSON.parse(text) : fallback;
}

export default async function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method === "GET") {
    try {
      const settings = await readPublicOrAdmin("settings.json", {
        isClosed: false,
        reason: "We are currently fully booked.",
      });
      return res.status(200).json({
        isClosed: !!settings.isClosed,
        reason: settings.reason || "We are currently fully booked.",
      });
    } catch (err) {
      return res.status(500).json({ message: err?.message || "Failed" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
