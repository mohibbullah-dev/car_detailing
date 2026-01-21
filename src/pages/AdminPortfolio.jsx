// import { useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   usePortfolioList,
//   useDeletePortfolio,
//   useUpdatePortfolio,
// } from "../hooks/usePortfolio";
// import { tokenStorage } from "../lib/storage";

// export default function AdminPortfolio() {
//   const nav = useNavigate();
//   const token = tokenStorage.get();

//   const { data, isLoading, error } = usePortfolioList();
//   const del = useDeletePortfolio();
//   const upd = useUpdatePortfolio();

//   // ✅ only one card can be edit at a time
//   const [editId, setEditId] = useState(null);

//   // edit form state
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     tags: "",
//     notes: "",
//     beforeFile: null,
//     afterFile: null,
//   });

//   // previews

//   const [replaceBefore, setReplaceBefore] = useState(null);
//   const [replaceAfter, setReplaceAfter] = useState(null);

//   const [beforePreview, setBeforePreview] = useState("");
//   const [afterPreview, setAfterPreview] = useState("");

//   const currentItem = useMemo(() => {
//     if (!data?.length || !editId) return null;
//     return data.find((x) => x._id === editId) || null;
//   }, [data, editId]);

//   useEffect(() => {
//     if (!replaceBefore) return setBeforePreview("");
//     const url = URL.createObjectURL(replaceBefore);
//     setBeforePreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceBefore]);

//   useEffect(() => {
//     if (!replaceAfter) return setAfterPreview("");
//     const url = URL.createObjectURL(replaceAfter);
//     setAfterPreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceAfter]);

//   // when editId changes -> fill form with that item
//   useEffect(() => {
//     if (!currentItem) return;

//     setForm({
//       title: currentItem.title || "",
//       location: currentItem.location || "",
//       tags: (currentItem.tags || []).join(","),
//       notes: currentItem.notes || "",
//       beforeFile: null,
//       afterFile: null,
//     });

//     // default previews from existing URLs
//     setBeforePreview(currentItem.beforeUrl || "");
//     setAfterPreview(currentItem.afterUrl || "");
//   }, [currentItem]);

//   // preview when choosing file
//   useEffect(() => {
//     if (!form.beforeFile) return;
//     const u = URL.createObjectURL(form.beforeFile);
//     setBeforePreview(u);
//     return () => URL.revokeObjectURL(u);
//   }, [form.beforeFile]);

//   useEffect(() => {
//     if (!form.afterFile) return;
//     const u = URL.createObjectURL(form.afterFile);
//     setAfterPreview(u);
//     return () => URL.revokeObjectURL(u);
//   }, [form.afterFile]);

//   const onDelete = async (id) => {
//     if (!confirm("Delete this item? This cannot be undone.")) return;
//     try {
//       await del.mutateAsync(id);
//       if (editId === id) setEditId(null);
//       alert("Deleted ✅");
//     } catch (e) {
//       alert(e?.message || "Delete failed");
//     }
//   };

//   const onSave = async () => {
//     if (!editId) return;

//     try {
//       await upd.mutateAsync({
//         id: editId,
//         payload: {
//           title: form.title,
//           location: form.location,
//           tags: form.tags,
//           notes: form.notes,
//           beforeFile: form.beforeFile, // optional
//           afterFile: form.afterFile, // optional
//         },
//       });

//       alert("Updated ✅");
//       setEditId(null);
//     } catch (e) {
//       alert(e?.message || "Update failed");
//     }
//   };

//   if (!token) {
//     return (
//       <main className="bg-white">
//         <div className="mx-auto w-full max-w-3xl px-4 py-14">
//           <h1 className="text-2xl font-extrabold text-zinc-900">
//             Admin: Portfolio
//           </h1>
//           <p className="mt-2 text-sm text-zinc-600">
//             You are not logged in. Please login first.
//           </p>

