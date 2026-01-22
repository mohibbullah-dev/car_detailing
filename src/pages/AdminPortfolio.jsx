// import { useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useBusinessStatus } from "../context/BusinessStatusContext"; // Added Brain
// import {
//   Trash2,
//   Edit3,
//   Plus,
//   Save,
//   X,
//   Image as ImageIcon,
//   MapPin,
//   Lock,
//   Loader2,
//   AlertOctagon,
// } from "lucide-react";
// import {
//   usePortfolioList,
//   useDeletePortfolio,
//   useUpdatePortfolio,
// } from "../hooks/usePortfolio";
// import { tokenStorage } from "../lib/storage";

// export default function AdminPortfolio() {
//   const nav = useNavigate();
//   const token = tokenStorage.get();
//   const { isClosed, reason, toggleStatus } = useBusinessStatus();
//   const [newReason, setNewReason] = useState(reason);

//   const { data, isLoading } = usePortfolioList();
//   const del = useDeletePortfolio();
//   const upd = useUpdatePortfolio();

//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ title: "", location: "", notes: "" });
//   const [replaceBefore, setReplaceBefore] = useState(null);
//   const [replaceAfter, setReplaceAfter] = useState(null);
//   const [beforePreview, setBeforePreview] = useState("");
//   const [afterPreview, setAfterPreview] = useState("");

//   const currentItem = useMemo(() => {
//     if (!data?.length || !editId) return null;
//     return data.find((x) => x._id === editId) || null;
//   }, [data, editId]);

//   useEffect(() => {
//     if (!replaceBefore) return setBeforePreview(currentItem?.beforeUrl || "");
//     const url = URL.createObjectURL(replaceBefore);
//     setBeforePreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceBefore, currentItem]);

//   useEffect(() => {
//     if (!replaceAfter) return setAfterPreview(currentItem?.afterUrl || "");
//     const url = URL.createObjectURL(replaceAfter);
//     setAfterPreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceAfter, currentItem]);

//   useEffect(() => {
//     if (!currentItem) return;
//     setForm({
//       title: currentItem.title || "",
//       location: currentItem.location || "",
//       notes: currentItem.notes || "",
//     });
//   }, [currentItem]);

//   const onDelete = async (id) => {
//     if (!confirm("Are you sure?")) return;
//     await del.mutateAsync(id);
//   };

//   // Ensure you are spreading the existing form data correctly
//   const onSave = async () => {
//     if (!editId) return;
//     try {
//       await upd.mutateAsync({
//         id: editId,
//         payload: {
//           title: form.title, // Explicitly map these
//           location: form.location,
//           notes: form.notes,
//           beforeFile: replaceBefore,
//           afterFile: replaceAfter,
//         },
//       });
//       setEditId(null);
//       setReplaceBefore(null);
//       setReplaceAfter(null);
//     } catch (e) {
//       alert("Update failed: " + e.message);
//     }
//   };

//   if (!token) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
//         <div className="w-full max-w-md rounded-4xl border border-white/5 bg-zinc-900 p-8 text-center shadow-2xl">
//           <Lock className="mx-auto mb-6 h-16 w-16 text-red-500" />
//           <h1 className="text-2xl font-black text-white uppercase">
//             Access Restricted
//           </h1>
//           <button
//             onClick={() => nav("/admin/login")}
//             className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white"
//           >
//             Go to Admin Login
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-zinc-950 pb-20 pt-24">
//       <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* EMERGENCY STATUS SECTION */}
//         <div className="mb-12 rounded-4xl border border-white/5 bg-zinc-900/80 p-6 backdrop-blur-md ring-1 ring-white/5">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div
//                 className={`p-3 rounded-2xl ${isClosed ? "bg-red-500/10 text-red-500" : "bg-emerald-500/10 text-emerald-500"}`}
//               >
//                 <AlertOctagon size={24} />
//               </div>
//               <div>
//                 <h2 className="text-xl font-black uppercase text-white tracking-tighter">
//                   Emergency{" "}
//                   <span
//                     className={isClosed ? "text-red-500" : "text-emerald-500"}
//                   >
//                     Status
//                   </span>
//                 </h2>
//                 <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-1">
//                   Global Booking Control
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => toggleStatus(newReason)}
//               className={`group relative w-20 h-10 rounded-full transition-all duration-500 ${isClosed ? "bg-red-500" : "bg-zinc-700"}`}
//             >
//               <motion.div
//                 animate={{ x: isClosed ? 44 : 4 }}
//                 className="absolute top-1 left-0 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center"
//               >
//                 <div
//                   className={`w-1 h-3 rounded-full ${isClosed ? "bg-red-500" : "bg-zinc-300"}`}
//                 />
//               </motion.div>
//             </button>
//           </div>

