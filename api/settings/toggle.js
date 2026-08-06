import {
  cors,
  getAdminSupabase,
  requireAdmin,
  DATA_BUCKET,
} from "../_lib/supabaseAdmin.js";

export default async function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const user = await requireAdmin(req, res);
  if (!user) return;

  try {
    const { isClosed, reason } = req.body || {};
    const settings = {
      isClosed: !!isClosed,
      reason: reason || "We are currently fully booked.",
    };

    const supabase = getAdminSupabase();
    const body = JSON.stringify(settings, null, 2);
    const { error } = await supabase.storage
      .from(DATA_BUCKET)
      .upload("settings.json", Buffer.from(body, "utf8"), {
        upsert: true,
        contentType: "application/json",
      });

    if (error) throw error;
    return res.status(200).json(settings);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err?.message || "Toggle failed" });
  }
}
