// import { useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useBusinessStatus } from "../context/BusinessStatusContext";
// import {
//   Trash2,
//   Save,
//   Lock,
//   AlertOctagon,
//   MapPin,
//   StickyNote,
//   Type,
//   ImageIcon,
//   Loader2,
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
//   const [newReason, setNewReason] = useState("");

//   const { data, isLoading } = usePortfolioList();
//   const del = useDeletePortfolio();
//   const upd = useUpdatePortfolio();

//   // --- Editing State ---
//   const [editId, setEditId] = useState(null);
//   // Form state for text fields
//   const [form, setForm] = useState({ title: "", location: "", notes: "" });
//   // State for holding NEW selected files
//   const [replaceBefore, setReplaceBefore] = useState(null);
//   const [replaceAfter, setReplaceAfter] = useState(null);
//   // State for holding preview URLs for NEW files
//   const [previewBeforeUrl, setPreviewBeforeUrl] = useState("");
//   const [previewAfterUrl, setPreviewAfterUrl] = useState("");

//   // Find the item currently being edited
//   const currentItem = useMemo(
//     () => data?.find((x) => x._id === editId) || null,
//     [data, editId],
//   );

//   // Sync toggle reason input with context state
//   useEffect(() => {
//     if (reason) setNewReason(reason);
//   }, [reason]);

//   // --- Effect 1: When entering edit mode, populate text form ---
//   useEffect(() => {
//     if (!currentItem) {
//       // Clear previews when exiting edit mode
//       setPreviewBeforeUrl("");
//       setPreviewAfterUrl("");
//       return;
//     }
//     setForm({
//       title: currentItem.title || "",
//       location: currentItem.location || "",
//       notes: currentItem.notes || "",
//     });
//     // Reset file replacements when entering edit mode for a new item
//     setReplaceBefore(null);
//     setReplaceAfter(null);
//   }, [currentItem]);

//   // --- Effect 2: Generate image preview URLs when NEW files are picked ---
//   useEffect(() => {
//     if (!replaceBefore) return setPreviewBeforeUrl("");
//     const url = URL.createObjectURL(replaceBefore);
//     setPreviewBeforeUrl(url);
//     // Cleanup memory when file changes
//     return () => URL.revokeObjectURL(url);
//   }, [replaceBefore]);

//   useEffect(() => {
//     if (!replaceAfter) return setPreviewAfterUrl("");
//     const url = URL.createObjectURL(replaceAfter);
//     setPreviewAfterUrl(url);
//     // Cleanup memory when file changes
//     return () => URL.revokeObjectURL(url);
//   }, [replaceAfter]);

//   const onSave = async () => {
//     if (!editId) return;
//     try {
//       // The api.js will convert this payload object into FormData
//       await upd.mutateAsync({
//         id: editId,
//         payload: {
//           ...form,
//           beforeFile: replaceBefore, // Will be null if no new file picked
//           afterFile: replaceAfter, // Will be null if no new file picked
//         },
//       });
//       // Reset editing state on success
//       setEditId(null);
//       setReplaceBefore(null);
//       setReplaceAfter(null);
//       alert("Project updated successfully!");
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
//                 className="flex-1 bg-zinc-800 p-4 rounded-xl outline-none border border-white/5 focus:border-red-500"
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
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
//           {data?.map((item) => {
//             const isEditing = editId === item._id;

//             // Logic: If editing AND a new file is picked, show the new preview URL.
//             // Otherwise, show the original URL from the database.
//             const activeBeforeUrl =
//               isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
//             const activeAfterUrl =
//               isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

//             return (
//               <div
//                 key={item._id}
//                 className={`rounded-4xl border p-5 transition-all ${isEditing ? "border-blue-500 bg-zinc-900 shadow-xl shadow-blue-500/10" : "border-white/5 bg-zinc-900/50"}`}
//               >
//                 {/* View Mode Title */}
//                 {!isEditing && (
//                   <h3 className="font-bold mb-4 truncate">{item.title}</h3>
//                 )}