//           <AnimatePresence>
//             {isClosed && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 className="mt-6 pt-6 border-t border-white/5 overflow-hidden"
//               >
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <input
//                     className="flex-1 bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none"
//                     value={newReason}
//                     onChange={(e) => setNewReason(e.target.value)}
//                     placeholder="Why are you closed? (e.g. Fully booked until Monday)"
//                   />
//                   <button
//                     onClick={() => toggleStatus(newReason)}
//                     className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-zinc-200"
//                   >
//                     Update Message
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* EXISTING HEADER AND GRID CODE */}
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
//               Portfolio <span className="text-zinc-600 italic">Management</span>
//             </h1>
//           </div>
//           <button
//             onClick={() => nav("/admin/upload")}
//             className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-widest text-black hover:bg-zinc-200"
//           >
//             <Plus size={16} /> Upload New
//           </button>
//         </div>

//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {data?.map((item) => {
//             const isEditing = editId === item._id;
//             return (
//               <div
//                 key={item._id}
//                 className={`rounded-4xl border p-5 transition-all ${isEditing ? "border-blue-500 bg-zinc-900 shadow-2xl shadow-blue-500/10" : "border-white/5 bg-zinc-900/50"}`}
//               >
//                 {/* ... Rest of your existing portfolio item code ... */}
//                 <h3 className="text-white font-bold mb-4">{item.title}</h3>
//                 <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4">
//                   <img
//                     src={isEditing ? beforePreview : item.beforeUrl}
//                     className="h-20 w-full object-cover grayscale opacity-40"
//                     alt="Before"
//                   />
//                   <img
//                     src={isEditing ? afterPreview : item.afterUrl}
//                     className="h-20 w-full object-cover"
//                     alt="After"
//                   />
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setEditId(isEditing ? null : item._id)}
//                     className="flex-1 bg-white/5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
//                   >
//                     {isEditing ? "Cancel" : "Edit"}
//                   </button>
//                   <button
//                     onClick={() => onDelete(item._id)}
//                     className="bg-red-500/10 p-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//                 {isEditing && (
//                   <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
//                     <input
//                       className="w-full bg-zinc-800 p-3 rounded-xl text-xs border border-white/5"
//                       value={form.title}
//                       onChange={(e) =>
//                         setForm({ ...form, title: e.target.value })
//                       }
//                       placeholder="New Title"
//                     />
//                     <button
//                       onClick={onSave}
//                       className="w-full bg-blue-600 py-3 rounded-xl text-[10px] font-black uppercase text-white"
//                     >
//                       <Save size={14} className="inline mr-2" />
//                       Save Changes
//                     </button>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }

// import { useMemo, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useBusinessStatus } from "../context/BusinessStatusContext";
// import { Trash2, Save, Lock, AlertOctagon, ImageIcon } from "lucide-react";
// import {
//   usePortfolioList,
//   useDeletePortfolio,
//   useUpdatePortfolio,
// } from "../hooks/usePortfolio";
// import { tokenStorage } from "../lib/storage";

// export default function AdminPortfolio() {
//   const token = tokenStorage.get();
//   const { isClosed, reason, toggleStatus } = useBusinessStatus();
//   const [newReason, setNewReason] = useState("");

//   const { data } = usePortfolioList();
//   const del = useDeletePortfolio();
//   const upd = useUpdatePortfolio();

//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ title: "", location: "", notes: "" });
//   const [replaceBefore, setReplaceBefore] = useState(null);
//   const [replaceAfter, setReplaceAfter] = useState(null);

//   const currentItem = useMemo(
//     () => data?.find((x) => x._id === editId) || null,
//     [data, editId],
//   );

//   useEffect(() => {
//     if (reason) setNewReason(reason);
//   }, [reason]);

//   useEffect(() => {
//     if (!currentItem) return;
//     setForm({
//       title: currentItem.title || "",
//       location: currentItem.location || "",
//       notes: currentItem.notes || "",
//     });
//   }, [currentItem]);

