import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  usePortfolioList,
  useDeletePortfolio,
  useUpdatePortfolio,
} from "../hooks/usePortfolio";
import { tokenStorage } from "../lib/storage";

export default function AdminPortfolio() {
  const nav = useNavigate();
  const token = tokenStorage.get();

  const { data, isLoading, error } = usePortfolioList();
  const del = useDeletePortfolio();
  const upd = useUpdatePortfolio();

  // ✅ only one card can be edit at a time
  const [editId, setEditId] = useState(null);

  // edit form state
  const [form, setForm] = useState({
    title: "",
    location: "",
    tags: "",
    notes: "",
    beforeFile: null,
    afterFile: null,
  });

  // previews
  const [beforePreview, setBeforePreview] = useState("");
  const [afterPreview, setAfterPreview] = useState("");

  const currentItem = useMemo(() => {
    if (!data?.length || !editId) return null;
    return data.find((x) => x._id === editId) || null;
  }, [data, editId]);

  // when editId changes -> fill form with that item
  useEffect(() => {
    if (!currentItem) return;

    setForm({
      title: currentItem.title || "",
      location: currentItem.location || "",
      tags: (currentItem.tags || []).join(","),
      notes: currentItem.notes || "",
      beforeFile: null,
      afterFile: null,
    });

    // default previews from existing URLs
    setBeforePreview(currentItem.beforeUrl || "");
    setAfterPreview(currentItem.afterUrl || "");
  }, [currentItem]);

  // preview when choosing file
  useEffect(() => {
    if (!form.beforeFile) return;
    const u = URL.createObjectURL(form.beforeFile);
    setBeforePreview(u);
    return () => URL.revokeObjectURL(u);
  }, [form.beforeFile]);

  useEffect(() => {
    if (!form.afterFile) return;
    const u = URL.createObjectURL(form.afterFile);
    setAfterPreview(u);
    return () => URL.revokeObjectURL(u);
  }, [form.afterFile]);

  const onDelete = async (id) => {
    if (!confirm("Delete this item? This cannot be undone.")) return;
    try {
      await del.mutateAsync(id);
      if (editId === id) setEditId(null);
      alert("Deleted ✅");
    } catch (e) {
      alert(e?.message || "Delete failed");
    }
  };

  const onSave = async () => {
    if (!editId) return;

    try {
      await upd.mutateAsync({
        id: editId,
        payload: {
          title: form.title,
          location: form.location,
          tags: form.tags,
          notes: form.notes,
          beforeFile: form.beforeFile, // optional
          afterFile: form.afterFile, // optional
        },
      });

      alert("Updated ✅");
      setEditId(null);
    } catch (e) {
      alert(e?.message || "Update failed");
    }
  };

  if (!token) {
    return (
      <main className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-14">
          <h1 className="text-2xl font-extrabold text-zinc-900">
            Admin: Portfolio
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            You are not logged in. Please login first.
          </p>

          <button
            onClick={() => nav("/admin/login")}
            className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Go to Admin Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-zinc-900">
              Admin: Portfolio
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Delete or update items.
            </p>
          </div>

          {/* ✅ Add new work button */}
          <button
            onClick={() => nav("/admin/upload")}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            + Upload New
          </button>
        </div>

        {isLoading ? (
          <div className="mt-6 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
            Loading...
          </div>
        ) : error ? (
          <div className="mt-6 rounded-xl border border-red-200 p-4 text-sm text-red-600">
            Failed to load portfolio.
          </div>
        ) : !data?.length ? (
          <div className="mt-6 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
            No items yet.
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
              const isEditing = editId === item._id;

              return (
                <div
                  key={item._id}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-sm font-extrabold text-zinc-900">
                    {item.title}
                  </div>
                  <div className="text-xs text-zinc-500">{item.location}</div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <img
                      src={isEditing ? beforePreview : item.beforeUrl}
                      alt="Before"
                      className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                      loading="lazy"
                    />
                    <img
                      src={isEditing ? afterPreview : item.afterUrl}
                      alt="After"
                      className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                      loading="lazy"
                    />
                  </div>

                  <p className="mt-3 text-sm text-zinc-600 line-clamp-3">
                    {item.notes}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setEditId(isEditing ? null : item._id)}
                      className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                    >
                      {isEditing ? "Close" : "Update"}
                    </button>

                    <button
                      onClick={() => onDelete(item._id)}
                      disabled={del.isPending}
                      className="flex-1 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
                    >
                      {del.isPending ? "Deleting..." : "Delete"}
                    </button>
                  </div>

                  {/* ✅ edit form only for ONE card */}
                  {isEditing ? (
                    <div className="mt-4 space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                      <input
                        className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
                        value={form.title}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, title: e.target.value }))
                        }
                        placeholder="Title"
                      />
                      <input
                        className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
                        value={form.location}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, location: e.target.value }))
                        }
                        placeholder="Location"
                      />
                      <input
                        className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
                        value={form.tags}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, tags: e.target.value }))
                        }
                        placeholder="Tags (comma separated)"
                      />
                      <textarea
                        className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
                        rows={3}
                        value={form.notes}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, notes: e.target.value }))
                        }
                        placeholder="Notes"
                      />

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="text-xs font-bold text-zinc-700">
                            Replace Before (optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setForm((s) => ({
                                ...s,
                                beforeFile: e.target.files?.[0] || null,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-zinc-700">
                            Replace After (optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setForm((s) => ({
                                ...s,
                                afterFile: e.target.files?.[0] || null,
                              }))
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={onSave}
                          disabled={upd.isPending}
                          className="flex-1 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
                        >
                          {upd.isPending ? "Saving..." : "Save"}
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