//                 {/* Image Display */}
//                 <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4 relative">
//                   <img
//                     src={activeBeforeUrl}
//                     className="h-24 w-full object-cover grayscale opacity-50"
//                     alt="Before"
//                   />
//                   <img
//                     src={activeAfterUrl}
//                     className="h-24 w-full object-cover"
//                     alt="After"
//                   />
//                   {/* Labels over images in edit mode */}
//                   {isEditing && (
//                     <>
//                       <div className="absolute top-1 left-1 bg-black/50 text-[8px] uppercase p-1 rounded text-white/70">
//                         Before
//                       </div>
//                       <div className="absolute top-1 right-1 bg-black/50 text-[8px] uppercase p-1 rounded text-white/70">
//                         After
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Action Buttons (Edit/Delete vs Cancel) */}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setEditId(isEditing ? null : item._id)}
//                     className="flex-1 bg-white/5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white/10 transition-colors"
//                   >
//                     {isEditing ? "Cancel" : "Edit"}
//                   </button>
//                   {!isEditing && (
//                     <button
//                       onClick={() => {
//                         if (confirm("Delete this item permanently?"))
//                           del.mutate(item._id);
//                       }}
//                       className="bg-red-500/10 p-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   )}
//                 </div>

//                 {/* --- EDIT MODE FORM --- */}
//                 <AnimatePresence>
//                   {isEditing && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-4 space-y-3 border-t border-white/5 pt-4 overflow-hidden"
//                     >
//                       {/* Title Input */}
//                       <div className="relative">
//                         <Type
//                           size={14}
//                           className="absolute left-3 top-3 text-zinc-500"
//                         />
//                         <input
//                           className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors"
//                           value={form.title}
//                           onChange={(e) =>
//                             setForm({ ...form, title: e.target.value })
//                           }
//                           placeholder="Project Title"
//                         />
//                       </div>

//                       {/* Location Input */}
//                       <div className="relative">
//                         <MapPin
//                           size={14}
//                           className="absolute left-3 top-3 text-zinc-500"
//                         />
//                         <input
//                           className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors"
//                           value={form.location}
//                           onChange={(e) =>
//                             setForm({ ...form, location: e.target.value })
//                           }
//                           placeholder="Location (e.g. Birmingham)"
//                         />
//                       </div>

//                       {/* Notes Input */}
//                       <div className="relative">
//                         <StickyNote
//                           size={14}
//                           className="absolute left-3 top-3 text-zinc-500"
//                         />
//                         <textarea
//                           rows={2}
//                           className="w-full bg-zinc-800 pl-9 p-3 rounded-xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-colors resize-none"
//                           value={form.notes}
//                           onChange={(e) =>
//                             setForm({ ...form, notes: e.target.value })
//                           }
//                           placeholder="Optional notes..."
//                         />
//                       </div>

//                       {/* FILE UPLOAD BUTTONS */}
//                       <div className="grid grid-cols-2 gap-2">
//                         <label
//                           className={`cursor-pointer p-3 rounded-xl text-[9px] font-black uppercase text-center border transition-all ${replaceBefore ? "bg-blue-600 text-white border-blue-600" : "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"}`}
//                         >
//                           {replaceBefore ? (
//                             <span>New "Before" Selected</span>
//                           ) : (
//                             <span className="flex items-center justify-center gap-1">
//                               <ImageIcon size={12} /> Change "Before"
//                             </span>
//                           )}
//                           <input
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) =>
//                               setReplaceBefore(e.target.files?.[0])
//                             }
//                           />
//                         </label>
//                         <label
//                           className={`cursor-pointer p-3 rounded-xl text-[9px] font-black uppercase text-center border transition-all ${replaceAfter ? "bg-blue-600 text-white border-blue-600" : "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"}`}
//                         >
//                           {replaceAfter ? (
//                             <span>New "After" Selected</span>
//                           ) : (
//                             <span className="flex items-center justify-center gap-1">
//                               <ImageIcon size={12} /> Change "After"
//                             </span>
//                           )}
//                           <input
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) =>
//                               setReplaceAfter(e.target.files?.[0])
//                             }
//                           />
//                         </label>
//                       </div>

//                       {/* SAVE BUTTON */}
//                       <button
//                         onClick={onSave}
//                         disabled={upd.isPending}
//                         className="w-full bg-blue-600 py-3 rounded-xl text-[10px] font-black uppercase text-white hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
//                       >
//                         {upd.isPending ? (
//                           <Loader2 size={14} className="animate-spin" />
//                         ) : (
//                           <Save size={14} />
//                         )}
//                         Save Changes
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }

