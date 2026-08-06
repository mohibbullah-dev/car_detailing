import {
  cors,
  getAdminSupabase,
  requireAdmin,
  DATA_BUCKET,
} from "../_lib/supabaseAdmin.js";

const ALLOWED = new Set([
  "portfolio.json",
  "settings.json",
  "site-content.json",
]);

export default async function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const user = await requireAdmin(req, res);
  if (!user) return;

  try {
    const { path, value } = req.body || {};
    if (!path || !ALLOWED.has(path)) {
      return res.status(400).json({ message: "Invalid path" });
    }
    if (value === undefined) {
      return res.status(400).json({ message: "Missing value" });
    }

    const supabase = getAdminSupabase();
    const body = JSON.stringify(value, null, 2);
    const { error } = await supabase.storage
      .from(DATA_BUCKET)
      .upload(path, Buffer.from(body, "utf8"), {
        upsert: true,
        contentType: "application/json",
      });

    if (error) throw error;
    return res.status(200).json({ ok: true, path });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err?.message || "Failed to write JSON",
    });
  }
}