//           <button
//             onClick={() => nav("/admin/login")}
//             className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
//           >
//             Go to Admin Login
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-3">
//           <div>
//             <h1 className="text-2xl font-extrabold text-zinc-900">
//               Admin: Portfolio
//             </h1>
//             <p className="mt-2 text-sm text-zinc-600">
//               Delete or update items.
//             </p>
//           </div>

//           {/* ✅ Add new work button */}
//           <button
//             onClick={() => nav("/admin/upload")}
//             className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
//           >
//             + Upload New
//           </button>
//         </div>

//         {isLoading ? (
//           <div className="mt-6 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
//             Loading...
//           </div>
//         ) : error ? (
//           <div className="mt-6 rounded-xl border border-red-200 p-4 text-sm text-red-600">
//             Failed to load portfolio.
//           </div>
//         ) : !data?.length ? (
//           <div className="mt-6 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
//             No items yet.
//           </div>
//         ) : (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {data.map((item) => {
//               const isEditing = editId === item._id;

//               return (
//                 <div
//                   key={item._id}
//                   className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//                 >
//                   <div className="text-sm font-extrabold text-zinc-900">
//                     {item.title}
//                   </div>
//                   <div className="text-xs text-zinc-500">{item.location}</div>

//                   <div className="mt-3 grid grid-cols-2 gap-3">
//                     <img
//                       src={isEditing ? beforePreview : item.beforeUrl}
//                       alt="Before"
//                       className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                       loading="lazy"
//                     />
//                     <img
//                       src={isEditing ? afterPreview : item.afterUrl}
//                       alt="After"
//                       className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                       loading="lazy"
//                     />
//                   </div>

//                   <p className="mt-3 text-sm text-zinc-600 line-clamp-3">
//                     {item.notes}
//                   </p>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() => setEditId(isEditing ? null : item._id)}
//                       className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
//                     >
//                       {isEditing ? "Close" : "Update"}
//                     </button>

//                     <button
//                       onClick={() => onDelete(item._id)}
//                       disabled={del.isPending}
//                       className="flex-1 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//                     >
//                       {del.isPending ? "Deleting..." : "Delete"}
//                     </button>
//                   </div>

//                   {/* ✅ edit form only for ONE card */}
//                   {isEditing ? (
//                     <div className="mt-4 space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
//                       <input
//                         className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
//                         value={form.title}
//                         onChange={(e) =>
//                           setForm((s) => ({ ...s, title: e.target.value }))
//                         }
//                         placeholder="Title"
//                       />
//                       <input
//                         className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
//                         value={form.location}
//                         onChange={(e) =>
//                           setForm((s) => ({ ...s, location: e.target.value }))
//                         }
//                         placeholder="Location"
//                       />
//                       <input
//                         className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
//                         value={form.tags}
//                         onChange={(e) =>
//                           setForm((s) => ({ ...s, tags: e.target.value }))
//                         }
//                         placeholder="Tags (comma separated)"
//                       />
//                       <textarea
//                         className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm"
//                         rows={3}
//                         value={form.notes}
//                         onChange={(e) =>
//                           setForm((s) => ({ ...s, notes: e.target.value }))
//                         }
//                         placeholder="Notes"
//                       />

//                       <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                         {/* BEFORE */}
//                         <div className="space-y-2">
//                           <div className="text-xs font-bold h-7.5 text-zinc-900">
//                             Replace Before (optional)
//                           </div>

//                           <div className="flex items-center gap-3">
//                             <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
//                               Choose File
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="hidden"
//                                 onChange={(e) =>
//                                   setReplaceBefore(e.target.files?.[0] || null)
//                                 }
//                               />
//                             </label>

//                             <div className="min-w-0 flex-1">
//                               <div className="truncate text-xs text-zinc-600">
//                                 {replaceBefore
//                                   ? replaceBefore.name
//                                   : "No file selected"}
//                               </div>
//                             </div>
//                           </div>