// import { useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useBusinessStatus } from "../context/BusinessStatusContext";
// import {
//   Trash2,
//   Save,
//   Lock,
//   AlertOctagon,
//   MapPin,
//   StickyNote,
//   Type,
//   ImageIcon,
//   Loader2,
//   ShieldCheck,
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
//   const [newReason, setNewReason] = useState("");

//   const { data, isLoading } = usePortfolioList();
//   const del = useDeletePortfolio();
//   const upd = useUpdatePortfolio();

//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ title: "", location: "", notes: "" });
//   const [replaceBefore, setReplaceBefore] = useState(null);
//   const [replaceAfter, setReplaceAfter] = useState(null);
//   const [previewBeforeUrl, setPreviewBeforeUrl] = useState("");
//   const [previewAfterUrl, setPreviewAfterUrl] = useState("");

//   const currentItem = useMemo(
//     () => data?.find((x) => x._id === editId) || null,
//     [data, editId],
//   );

//   useEffect(() => {
//     if (reason) setNewReason(reason);
//   }, [reason]);

//   useEffect(() => {
//     if (!currentItem) {
//       setPreviewBeforeUrl("");
//       setPreviewAfterUrl("");
//       return;
//     }
//     setForm({
//       title: currentItem.title || "",
//       location: currentItem.location || "",
//       notes: currentItem.notes || "",
//     });
//     setReplaceBefore(null);
//     setReplaceAfter(null);
//   }, [currentItem]);

//   useEffect(() => {
//     if (!replaceBefore) return setPreviewBeforeUrl("");
//     const url = URL.createObjectURL(replaceBefore);
//     setPreviewBeforeUrl(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceBefore]);

//   useEffect(() => {
//     if (!replaceAfter) return setPreviewAfterUrl("");
//     const url = URL.createObjectURL(replaceAfter);
//     setPreviewAfterUrl(url);
//     return () => URL.revokeObjectURL(url);
//   }, [replaceAfter]);

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
//       alert("Project updated successfully!");
//     } catch (e) {
//       alert("Update failed: " + e.message);
//     }
//   };

//   if (!token)
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white gap-4 italic font-black uppercase tracking-widest">
//         <Lock className="text-red-500 h-10 w-10" /> Access Restricted
//       </div>
//     );

//   return (
//     <main className="min-h-screen bg-zinc-950 pb-20 pt-32 text-white">
//       {/* Subtle Background Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
//         {/* Header Section */}
//         <div className="mb-12">
//           <div className="flex items-center gap-2 text-blue-500 mb-2">
//             <ShieldCheck size={16} />
//             <span className="text-[10px] font-black uppercase tracking-[0.3em]">
//               Management Console
//             </span>
//           </div>
//           <h1 className="text-4xl font-black uppercase tracking-tighter italic">
//             Admin <span className="text-zinc-600 not-italic">Portfolio</span>
//           </h1>
//         </div>

//         {/* Toggle Section (Emergency Status) */}
//         <div className="mb-12 glass rounded-[2.5rem] p-8 border-white/5 shadow-2xl">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-5">
//               <div
//                 className={`p-4 rounded-2xl ${isClosed ? "bg-red-500/10" : "bg-emerald-500/10"}`}
//               >
//                 <AlertOctagon
//                   className={isClosed ? "text-red-500" : "text-emerald-500"}
//                   size={24}
//                 />
//               </div>
//               <div>
//                 <h2 className="text-sm font-black uppercase tracking-widest mb-1">
//                   Business Availability
//                 </h2>
//                 <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">
//                   Status:{" "}
//                   {isClosed ? (
//                     <span className="text-red-500">Currently Closed</span>
//                   ) : (
//                     <span className="text-emerald-500">Open for Booking</span>
//                   )}
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => toggleStatus(newReason)}
//               className={`w-16 h-8 rounded-full transition-all relative p-1 ${isClosed ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "bg-zinc-800"}`}
//             >
//               <motion.div
//                 animate={{ x: isClosed ? 32 : 0 }}
//                 className="w-6 h-6 bg-white rounded-full shadow-lg"
//               />
//             </button>
//           </div>

