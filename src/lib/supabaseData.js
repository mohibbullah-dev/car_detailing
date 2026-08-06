import {
  supabase,
  isSupabaseMode,
  DATA_BUCKET,
  IMAGES_BUCKET,
} from "./supabase";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

/** Public bucket HTTP read — works on Vercel even when anon SDK hits RLS */
async function downloadJson(path, fallback) {
  // 1) Public URL (app-data bucket is public)
  if (SUPABASE_URL) {
    try {
      const url = `${SUPABASE_URL}/storage/v1/object/public/${DATA_BUCKET}/${path}?t=${Date.now()}`;
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const text = await res.text();
        if (text) return JSON.parse(text);
      }
    } catch (err) {
      console.warn("Public JSON fetch failed, trying SDK:", err);
    }
  }

  // 2) SDK fallback (local / authenticated)
  if (!supabase) return fallback;
  const { data, error } = await supabase.storage.from(DATA_BUCKET).download(path);
  if (error) {
    const msg = String(error.message || "").toLowerCase();
    if (msg.includes("not found") || msg.includes("object not found")) {
      return fallback;
    }
    throw error;
  }
  const text = await data.text();
  if (!text) return fallback;
  return JSON.parse(text);
}

async function uploadJsonViaApi(path, value) {
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("admin_token")
      : null;
  const res = await fetch("/api/admin/json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ path, value }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Write failed (${res.status})`);
  }
  return value;
}

async function uploadJson(path, value) {
  // Prefer same-origin serverless write on deployed site (service role)
  if (typeof window !== "undefined" && import.meta.env.PROD) {
    return uploadJsonViaApi(path, value);
  }

  const body = JSON.stringify(value, null, 2);
  const blob = new Blob([body], { type: "application/json" });
  const { error } = await supabase.storage.from(DATA_BUCKET).upload(path, blob, {
    upsert: true,
    contentType: "application/json",
  });

  if (error) {
    // RLS blocked — try serverless proxy (works after Vercel deploy)
    const msg = String(error.message || "").toLowerCase();
    if (msg.includes("row-level security") || msg.includes("policy")) {
      return uploadJsonViaApi(path, value);
    }
    throw error;
  }
  return value;
}

function extFromMime(mime = "") {
  if (mime.includes("png")) return "png";
  if (mime.includes("webp")) return "webp";
  return "jpg";
}

export async function sbGetPortfolio() {
  if (!isSupabaseMode) throw new Error("Supabase not configured");
  const items = await downloadJson("portfolio.json", []);
  return Array.isArray(items)
    ? items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    : [];
}

export async function sbSavePortfolio(items) {
  return uploadJson("portfolio.json", items);
}

export async function sbCreatePortfolio({
  title,
  location,
  notes,
  tags,
  beforeFile,
  afterFile,
}) {
  const tagList =
    typeof tags === "string"
      ? tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : Array.isArray(tags)
        ? tags
        : [];

  const beforeUp = await sbUploadImage(beforeFile, "before");
  const afterUp = await sbUploadImage(afterFile, "after");
  const now = new Date().toISOString();
  const item = {
    _id: `p_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    title,
    location,
    notes,
    tags: tagList,
    beforeUrl: beforeUp.url,
    afterUrl: afterUp.url,
    beforePublicId: beforeUp.path,
    afterPublicId: afterUp.path,
    createdAt: now,
    updatedAt: now,
  };

  const items = await sbGetPortfolio();
  items.unshift(item);
  await sbSavePortfolio(items);
  return item;
}

export async function sbUpdatePortfolio(id, payload) {
  const items = await sbGetPortfolio();
  const index = items.findIndex((i) => i._id === id || i.id === id);
  if (index < 0) throw new Error("Not found");

  const item = { ...items[index] };
  item.title = payload.title ?? item.title;
  item.location = payload.location ?? item.location;
  item.notes = payload.notes ?? item.notes;
  if (payload.tags !== undefined) {
    item.tags =
      typeof payload.tags === "string"
        ? payload.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : payload.tags;
  }

  if (payload.beforeFile) {
    await sbDeleteImage(item.beforePublicId || item.beforeUrl);
    const up = await sbUploadImage(payload.beforeFile, "before");
    item.beforeUrl = up.url;
    item.beforePublicId = up.path;
  }
  if (payload.afterFile) {
    await sbDeleteImage(item.afterPublicId || item.afterUrl);
    const up = await sbUploadImage(payload.afterFile, "after");
    item.afterUrl = up.url;
    item.afterPublicId = up.path;
  }

  item.updatedAt = new Date().toISOString();
  items[index] = item;
  await sbSavePortfolio(items);
  return item;
}

export async function sbDeletePortfolio(id) {
  const items = await sbGetPortfolio();
  const index = items.findIndex((i) => i._id === id || i.id === id);
  if (index < 0) throw new Error("Not found");
  const [removed] = items.splice(index, 1);
  await sbDeleteImage(removed.beforePublicId || removed.beforeUrl);
  await sbDeleteImage(removed.afterPublicId || removed.afterUrl);
  await sbSavePortfolio(items);
  return { message: "Deleted" };
}

export async function sbUploadImage(file, folderHint = "item") {
  const ext = extFromMime(file.type);
  const path = `${folderHint}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(IMAGES_BUCKET).upload(path, file, {
    contentType: file.type || "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(IMAGES_BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, path };
}

export async function sbDeleteImage(pathOrUrl) {
  if (!pathOrUrl) return;
  let storagePath = pathOrUrl;
  const marker = `/${IMAGES_BUCKET}/`;
  if (pathOrUrl.includes(marker)) {
    storagePath = pathOrUrl.split(marker)[1]?.split("?")[0] || pathOrUrl;
  }
  await supabase.storage.from(IMAGES_BUCKET).remove([storagePath]);
}

export async function sbGetSettings() {
  return downloadJson("settings.json", {
    isClosed: false,
    reason: "We are currently fully booked.",
  });
}

export async function sbSaveSettings(settings) {
  return uploadJson("settings.json", settings);
}

export async function sbGetSite() {
  return downloadJson("site-content.json", null);
}

export async function sbSaveSite(content) {
  return uploadJson("site-content.json", content);
}

export async function sbLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: String(password),
  });
  if (error) throw error;
  return {
    token: data.session?.access_token,
    email: data.user?.email,
  };
}

export async function sbLogout() {
  await supabase.auth.signOut();
}