//                           {/* Preview: selected file -> show preview, else show existing image */}
//                           <img
//                             src={beforePreview || item.beforeUrl}
//                             alt="Before preview"
//                             className="h-28 w-full rounded-xl border border-zinc-200 object-cover"
//                           />
//                         </div>

//                         {/* AFTER */}
//                         <div className="space-y-2">
//                           <div className="text-xs h-7.5 font-bold text-zinc-900">
//                             Replace After (optional)
//                           </div>

//                           <div className="flex items-center gap-3">
//                             <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
//                               Choose File
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="hidden"
//                                 onChange={(e) =>
//                                   setReplaceAfter(e.target.files?.[0] || null)
//                                 }
//                               />
//                             </label>

//                             <div className="min-w-0 flex-1">
//                               <div className="truncate text-xs text-zinc-600">
//                                 {replaceAfter
//                                   ? replaceAfter.name
//                                   : "No file selected"}
//                               </div>
//                             </div>
//                           </div>

//                           <img
//                             src={afterPreview || item.afterUrl}
//                             alt="After preview"
//                             className="h-28 w-full rounded-xl border border-zinc-200 object-cover"
//                           />
//                         </div>
//                       </div>

//                       <div className="mt-2 flex gap-2">
//                         <button
//                           onClick={onSave}
//                           disabled={upd.isPending}
//                           className="flex-1 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
//                         >
//                           {upd.isPending ? "Saving..." : "Save"}
//                         </button>
//                         <button
//                           onClick={() => setEditId(null)}
//                           className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Edit3,
  Plus,
  ChevronLeft,
  Save,
  X,
  Image as ImageIcon,
  MapPin,
  Lock,
  Loader2,
} from "lucide-react";
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

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    location: "",
    tags: "",
    notes: "",
    beforeFile: null,
    afterFile: null,
  });

  const [replaceBefore, setReplaceBefore] = useState(null);
  const [replaceAfter, setReplaceAfter] = useState(null);
  const [beforePreview, setBeforePreview] = useState("");
  const [afterPreview, setAfterPreview] = useState("");

  const currentItem = useMemo(() => {
    if (!data?.length || !editId) return null;
    return data.find((x) => x._id === editId) || null;
  }, [data, editId]);

  // Image Preview Logic
  useEffect(() => {
    if (!replaceBefore) return setBeforePreview(currentItem?.beforeUrl || "");
    const url = URL.createObjectURL(replaceBefore);
    setBeforePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [replaceBefore, currentItem]);

  useEffect(() => {
    if (!replaceAfter) return setAfterPreview(currentItem?.afterUrl || "");
    const url = URL.createObjectURL(replaceAfter);
    setAfterPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [replaceAfter, currentItem]);

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
  }, [currentItem]);

  const onDelete = async (id) => {
    if (!confirm("Are you sure? This action is permanent.")) return;
    try {
      await del.mutateAsync(id);
      if (editId === id) setEditId(null);
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
          ...form,
          beforeFile: replaceBefore,
          afterFile: replaceAfter,
        },
      });
      setEditId(null);
      setReplaceBefore(null);
      setReplaceAfter(null);
    } catch (e) {
      alert(e?.message || "Update failed");
    }
  };

  // --- UNAUTHORIZED STATE ---
  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
        <div className="w-full max-w-md rounded-4xl border border-white/5 bg-zinc-900 p-8 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Access Restricted
          </h1>
          <p className="mt-2 text-zinc-400">
            Please sign in to manage your portfolio.
          </p>
          <button
            onClick={() => nav("/admin/login")}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Go to Admin Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 pb-20 pt-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
              Portfolio <span className="text-zinc-600 italic">Management</span>
            </h1>
            <p className="mt-1 text-zinc-500 font-medium">
              Create, update, or remove gallery items.
            </p>
          </div>

          <button
            onClick={() => nav("/admin/upload")}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
          >
            <Plus className="h-4 w-4" /> Upload New
          </button>
        </div>

        {/* Loading/Error States */}
        {isLoading ? (
          <div className="mt-12 flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {data?.map((item) => {
              const isEditing = editId === item._id

              return (
                <div
                  key={item._id}
                  className={`relative rounded-4x border transition-all duration-300 ${
                    isEditing
                      ? "border-blue-500/50 bg-zinc-900 ring-1 ring-blue-500/20"
                      : "border-white/5 bg-zinc-900/50 hover:bg-zinc-900"
                  } p-5 shadow-xl`}
                >
                  {/* Card Content (View Mode) */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white truncate pr-4">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      <MapPin className="h-3 w-3 text-blue-500" />{" "}
                      {item.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
                    <img
                      src={isEditing ? beforePreview : item.beforeUrl}
                      className="h-24 w-full object-cover grayscale opacity-50"
                      alt="Before"
                    />
                    <img
                      src={isEditing ? afterPreview : item.afterUrl}
                      className="h-24 w-full object-cover"
                      alt="After"
                    />
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setEditId(isEditing ? null : item._id)}
                      className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-widest transition ${
                        isEditing
                          ? "bg-zinc-800 text-white"
                          : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {isEditing ? (
                        <X className="h-3 w-3" />
                      ) : (
                        <Edit3 className="h-3 w-3" />
                      )}
                      {isEditing ? "Cancel" : "Edit"}
                    </button>

                    <button
                      onClick={() => onDelete(item._id)}
                      disabled={del.isPending}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition hover:bg-red-500 hover:text-white disabled:opacity-30"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* INLINE EDITING FORM */}
                  <AnimatePresence>
                    {isEditing && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 space-y-4 border-t border-white/10 pt-6 overflow-hidden"
                      >
                        <div className="space-y-3">
                          <input
                            className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                            value={form.title}
                            onChange={(e) =>
                              setForm({ ...form, title: e.target.value })
                            }
                            placeholder="Title"
                          />
                          <input
                            className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                            value={form.location}
                            onChange={(e) =>
                              setForm({ ...form, location: e.target.value })
                            }
                            placeholder="Location"
                          />
                          <textarea
                            className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                            rows={3}
                            value={form.notes}
                            onChange={(e) =>
                              setForm({ ...form, notes: e.target.value })
                            }
                            placeholder="Notes"
                          />
                        </div>

                        {/* File Uploads */}
                        <div className="grid grid-cols-2 gap-3">
                          <label className="group relative cursor-pointer overflow-hidden rounded-xl border border-dashed border-white/20 bg-zinc-800/50 p-4 transition hover:border-blue-500/50">
                            <div className="flex flex-col items-center text-center">
                              <ImageIcon className="h-5 w-5 text-zinc-500 group-hover:text-blue-500" />
                              <span className="mt-1 text-[10px] font-bold uppercase text-zinc-500 group-hover:text-blue-500">
                                Update Before
                              </span>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) =>
                                setReplaceBefore(e.target.files?.[0])
                              }
                            />
                          </label>
                          <label className="group relative cursor-pointer overflow-hidden rounded-xl border border-dashed border-white/20 bg-zinc-800/50 p-4 transition hover:border-blue-500/50">
                            <div className="flex flex-col items-center text-center">
                              <ImageIcon className="h-5 w-5 text-zinc-500 group-hover:text-blue-500" />
                              <span className="mt-1 text-[10px] font-bold uppercase text-zinc-500 group-hover:text-blue-500">
                                Update After
                              </span>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) =>
                                setReplaceAfter(e.target.files?.[0])
                              }
                            />
                          </label>
                        </div>

                        <button
                          onClick={onSave}
                          disabled={upd.isPending}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-blue-500 disabled:opacity-50"
                        >
                          {upd.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4" />
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
    </main>
  );
}