//           <AnimatePresence>
//             {isClosed && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-8 flex flex-col sm:flex-row gap-3"
//               >
//                 <input
//                   className="flex-1 glass bg-white/5 p-4 rounded-2xl outline-none border border-white/5 focus:border-red-500 text-sm transition-all"
//                   value={newReason}
//                   onChange={(e) => setNewReason(e.target.value)}
//                   placeholder="Reason for closure..."
//                 />
//                 <button
//                   onClick={() => toggleStatus(newReason)}
//                   className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors"
//                 >
//                   Update Notice
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Portfolio List */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
//           {data?.map((item) => {
//             const isEditing = editId === item._id;
//             const activeBeforeUrl =
//               isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
//             const activeAfterUrl =
//               isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

//             return (
//               <div
//                 key={item._id}
//                 className={`glass rounded-[2.5rem] p-6 transition-all duration-500 border ${
//                   isEditing
//                     ? "border-blue-500 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.2)] bg-blue-500/[0.02]"
//                     : "border-white/5"
//                 }`}
//               >
//                 {/* View Mode Title */}
//                 {!isEditing && (
//                   <h3 className="text-sm font-black uppercase tracking-tight mb-4 truncate text-zinc-300">
//                     {item.title}
//                   </h3>
//                 )}

//                 {/* Image Display */}
//                 <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden mb-6 relative">
//                   <div className="relative">
//                     <img
//                       src={activeBeforeUrl}
//                       className="h-28 w-full object-cover grayscale opacity-40 transition-all"
//                       alt="Before"
//                     />
//                     <span className="absolute bottom-2 left-2 text-[7px] font-black uppercase bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm text-white/50">
//                       Before
//                     </span>
//                   </div>
//                   <div className="relative">
//                     <img
//                       src={activeAfterUrl}
//                       className="h-28 w-full object-cover shadow-xl"
//                       alt="After"
//                     />
//                     <span className="absolute bottom-2 right-2 text-[7px] font-black uppercase bg-blue-600 px-2 py-1 rounded-md shadow-lg">
//                       After
//                     </span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setEditId(isEditing ? null : item._id)}
//                     className={`flex-1 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
//                       isEditing
//                         ? "bg-zinc-800 text-white border border-white/10"
//                         : "bg-white/5 text-zinc-400 hover:bg-white/10"
//                     }`}
//                   >
//                     {isEditing ? "Cancel" : "Edit Details"}
//                   </button>
//                   {!isEditing && (
//                     <button
//                       onClick={() => {
//                         if (confirm("Delete this item permanently?"))
//                           del.mutate(item._id);
//                       }}
//                       className="bg-red-500/10 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/5"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   )}
//                 </div>

//                 {/* --- EDIT MODE FORM --- */}
//                 <AnimatePresence>
//                   {isEditing && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-6 space-y-4 border-t border-white/5 pt-6 overflow-hidden"
//                     >
//                       <div className="space-y-3">
//                         <div className="relative">
//                           <Type
//                             size={14}
//                             className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
//                           />
//                           <input
//                             className="w-full bg-white/5 pl-11 p-4 rounded-2xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-all"
//                             value={form.title}
//                             onChange={(e) =>
//                               setForm({ ...form, title: e.target.value })
//                             }
//                             placeholder="Project Title"
//                           />
//                         </div>

//                         <div className="relative">
//                           <MapPin
//                             size={14}
//                             className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
//                           />
//                           <input
//                             className="w-full bg-white/5 pl-11 p-4 rounded-2xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-all"
//                             value={form.location}
//                             onChange={(e) =>
//                               setForm({ ...form, location: e.target.value })
//                             }
//                             placeholder="Location (e.g. Birmingham)"
//                           />
//                         </div>

