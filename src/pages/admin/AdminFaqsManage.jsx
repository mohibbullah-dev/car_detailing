import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#E10600]/50";

const emptyFaq = () => ({
  id: `faq-${Date.now()}`,
  question: "",
  answer: "",
});

export default function AdminFaqsManage() {
  const { faq, updateSite } = useSite();
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setItems((faq?.items || []).map((f) => ({ ...f })));
  }, [faq?.items]);

  const updateItem = (index, key, value) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const addItem = () => setItems((prev) => [...prev, emptyFaq()]);

  const removeItem = (index) => {
    if (!confirm("Remove this FAQ?")) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      await updateSite({
        faq: { ...faq, items },
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err?.message || "Failed to save FAQs.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Manage frequently asked questions on the public site.
        </p>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white"
        >
          <Plus size={14} /> Add FAQ
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id || index} className="hero-glass-card space-y-4 p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-white">
                {item.question || `FAQ ${index + 1}`}
              </h3>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-zinc-500 transition hover:text-red-400"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Question
              </span>
              <input
                className={inputClass}
                value={item.question || ""}
                onChange={(e) => updateItem(index, "question", e.target.value)}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Answer
              </span>
              <textarea
                rows={4}
                className={inputClass}
                value={item.answer || ""}
                onChange={(e) => updateItem(index, "answer", e.target.value)}
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
        {saving ? "Saving..." : saved ? "Saved" : "Save FAQs"}
      </button>
    </form>
  );
}
