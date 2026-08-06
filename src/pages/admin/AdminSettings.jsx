import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertOctagon,
  CheckCircle2,
  Loader2,
  Save,
  StickyNote,
} from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import { useBusinessStatus } from "../../context/BusinessStatusContext";

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

export default function AdminSettings() {
  const { business, heroStats, updateSite, fromApi, refresh } = useSite();
  const { isClosed, reason, toggleStatus, toggling, toggleError } =
    useBusinessStatus();

  const [form, setForm] = useState(EMPTY_BUSINESS);
  const [stats, setStats] = useState([
    { icon: "trophy", text: "" },
    { icon: "star", text: "" },
    { icon: "shieldCheck", text: "" },
  ]);
  const [newReason, setNewReason] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
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
  }, [business, heroStats]);

  useEffect(() => {
    if (reason) setNewReason(reason);
  }, [reason]);

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
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">
          {fromApi
            ? "Connected to backend — changes go live on the public site."
            : "Using local defaults — deploy/fix backend, then refresh."}
        </p>
        <button
          type="button"
          onClick={() => refresh()}
          className="rounded-xl border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
        >
          Refresh
        </button>
      </div>

      <section className="hero-glass-card space-y-4 p-6 sm:p-8">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Business Availability
        </h2>
        <p className="text-xs text-zinc-500">
          Toggle booking on the public site. If it fails, log out and log in
          again. On Vercel, set SUPABASE_SERVICE_ROLE_KEY in project env.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`rounded-2xl p-3 ${isClosed ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}
            >
              <AlertOctagon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {isClosed ? "Currently Closed" : "Open for Business"}
              </p>
              <p className="text-xs text-zinc-500">
                Toggle booking availability on the public site.
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled={toggling}
            onClick={() => toggleStatus(newReason)}
            className={`relative h-8 w-14 rounded-full p-1 transition disabled:opacity-50 ${isClosed ? "bg-red-500" : "bg-emerald-500"}`}
            aria-label={isClosed ? "Open business" : "Close business"}
          >
            <motion.div
              animate={{ x: isClosed ? 24 : 0 }}
              className="h-6 w-6 rounded-full bg-white shadow"
            />
          </button>
        </div>
        <div className="relative">
          <StickyNote
            size={14}
            className="absolute left-4 top-4 text-zinc-500"
          />
          <textarea
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#E10600]/50"
            value={newReason}
            onChange={(e) => setNewReason(e.target.value)}
            placeholder="Notice shown to clients when closed..."
            rows={3}
          />
        </div>
        <button
          type="button"
          disabled={toggling}
          onClick={() => toggleStatus(newReason)}
          className="rounded-xl border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-300 transition hover:text-white disabled:opacity-50"
        >
          {toggling ? "Updating..." : "Update Live Status"}
        </button>
        {toggleError ? (
          <p className="text-xs text-red-400">{toggleError}</p>
        ) : null}
      </section>

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
          className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#E10600] px-10 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(225,6,0,0.35)] transition hover:bg-[#c00500] disabled:opacity-60"
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
  );
}
