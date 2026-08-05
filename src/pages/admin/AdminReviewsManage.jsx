import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const PLATFORMS = ["google", "facebook", "yelp"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#E10600]/50";

const emptyReview = () => ({
  id: `review-${Date.now()}`,
  name: "",
  location: "",
  text: "",
  platform: "google",
});

export default function AdminReviewsManage() {
  const { reviews, updateSite } = useSite();
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setItems((reviews?.items || []).map((r) => ({ ...r })));
  }, [reviews?.items]);

  const updateItem = (index, key, value) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const addItem = () => setItems((prev) => [...prev, emptyReview()]);

  const removeItem = (index) => {
    if (!confirm("Remove this review?")) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      await updateSite({
        reviews: { ...reviews, items },
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err?.message || "Failed to save reviews.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Manage customer reviews on the public site.
        </p>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white"
        >
          <Plus size={14} /> Add Review
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id || index} className="hero-glass-card space-y-4 p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-white">
                {item.name || `Review ${index + 1}`}
              </h3>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-zinc-500 transition hover:text-red-400"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Name
                </span>
                <input
                  className={inputClass}
                  value={item.name || ""}
                  onChange={(e) => updateItem(index, "name", e.target.value)}
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Location
                </span>
                <input
                  className={inputClass}
                  value={item.location || ""}
                  onChange={(e) => updateItem(index, "location", e.target.value)}
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Platform
              </span>
              <select
                className={inputClass}
                value={item.platform || "google"}
                onChange={(e) => updateItem(index, "platform", e.target.value)}
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p} className="bg-zinc-900">
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Review Text
              </span>
              <textarea
                rows={4}
                className={inputClass}
                value={item.text || ""}
                onChange={(e) => updateItem(index, "text", e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="inline-flex items-center gap-2 rounded-2xl bg-[#E10600] px-8 py-3 text-[11px] font-black uppercase tracking-widest text-white transition hover:bg-[#c00500] disabled:opacity-60"
      >
        {saving ? (
          <Loader2 size={16} className="animate-spin" />
        ) : saved ? (
          <CheckCircle2 size={16} />
        ) : (
          <Save size={16} />
        )}
        {saving ? "Saving..." : saved ? "Saved" : "Save Reviews"}
      </button>
    </form>
  );
}
