import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Save,
  Lock,
  MapPin,
  Loader2,
  Search,
  PlusCircle,
  LayoutGrid,
} from "lucide-react";
import {
  usePortfolioList,
  useDeletePortfolio,
  useUpdatePortfolio,
} from "../../hooks/usePortfolio";

export default function AdminPortfolioPage() {
  const nav = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = usePortfolioList();
  const del = useDeletePortfolio();
  const upd = useUpdatePortfolio();

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", location: "", notes: "" });
  const [replaceBefore, setReplaceBefore] = useState(null);
  const [replaceAfter, setReplaceAfter] = useState(null);
  const [previewBeforeUrl, setPreviewBeforeUrl] = useState("");
  const [previewAfterUrl, setPreviewAfterUrl] = useState("");

  const filteredData = useMemo(() => {
    const list = data || [];
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (item) =>
        item.title?.toLowerCase().includes(q) ||
        item.location?.toLowerCase().includes(q),
    );
  }, [data, searchQuery]);

  const currentItem = useMemo(
    () => data?.find((x) => x._id === editId) || null,
    [data, editId],
  );

  useEffect(() => {
    if (!currentItem) {
      setPreviewBeforeUrl("");
      setPreviewAfterUrl("");
      return;
    }
    setForm({
      title: currentItem.title || "",
      location: currentItem.location || "",
      notes: currentItem.notes || "",
    });
    setReplaceBefore(null);
    setReplaceAfter(null);
  }, [currentItem]);

  useEffect(() => {
    if (!replaceBefore) return setPreviewBeforeUrl("");
    const url = URL.createObjectURL(replaceBefore);
    setPreviewBeforeUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [replaceBefore]);

  useEffect(() => {
    if (!replaceAfter) return setPreviewAfterUrl("");
    const url = URL.createObjectURL(replaceAfter);
    setPreviewAfterUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [replaceAfter]);

  const onSave = async () => {
    if (!editId) return;
    try {
      await upd.mutateAsync({
        id: editId,
        payload: {
          ...form,
          beforeFile: replaceBefore,
          afterFile: replaceAfter,
        },
      });
      setEditId(null);
      alert("Project updated successfully!");
    } catch (e) {
      alert("Update failed: " + e.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-white/5 bg-white/[0.03] py-2.5 pl-9 pr-4 text-sm text-white outline-none transition focus:border-[#E10600]/50"
          />
        </div>
        <button
          type="button"
          onClick={() => nav("/admin/upload")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#E10600] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#c00500]"
        >
          <PlusCircle size={16} />
          Upload Project
        </button>
      </div>

      {isLoading ? (
        <p className="text-sm text-zinc-500">Loading portfolio...</p>
      ) : filteredData.length === 0 ? (
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-12 text-center">
          <p className="text-sm text-zinc-500">No projects found.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredData.map((item) => {
            const isEditing = editId === item._id;
            const activeBeforeUrl =
              isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
            const activeAfterUrl =
              isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

            return (
              <div
                key={item._id}
                className={`rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition ${isEditing ? "border-[#E10600]/50 bg-[#E10600]/[0.02]" : ""}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={10} className="text-[#E10600]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                      {item.location || "—"}
                    </span>
                  </div>
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Permanently delete?"))
                          del.mutate(item._id);
                      }}
                      className="text-zinc-600 transition hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div className="group relative mb-4 h-40 overflow-hidden rounded-2xl">
                  <div className="grid h-full grid-cols-2">
                    <img
                      src={activeBeforeUrl}
                      alt=""
                      className="h-full w-full object-cover grayscale opacity-50"
                    />
                    <img
                      src={activeAfterUrl}
                      alt=""
                      className="h-full w-full border-l border-[#E10600] object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 to-transparent" />
                  <p className="absolute bottom-4 left-4 line-clamp-1 pr-10 text-[10px] font-black uppercase italic tracking-tighter text-white">
                    {item.title}
                  </p>
                  <button
                    type="button"
                    onClick={() => setEditId(isEditing ? null : item._id)}
                    className="absolute bottom-3 right-3 rounded-lg bg-white/10 p-2 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100"
                  >
                    {isEditing ? <Lock size={12} /> : <LayoutGrid size={12} />}
                  </button>
                </div>

                <AnimatePresence>
                  {isEditing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-3"
                    >
                      <input
                        className="w-full rounded-xl border border-white/5 bg-white/5 p-3 text-[10px] font-bold uppercase outline-none transition focus:border-[#E10600]"
                        value={form.title}
                        onChange={(e) =>
                          setForm({ ...form, title: e.target.value })
                        }
                        placeholder="Title"
                      />
                      <input
                        className="w-full rounded-xl border border-white/5 bg-white/5 p-3 text-[10px] font-bold uppercase outline-none transition focus:border-[#E10600]"
                        value={form.location}
                        onChange={(e) =>
                          setForm({ ...form, location: e.target.value })
                        }
                        placeholder="Location"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <label className="block cursor-pointer rounded-xl border border-white/5 bg-white/5 p-3 text-center text-[8px] font-black uppercase hover:bg-white/10">
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) =>
                              setReplaceBefore(e.target.files?.[0])
                            }
                          />
                          {replaceBefore ? "Ready" : "New Before"}
                        </label>
                        <label className="block cursor-pointer rounded-xl border border-white/5 bg-white/5 p-3 text-center text-[8px] font-black uppercase hover:bg-white/10">
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) =>
                              setReplaceAfter(e.target.files?.[0])
                            }
                          />
                          {replaceAfter ? "Ready" : "New After"}
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={onSave}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E10600] py-3 text-[9px] font-black uppercase"
                      >
                        {upd.isPending ? (
                          <Loader2 size={12} className="animate-spin" />
                        ) : (
                          <Save size={12} />
                        )}
                        Save Changes
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
