import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#E10600]/50";

export default function AdminPackages() {
  const { pricing, updateSite } = useSite();
  const [plans, setPlans] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setPlans(
      (pricing?.plans || []).map((p) => ({
        ...p,
        featuresText: (p.features || []).join("\n"),
      })),
    );
  }, [pricing?.plans]);

  const updatePlan = (index, key, value) => {
    setPlans((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const addPlan = () => {
    setPlans((prev) => [
      ...prev,
      {
        id: `plan-${Date.now()}`,
        title: "New Package",
        subtitle: "",
        price: "0",
        cents: "00",
        icon: "car",
        featured: false,
        features: [],
        featuresText: "",
      },
    ]);
  };

  const removePlan = (index) => {
    if (!confirm("Remove this package?")) return;
    setPlans((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const normalized = plans.map(({ featuresText, ...plan }) => ({
        ...plan,
        featured: !!plan.featured,
        features: featuresText
          .split("\n")
          .map((f) => f.trim())
          .filter(Boolean),
      }));
      await updateSite({
        pricing: { ...pricing, plans: normalized },
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err?.message || "Failed to save packages.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Edit pricing plans shown on the public site.
        </p>
        <button
          type="button"
          onClick={addPlan}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white sm:w-auto"
        >
          <Plus size={14} /> Add Plan
        </button>
      </div>

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div
            key={plan.id || index}
            className="hero-glass-card space-y-4 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-semibold text-white">
                {plan.title || `Plan ${index + 1}`}
              </h3>
              <button
                type="button"
                onClick={() => removePlan(index)}
                className="text-zinc-500 transition hover:text-red-400"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Title
                </span>
                <input
                  className={inputClass}
                  value={plan.title || ""}
                  onChange={(e) => updatePlan(index, "title", e.target.value)}
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Subtitle
                </span>
                <input
                  className={inputClass}
                  value={plan.subtitle || ""}
                  onChange={(e) => updatePlan(index, "subtitle", e.target.value)}
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Price
                </span>
                <input
                  className={inputClass}
                  value={plan.price || ""}
                  onChange={(e) => updatePlan(index, "price", e.target.value)}
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Cents
                </span>
                <input
                  className={inputClass}
                  value={plan.cents || ""}
                  onChange={(e) => updatePlan(index, "cents", e.target.value)}
                />
              </label>
            </div>

            <label className="flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={!!plan.featured}
                onChange={(e) =>
                  updatePlan(index, "featured", e.target.checked)
                }
                className="rounded border-white/20 bg-white/5 text-[#E10600] focus:ring-[#E10600]"
              />
              Featured plan
            </label>

            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Features (one per line)
              </span>
              <textarea
                rows={5}
                className={inputClass}
                value={plan.featuresText || ""}
                onChange={(e) =>
                  updatePlan(index, "featuresText", e.target.value)
                }
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
        {saving ? "Saving..." : saved ? "Saved" : "Save Packages"}
      </button>
    </form>
  );
}