//                         <div className="relative">
//                           <StickyNote
//                             size={14}
//                             className="absolute left-4 top-4 text-zinc-500"
//                           />
//                           <textarea
//                             rows={3}
//                             className="w-full bg-white/5 pl-11 p-4 rounded-2xl text-xs border border-white/5 focus:border-blue-500 outline-none transition-all resize-none italic"
//                             value={form.notes}
//                             onChange={(e) =>
//                               setForm({ ...form, notes: e.target.value })
//                             }
//                             placeholder="Client notes or specs..."
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-3">
//                         <label
//                           className={`cursor-pointer p-4 rounded-2xl text-[8px] font-black uppercase text-center border transition-all ${replaceBefore ? "bg-blue-600 text-white border-blue-600" : "glass bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"}`}
//                         >
//                           <input
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) =>
//                               setReplaceBefore(e.target.files?.[0])
//                             }
//                           />
//                           {replaceBefore ? (
//                             "Ready"
//                           ) : (
//                             <span className="flex items-center justify-center gap-2">
//                               <ImageIcon size={12} /> Before
//                             </span>
//                           )}
//                         </label>
//                         <label
//                           className={`cursor-pointer p-4 rounded-2xl text-[8px] font-black uppercase text-center border transition-all ${replaceAfter ? "bg-blue-600 text-white border-blue-600" : "glass bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"}`}
//                         >
//                           <input
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) =>
//                               setReplaceAfter(e.target.files?.[0])
//                             }
//                           />
//                           {replaceAfter ? (
//                             "Ready"
//                           ) : (
//                             <span className="flex items-center justify-center gap-2">
//                               <ImageIcon size={12} /> After
//                             </span>
//                           )}
//                         </label>
//                       </div>

//                       <button
//                         onClick={onSave}
//                         disabled={upd.isPending}
//                         className="w-full bg-blue-600 py-4 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-blue-600/20 active:scale-95"
//                       >
//                         {upd.isPending ? (
//                           <Loader2 size={14} className="animate-spin" />
//                         ) : (
//                           <Save size={14} />
//                         )}
//                         Confirm Updates
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }

