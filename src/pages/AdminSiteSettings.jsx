import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Save,
  Settings2,
} from "lucide-react";
import { tokenStorage } from "../lib/storage";
import { useSite } from "../context/SiteContentContext";

const EMPTY_BUSINESS = {
  name: "",
  city: "",
  tagline: "",
  phoneDisplay: "",
  phoneTel: "",
  whatsappNumber: "",
  email: "",
  addressDisplay: "",
  hoursDisplay: "",
  mapsUrl: "",
  mapEmbedUrl: "",
  footerBlurb: "",
  socials: { facebook: "", instagram: "", youtube: "" },
};

export default function AdminSiteSettings() {
  const navigate = useNavigate();
  const token = tokenStorage.get();
  const { business, heroStats, updateSite, fromApi, refresh } = useSite();

  const [form, setForm] = useState(EMPTY_BUSINESS);
  const [stats, setStats] = useState([
    { icon: "trophy", text: "" },
    { icon: "star", text: "" },
    { icon: "shieldCheck", text: "" },
  ]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    setForm({
      ...EMPTY_BUSINESS,
      ...business,
      socials: {
        ...EMPTY_BUSINESS.socials,
        ...(business.socials || {}),
      },
    });
    if (Array.isArray(heroStats) && heroStats.length) {
      setStats(heroStats.map((s) => ({ icon: s.icon || "star", text: s.text || "" })));
    }
  }, [business, heroStats, token]);

  if (!token) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#070707] text-white">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Access restricted
        </p>
        <button
          onClick={() => navigate("/admin/login")}
          className="rounded-xl bg-[#E10600] px-6 py-3 text-[10px] font-black uppercase tracking-widest"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const setSocial = (key, value) => {
    setForm((prev) => ({
      ...prev,
      socials: { ...prev.socials, [key]: value },
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      await updateSite({
        business: form,
        heroStats: stats.filter((s) => s.text.trim()),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err?.message || "Failed to save. Is the backend deployed?");
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#E10600]/50";

  return (
    <main className="min-h-screen bg-[#070707] pb-20 pt-32 text-white">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[#E10600]">
              <Settings2 size={14} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                Site CMS
              </span>
            </div>
            <h1 className="font-hero-display text-4xl uppercase tracking-tight">
              Business Settings
            </h1>
            <p className="mt-2 text-[13px] text-zinc-500">
              {fromApi
                ? "Connected to backend — changes go live on the public site."
                : "Using local defaults — deploy/fix backend, then refresh."}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate("/admin/portfolio")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              <ArrowLeft size={14} /> Portfolio
            </button>
            <button
              type="button"
              onClick={() => refresh()}
              className="rounded-xl border border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              Refresh
            </button>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          <section className="hero-glass-card space-y-4 p-6 sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Brand & Contact
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["name", "Business Name"],
                ["tagline", "Tagline"],
                ["city", "City"],
                ["email", "Email"],
                ["phoneDisplay", "Phone Display"],
                ["phoneTel", "Phone Tel (e.g. +44...)"],
                ["whatsappNumber", "WhatsApp (digits only, no +)"],
                ["hoursDisplay", "Open Hours"],
              ].map(([key, label]) => (
                <label key={key} className="block space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {label}
                  </span>
                  <input
                    className={inputClass}
                    value={form[key] || ""}
                    onChange={(e) => setField(key, e.target.value)}
                  />
                </label>
              ))}
            </div>
            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Address
              </span>
              <input
                className={inputClass}
                value={form.addressDisplay || ""}
                onChange={(e) => setField("addressDisplay", e.target.value)}
              />
            </label>
            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Footer Blurb
              </span>
              <textarea
                rows={3}
                className={inputClass}
                value={form.footerBlurb || ""}
                onChange={(e) => setField("footerBlurb", e.target.value)}
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Google Maps URL
                </span>
                <input
                  className={inputClass}
                  value={form.mapsUrl || ""}
                  onChange={(e) => setField("mapsUrl", e.target.value)}
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Map Embed URL
                </span>
                <input
                  className={inputClass}
                  value={form.mapEmbedUrl || ""}
                  onChange={(e) => setField("mapEmbedUrl", e.target.value)}
                />
              </label>
            </div>
          </section>

          <section className="hero-glass-card space-y-4 p-6 sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Social Links
            </h2>
            <p className="text-[12px] text-zinc-500">
              Leave blank to hide that icon in the footer.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["facebook", "instagram", "youtube"].map((key) => (
                <label key={key} className="block space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {key}
                  </span>
                  <input
                    className={inputClass}
                    placeholder="https://"
                    value={form.socials?.[key] || ""}
                    onChange={(e) => setSocial(key, e.target.value)}
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="hero-glass-card space-y-4 p-6 sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Hero Stats
            </h2>
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <input
                  key={stat.icon + index}
                  className={inputClass}
                  value={stat.text}
                  placeholder="Stat text"
                  onChange={(e) => {
                    const next = [...stats];
                    next[index] = { ...next[index], text: e.target.value };
                    setStats(next);
                  }}
                />
              ))}
            </div>
          </section>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#E10600] text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(225,6,0,0.35)] transition hover:bg-[#c00500] disabled:opacity-60 sm:w-auto sm:px-10"
          >
            {saving ? (
              <Loader2 size={16} className="animate-spin" />
            ) : saved ? (
              <CheckCircle2 size={16} />
            ) : (
              <Save size={16} />
            )}
            {saving ? "Saving..." : saved ? "Saved" : "Save Changes"}
          </button>
        </form>
      </div>
    </main>
  );
}