//   const onSave = async () => {
//     if (!editId) return;
//     try {
//       await upd.mutateAsync({
//         id: editId,
//         payload: {
//           ...form,
//           beforeFile: replaceBefore,
//           afterFile: replaceAfter,
//         },
//       });
//       setEditId(null);
//       setReplaceBefore(null);
//       setReplaceAfter(null);
//       alert("Updated successfully!");
//     } catch (e) {
//       alert("Update failed: " + e.message);
//     }
//   };

//   if (!token)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
//         <Lock className="mr-2" /> Access Restricted
//       </div>
//     );

//   return (
//     <main className="min-h-screen bg-zinc-950 pb-20 pt-24 text-white">
//       <div className="mx-auto w-full max-w-6xl px-4">
//         {/* Toggle Section */}
//         <div className="mb-12 rounded-4xl border border-white/5 bg-zinc-900 p-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <AlertOctagon
//                 className={isClosed ? "text-red-500" : "text-emerald-500"}
//               />
//               <h2 className="text-xl font-black uppercase">Emergency Status</h2>
//             </div>
//             <button
//               onClick={() => toggleStatus(newReason)}
//               className={`w-20 h-10 rounded-full transition-all ${isClosed ? "bg-red-500" : "bg-zinc-700"}`}
//             >
//               <motion.div
//                 animate={{ x: isClosed ? 44 : 4 }}
//                 className="w-8 h-8 bg-white rounded-full ml-1"
//               />
//             </button>
//           </div>
//           {isClosed && (
//             <div className="mt-6 flex gap-3">
//               <input
//                 className="flex-1 bg-zinc-800 p-4 rounded-xl outline-none border border-white/5"
//                 value={newReason}
//                 onChange={(e) => setNewReason(e.target.value)}
//               />
//               <button
//                 onClick={() => toggleStatus(newReason)}
//                 className="bg-white text-black px-6 rounded-xl font-bold uppercase text-xs"
//               >
//                 Update
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Portfolio List */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {data?.map((item) => {
//             const isEditing = editId === item._id;
//             return (
//               <div
//                 key={item._id}
//                 className={`rounded-4xl border p-5 transition-all ${isEditing ? "border-blue-500 bg-zinc-900" : "border-white/5 bg-zinc-900/50"}`}
//               >
//                 <h3 className="font-bold mb-4">{item.title}</h3>
//                 <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4">
//                   <img
//                     src={item.beforeUrl}
//                     className="h-20 w-full object-cover grayscale opacity-40"
//                     alt="Before"
//                   />
//                   <img
//                     src={item.afterUrl}
//                     className="h-20 w-full object-cover"
//                     alt="After"
//                   />
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setEditId(isEditing ? null : item._id)}
//                     className="flex-1 bg-white/5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400"
//                   >
//                     {isEditing ? "Cancel" : "Edit"}
//                   </button>
//                   <button
//                     onClick={() => {
//                       if (confirm("Delete?")) del.mutate(item._id);
//                     }}
//                     className="bg-red-500/10 p-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//                 {isEditing && (
//                   <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
//                     <input
//                       className="w-full bg-zinc-800 p-3 rounded-xl text-xs"
//                       value={form.title}
//                       onChange={(e) =>
//                         setForm({ ...form, title: e.target.value })
//                       }
//                       placeholder="Title"
//                     />

//                     {/* FILE INPUTS ADDED HERE */}
//                     <div className="grid grid-cols-2 gap-2">
//                       <label className="cursor-pointer bg-blue-500/10 p-2 rounded-xl text-[8px] uppercase text-center text-blue-400 border border-blue-500/20">
//                         {replaceBefore ? "Selected ✅" : "New Before Image"}
//                         <input
//                           type="file"
//                           className="hidden"
//                           onChange={(e) => setReplaceBefore(e.target.files[0])}
//                         />
//                       </label>
//                       <label className="cursor-pointer bg-blue-500/10 p-2 rounded-xl text-[8px] uppercase text-center text-blue-400 border border-blue-500/20">
//                         {replaceAfter ? "Selected ✅" : "New After Image"}
//                         <input
//                           type="file"
//                           className="hidden"
//                           onChange={(e) => setReplaceAfter(e.target.files[0])}
//                         />
//                       </label>
//                     </div>

//                     <button
//                       onClick={onSave}
//                       className="w-full bg-blue-600 py-3 rounded-xl text-[10px] font-black uppercase text-white"
//                     >
//                       <Save size={14} className="inline mr-2" /> Save Changes
//                     </button>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }

import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useBusinessStatus } from "../context/BusinessStatusContext";
import {
  Trash2,
  Save,
  Lock,
  AlertOctagon,
  MapPin,
  StickyNote,
  Type,
  ImageIcon,
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
  const { isClosed, reason, toggleStatus } = useBusinessStatus();
  const [newReason, setNewReason] = useState("");

  const { data, isLoading } = usePortfolioList();
  const del = useDeletePortfolio();
  const upd = useUpdatePortfolio();

  // --- Editing State ---
  const [editId, setEditId] = useState(null);
  // Form state for text fields
  const [form, setForm] = useState({ title: "", location: "", notes: "" });
  // State for holding NEW selected files
  const [replaceBefore, setReplaceBefore] = useState(null);
  const [replaceAfter, setReplaceAfter] = useState(null);
  // State for holding preview URLs for NEW files
  const [previewBeforeUrl, setPreviewBeforeUrl] = useState("");
  const [previewAfterUrl, setPreviewAfterUrl] = useState("");

  // Find the item currently being edited
  const currentItem = useMemo(
    () => data?.find((x) => x._id === editId) || null,
    [data, editId],
  );

  // Sync toggle reason input with context state
  useEffect(() => {
    if (reason) setNewReason(reason);
  }, [reason]);

  // --- Effect 1: When entering edit mode, populate text form ---
  useEffect(() => {
    if (!currentItem) {
      // Clear previews when exiting edit mode
      setPreviewBeforeUrl("");
      setPreviewAfterUrl("");
      return;
    }
    setForm({
      title: currentItem.title || "",
      location: currentItem.location || "",
      notes: currentItem.notes || "",
    });
    // Reset file replacements when entering edit mode for a new item
    setReplaceBefore(null);
    setReplaceAfter(null);
  }, [currentItem]);

  // --- Effect 2: Generate image preview URLs when NEW files are picked ---
  useEffect(() => {
    if (!replaceBefore) return setPreviewBeforeUrl("");
    const url = URL.createObjectURL(replaceBefore);
    setPreviewBeforeUrl(url);
    // Cleanup memory when file changes
    return () => URL.revokeObjectURL(url);
  }, [replaceBefore]);

  useEffect(() => {
    if (!replaceAfter) return setPreviewAfterUrl("");
    const url = URL.createObjectURL(replaceAfter);
    setPreviewAfterUrl(url);
    // Cleanup memory when file changes
    return () => URL.revokeObjectURL(url);
  }, [replaceAfter]);

  const onSave = async () => {
    if (!editId) return;
    try {
      // The api.js will convert this payload object into FormData
      await upd.mutateAsync({
        id: editId,
        payload: {
          ...form,
          beforeFile: replaceBefore, // Will be null if no new file picked
          afterFile: replaceAfter, // Will be null if no new file picked
        },
      });
      // Reset editing state on success
      setEditId(null);
      setReplaceBefore(null);
      setReplaceAfter(null);
      alert("Project updated successfully!");
    } catch (e) {
      alert("Update failed: " + e.message);
    }
  };

  if (!token)
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <Lock className="mr-2" /> Access Restricted
      </div>
    );

  return (
    <main className="min-h-screen bg-zinc-950 pb-20 pt-24 text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Toggle Section */}
        <div className="mb-12 rounded-4xl border border-white/5 bg-zinc-900 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <AlertOctagon
                className={isClosed ? "text-red-500" : "text-emerald-500"}
              />
              <h2 className="text-xl font-black uppercase">Emergency Status</h2>
            </div>
            <button
              onClick={() => toggleStatus(newReason)}
              className={`w-20 h-10 rounded-full transition-all ${isClosed ? "bg-red-500" : "bg-zinc-700"}`}
            >
              <motion.div
                animate={{ x: isClosed ? 44 : 4 }}
                className="w-8 h-8 bg-white rounded-full ml-1"
              />
            </button>
          </div>
          {isClosed && (
            <div className="mt-6 flex gap-3">
              <input
                className="flex-1 bg-zinc-800 p-4 rounded-xl outline-none border border-white/5 focus:border-red-500"
                value={newReason}
                onChange={(e) => setNewReason(e.target.value)}
              />
              <button
                onClick={() => toggleStatus(newReason)}
                className="bg-white text-black px-6 rounded-xl font-bold uppercase text-xs"
              >
                Update
              </button>
            </div>
          )}
        </div>

        {/* Portfolio List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => {
            const isEditing = editId === item._id;

            // Logic: If editing AND a new file is picked, show the new preview URL.
            // Otherwise, show the original URL from the database.
            const activeBeforeUrl =
              isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
            const activeAfterUrl =
              isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

            return (
              <div
                key={item._id}
                className={`rounded-4xl border p-5 transition-all ${isEditing ? "border-blue-500 bg-zinc-900 shadow-xl shadow-blue-500/10" : "border-white/5 bg-zinc-900/50"}`}
              >
                {/* View Mode Title */}
                {!isEditing && (
                  <h3 className="font-bold mb-4 truncate">{item.title}</h3>
                )}

                {/* Image Display */}
                <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={activeBeforeUrl}
                    className="h-24 w-full object-cover grayscale opacity-50"
                    alt="Before"
                  />
                  <img
                    src={activeAfterUrl}
                    className="h-24 w-full object-cover"
                    alt="After"
                  />
                  {/* Labels over images in edit mode */}
                  {isEditing && (
                    <>
                      <div className="absolute top-1 left-1 bg-black/50 text-[8px] uppercase p-1 rounded text-white/70">
                        Before
                      </div>
                      <div className="absolute top-1 right-1 bg-black/50 text-[8px] uppercase p-1 rounded text-white/70">
                        After
                      </div>
                    </>
                  )}
                </div>

                {/* Action Buttons (Edit/Delete vs Cancel) */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditId(isEditing ? null : item._id)}
                    className="flex-1 bg-white/5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white/10 transition-colors"
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                  {!isEditing && (
                    <button
                      onClick={() => {
                        if (confirm("Delete this item permanently?"))
                          del.mutate(item._id);
                      }}
                      className="bg-red-500/10 p-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>

                {/* --- EDIT MODE FORM --- */}
                <AnimatePresence>
                  {isEditing && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-3 border-t border-white/5 pt-4 overflow-hidden"
                    >
                      {/* Title Input */}
                      <div className="relative">
                        <Type
                          size={14}
                          className="absolute left-3 top-3 text-zinc-500"
                        />
                        <input
                          className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors"
                          value={form.title}
                          onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                          }
                          placeholder="Project Title"
                        />
                      </div>

                      {/* Location Input */}
                      <div className="relative">
                        <MapPin
                          size={14}
                          className="absolute left-3 top-3 text-zinc-500"
                        />
                        <input
                          className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors"
                          value={form.location}
                          onChange={(e) =>
                            setForm({ ...form, location: e.target.value })
                          }
                          placeholder="Location (e.g. Birmingham)"
                        />
                      </div>

                      {/* Notes Input */}
                      <div className="relative">
                        <StickyNote
                          size={14}
                          className="absolute left-3 top-3 text-zinc-500"
                        />
                        <textarea
                          rows={2}
                          className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors resize-none"
                          value={form.notes}
                          onChange={(e) =>
                            setForm({ ...form, notes: e.target.value })
                          }
                          placeholder="Optional notes..."
                        />
                      </div>

                      {/* FILE UPLOAD BUTTONS */}
                      <div className="grid grid-cols-2 gap-2">
                        <label
                          className={`cursor-pointer p-3 rounded-xl text-[9px] font-black uppercase text-center border transition-all ${replaceBefore ? "bg-blue-600 text-white border-blue-600" : "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"}`}
                        >
                          {replaceBefore ? (
                            <span>New "Before" Selected</span>
                          ) : (
                            <span className="flex items-center justify-center gap-1">
                              <ImageIcon size={12} /> Change "Before"
                            </span>
                          )}
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) =>
                              setReplaceBefore(e.target.files?.[0])
                            }
                          />
                        </label>
                        <label
                          className={`cursor-pointer p-3 rounded-xl text-[9px] font-black uppercase text-center border transition-all ${replaceAfter ? "bg-blue-600 text-white border-blue-600" : "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"}`}
                        >
                          {replaceAfter ? (
                            <span>New "After" Selected</span>
                          ) : (
                            <span className="flex items-center justify-center gap-1">
                              <ImageIcon size={12} /> Change "After"
                            </span>
                          )}
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) =>
                              setReplaceAfter(e.target.files?.[0])
                            }
                          />
                        </label>
                      </div>

                      {/* SAVE BUTTON */}
                      <button
                        onClick={onSave}
                        disabled={upd.isPending}
                        className="w-full bg-blue-600 py-3 rounded-xl text-[10px] font-black uppercase text-white hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {upd.isPending ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <Save size={14} />
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
      </div>
    </main>
  );
}