// latest desing --------------------------

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
  ShieldCheck,
  Search,
  PlusCircle,
  LayoutGrid,
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

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", location: "", notes: "" });
  const [replaceBefore, setReplaceBefore] = useState(null);
  const [replaceAfter, setReplaceAfter] = useState(null);
  const [previewBeforeUrl, setPreviewBeforeUrl] = useState("");
  const [previewAfterUrl, setPreviewAfterUrl] = useState("");

  const currentItem = useMemo(
    () => data?.find((x) => x._id === editId) || null,
    [data, editId],
  );

  useEffect(() => {
    if (reason) setNewReason(reason);
  }, [reason]);

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

  if (!token)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-obsidian text-white gap-4 italic font-black uppercase tracking-widest">
        <Lock className="text-red-500 h-10 w-10 shadow-glow-red" /> Access
        Restricted
      </div>
    );

  return (
    <main className="min-h-screen bg-obsidian pb-20 pt-32 text-white overflow-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-blue-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* TOP ADMIN BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 glass p-6 rounded-[2rem] border-white/5">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-1">
              <ShieldCheck size={14} className="shadow-glow-blue" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                Authorized Access Only
              </span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">
              Admin <span className="text-zinc-600 not-italic">Portfolio</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                placeholder="Search projects..."
                className="bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-[10px] uppercase font-bold tracking-widest outline-none focus:border-blue-500/50 transition-all w-48"
              />
            </div>
            <button
              onClick={() => nav("/admin/upload")}
              className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-glow-blue"
            >
              <PlusCircle size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: EMERGENCY STATUS MODULE */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className={`glass rounded-[2rem] p-8 border-white/5 shadow-2xl transition-all duration-500 ${isClosed ? "shadow-red-900/20" : ""}`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-4 rounded-2xl ${isClosed ? "bg-red-500 shadow-glow-red" : "bg-emerald-500 shadow-glow-blue"}`}
                  >
                    <AlertOctagon className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      System Availability
                    </h2>
                    <p
                      className={`text-xs font-black uppercase italic ${isClosed ? "text-red-500" : "text-emerald-500"}`}
                    >
                      {isClosed ? "Currently Closed" : "Active & Open"}
                    </p>
                  </div>
                </div>

                {/* Custom Styled Toggle */}
                <button
                  onClick={() => toggleStatus(newReason)}
                  className={`w-14 h-7 rounded-full transition-all relative p-1 ${isClosed ? "bg-red-500" : "bg-zinc-800"}`}
                >
                  <motion.div
                    animate={{ x: isClosed ? 28 : 0 }}
                    className="w-5 h-5 bg-white rounded-full shadow-lg"
                  />
                </button>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <StickyNote
                    size={14}
                    className="absolute left-4 top-4 text-zinc-500"
                  />
                  <textarea
                    className="w-full glass bg-white/5 pl-11 p-4 rounded-2xl outline-none border border-white/5 focus:border-blue-500 text-[10px] font-bold uppercase transition-all resize-none h-24"
                    value={newReason}
                    onChange={(e) => setNewReason(e.target.value)}
                    placeholder="Notice for clients..."
                  />
                </div>
                <button
                  onClick={() => toggleStatus(newReason)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] hover:invert transition-all active:scale-95"
                >
                  Update Live Status
                </button>
              </div>
            </div>

            {/* Quick Stats Bento */}
            <div className="glass rounded-[2rem] p-6 border-white/5 grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                  Total Jobs
                </p>
                <p className="text-2xl font-black italic">
                  {data?.length || 0}
                </p>
              </div>
              <div className="text-center p-4 border-l border-white/5">
                <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                  Avg Rating
                </p>
                <p className="text-2xl font-black italic text-amber-500">5.0</p>
              </div>
            </div>
          </div>

          {/* RIGHT: PORTFOLIO MANAGEMENT LIST */}
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
            {data?.map((item) => {
              const isEditing = editId === item._id;
              const activeBeforeUrl =
                isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
              const activeAfterUrl =
                isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

              return (
                <div
                  key={item._id}
                  className={`glass rounded-[2.5rem] p-6 transition-all duration-500 border-white/5 ${isEditing ? "border-blue-500/50 bg-blue-500/[0.02]" : ""}`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={10} className="text-blue-500" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                        {item.location || "Birmingham"}
                      </span>
                    </div>
                    {!isEditing && (
                      <button
                        onClick={() => {
                          if (confirm("Permanently delete?"))
                            del.mutate(item._id);
                        }}
                        className="text-zinc-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>

                  {/* High-Contrast Preview Card */}
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-6 group">
                    <div className="grid grid-cols-2 h-full">
                      <img
                        src={activeBeforeUrl}
                        className="h-full w-full object-cover grayscale opacity-50"
                      />
                      <img
                        src={activeAfterUrl}
                        className="h-full w-full object-cover border-l border-blue-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-[10px] font-black uppercase tracking-tighter italic text-white line-clamp-1 pr-10">
                      {item.title}
                    </p>
                    <button
                      onClick={() => setEditId(isEditing ? null : item._id)}
                      className="absolute bottom-3 right-3 p-2 bg-white/10 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"
                    >
                      {isEditing ? (
                        <Lock size={12} />
                      ) : (
                        <LayoutGrid size={12} />
                      )}
                    </button>
                  </div>

                  {/* Edit Interface */}
                  <AnimatePresence>
                    {isEditing && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <input
                          className="w-full bg-white/5 p-3 rounded-xl text-[10px] uppercase font-bold border border-white/5 outline-none focus:border-blue-500 transition-all"
                          value={form.title}
                          onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                          }
                          placeholder="Title"
                        />
                        <input
                          className="w-full bg-white/5 p-3 rounded-xl text-[10px] uppercase font-bold border border-white/5 outline-none focus:border-blue-500 transition-all"
                          value={form.location}
                          onChange={(e) =>
                            setForm({ ...form, location: e.target.value })
                          }
                          placeholder="Location"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <label className="cursor-pointer p-3 rounded-xl glass bg-white/5 text-[8px] font-black uppercase text-center border border-white/5 hover:bg-white/10 block">
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
                          <label className="cursor-pointer p-3 rounded-xl glass bg-white/5 text-[8px] font-black uppercase text-center border border-white/5 hover:bg-white/10 block">
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
                          onClick={onSave}
                          className="w-full bg-blue-600 py-3 rounded-xl text-[9px] font-black uppercase shadow-glow-blue flex items-center justify-center gap-2"
                        >
                          {upd.isPending ? (
                            <Loader2 size={12} className="animate-spin" />
                          ) : (
                            <Save size={12} />
                          )}{" "}
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
      </div>
    </main>
  );
}
