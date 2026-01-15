// import { usePortfolioList, useDeletePortfolio } from "../hooks/usePortfolio";
// import { tokenStorage } from "../lib/storage";
// import { useNavigate } from "react-router-dom";

// export default function AdminPortfolio() {
//   const nav = useNavigate();
//   const token = tokenStorage.get();

//   const { data, isLoading, error } = usePortfolioList();
//   const { mutateAsync, isPending } = useDeletePortfolio();

//   const onDelete = async (id) => {
//     if (!confirm("Delete this item? This cannot be undone.")) return;

//     try {
//       await mutateAsync(id);
//       alert("Deleted ✅");
//     } catch (e) {
//       alert(e?.message || "Delete failed");
//     }
//   };

//   if (!token) {
//     return (
//       <main className="bg-white">
//         <div className="mx-auto w-full max-w-3xl px-4 py-14">
//           <h1 className="text-2xl font-extrabold text-zinc-900">
//             Admin Portfolio
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
//           <h1 className="text-2xl font-extrabold text-zinc-900">
//             Admin Portfolio
//           </h1>

//           <button
//             onClick={() => nav("/admin/upload")}
//             className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
//           >
//             + Upload New
//           </button>
//         </div>

//         <p className="mt-2 text-sm text-zinc-600">
//           View all items and delete any one.
//         </p>

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
//             {data.map((item) => (
//               <div
//                 key={item._id}
//                 className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="flex items-start justify-between gap-3">
//                   <div>
//                     <div className="text-sm font-extrabold text-zinc-900">
//                       {item.title}
//                     </div>
//                     <div className="text-xs text-zinc-500">{item.location}</div>
//                   </div>

//                   <button
//                     onClick={() => onDelete(item._id)}
//                     disabled={isPending}
//                     className="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 disabled:opacity-60"
//                   >
//                     {isPending ? "..." : "Delete"}
//                   </button>
//                 </div>

//                 <div className="mt-3 grid grid-cols-2 gap-3">
//                   <img
//                     src={item.beforeUrl}
//                     alt="Before"
//                     className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                     loading="lazy"
//                   />
//                   <img
//                     src={item.afterUrl}
//                     alt="After"
//                     className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                     loading="lazy"
//                   />
//                 </div>

//                 <p className="mt-3 text-sm text-zinc-600 line-clamp-3">
//                   {item.notes}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

import { useEffect, useState } from "react";
import {
  usePortfolioList,
  useDeletePortfolio,
  useUpdatePortfolio,
} from "../hooks/usePortfolio";

export default function AdminPortfolio() {
  const { data, isLoading, error } = usePortfolioList();
  const del = useDeletePortfolio();
  const upd = useUpdatePortfolio();

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    location: "",
    notes: "",
    tags: "",
  });
  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);

  const startEdit = (item) => {
    setEditId(item._id);
    setForm({
      title: item.title || "",
      location: item.location || "",
      notes: item.notes || "",
      tags: (item.tags || []).join(","),
    });
    setBeforeFile(null);
    setAfterFile(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setBeforeFile(null);
    setAfterFile(null);
  };

  const save = async () => {
    await upd.mutateAsync({
      id: editId,
      ...form,
      beforeFile,
      afterFile,
    });
    cancelEdit();
    alert("Updated ✅");
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Failed to load</div>;

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-extrabold text-zinc-900">
          Admin: Portfolio
        </h1>
        <p className="mt-2 text-sm text-zinc-600">Delete or update items.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(data || []).map((item) => (
            <div
              key={item._id}
              className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-extrabold">{item.title}</div>
              <div className="text-xs text-zinc-500">{item.location}</div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <img
                  className="h-28 w-full rounded-xl border object-cover"
                  src={item.beforeUrl}
                  alt="Before"
                />
                <img
                  className="h-28 w-full rounded-xl border object-cover"
                  src={item.afterUrl}
                  alt="After"
                />
              </div>

              <p className="mt-3 text-sm text-zinc-600">{item.notes}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => startEdit(item)}
                  className="flex-1 rounded-xl border border-zinc-200 px-3 py-2 text-sm font-semibold hover:bg-zinc-50"
                >
                  Update
                </button>

                <button
                  onClick={() => del.mutate(item._id)}
                  className="flex-1 rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
                  disabled={del.isPending}
                >
                  {del.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>

              {editId === item._id ? (
                <div className="mt-4 space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                  <input
                    className="w-full rounded-xl border px-3 py-2 text-sm"
                    value={form.title}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, title: e.target.value }))
                    }
                    placeholder="Title"
                  />
                  <input
                    className="w-full rounded-xl border px-3 py-2 text-sm"
                    value={form.location}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, location: e.target.value }))
                    }
                    placeholder="Location"
                  />
                  <input
                    className="w-full rounded-xl border px-3 py-2 text-sm"
                    value={form.tags}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, tags: e.target.value }))
                    }
                    placeholder="tags: a,b,c"
                  />
                  <textarea
                    className="w-full rounded-xl border px-3 py-2 text-sm"
                    rows={3}
                    value={form.notes}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, notes: e.target.value }))
                    }
                    placeholder="Notes"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setBeforeFile(e.target.files?.[0] || null)
                      }
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setAfterFile(e.target.files?.[0] || null)
                      }
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={save}
                      className="flex-1 rounded-xl bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                      disabled={upd.isPending}
                    >
                      {upd.isPending ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 rounded-xl border border-zinc-200 px-3 py-2 text-sm font-semibold hover:bg-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
