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
//   Search,
//   PlusCircle,
//   LayoutGrid,
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
//       alert("Project updated successfully!");
//     } catch (e) {
//       alert("Update failed: " + e.message);
//     }
//   };

//   if (!token)
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-obsidian text-white gap-4 italic font-black uppercase tracking-widest">
//         <Lock className="text-red-500 h-10 w-10 shadow-glow-red" /> Access
//         Restricted
//       </div>
//     );

//   return (
//     <main className="min-h-screen bg-obsidian pb-20 pt-32 text-white overflow-hidden">
//       {/* Immersive Background */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-blue-600/5 blur-[140px] rounded-full" />
//         <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-40" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
//         {/* TOP ADMIN BAR */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 glass p-6 rounded-[2rem] border-white/5">
//           <div>
//             <div className="flex items-center gap-2 text-blue-500 mb-1">
//               <ShieldCheck size={14} className="shadow-glow-blue" />
//               <span className="text-[9px] font-black uppercase tracking-[0.3em]">
//                 Authorized Access Only
//               </span>
//             </div>
//             <h1 className="text-3xl font-black uppercase tracking-tighter italic">
//               Admin <span className="text-zinc-600 not-italic">Portfolio</span>
//             </h1>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="relative group">
//               <Search
//                 size={14}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
//               />
//               <input
//                 placeholder="Search projects..."
//                 className="bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-[10px] uppercase font-bold tracking-widest outline-none focus:border-blue-500/50 transition-all w-48"
//               />
//             </div>
//             <button
//               onClick={() => nav("/admin/upload")}
//               className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-glow-blue"
//             >
//               <PlusCircle size={20} />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* LEFT: EMERGENCY STATUS MODULE */}
//           <div className="lg:col-span-4 space-y-6">
//             <div
//               className={`glass rounded-[2rem] p-8 border-white/5 shadow-2xl transition-all duration-500 ${isClosed ? "shadow-red-900/20" : ""}`}
//             >
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-4">
//                   <div
//                     className={`p-4 rounded-2xl ${isClosed ? "bg-red-500 shadow-glow-red" : "bg-emerald-500 shadow-glow-blue"}`}
//                   >
//                     <AlertOctagon className="text-white" size={20} />
//                   </div>
//                   <div>
//                     <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
//                       System Availability
//                     </h2>
//                     <p
//                       className={`text-xs font-black uppercase italic ${isClosed ? "text-red-500" : "text-emerald-500"}`}
//                     >
//                       {isClosed ? "Currently Closed" : "Active & Open"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Custom Styled Toggle */}
//                 <button
//                   onClick={() => toggleStatus(newReason)}
//                   className={`w-14 h-7 rounded-full transition-all relative p-1 ${isClosed ? "bg-red-500" : "bg-zinc-800"}`}
//                 >
//                   <motion.div
//                     animate={{ x: isClosed ? 28 : 0 }}
//                     className="w-5 h-5 bg-white rounded-full shadow-lg"
//                   />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div className="relative">
//                   <StickyNote
//                     size={14}
//                     className="absolute left-4 top-4 text-zinc-500"
//                   />
//                   <textarea
//                     className="w-full glass bg-white/5 pl-11 p-4 rounded-2xl outline-none border border-white/5 focus:border-blue-500 text-[10px] font-bold uppercase transition-all resize-none h-24"
//                     value={newReason}
//                     onChange={(e) => setNewReason(e.target.value)}
//                     placeholder="Notice for clients..."
//                   />
//                 </div>
//                 <button
//                   onClick={() => toggleStatus(newReason)}
//                   className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] hover:invert transition-all active:scale-95"
//                 >
//                   Update Live Status
//                 </button>
//               </div>
//             </div>

//             {/* Quick Stats Bento */}
//             <div className="glass rounded-[2rem] p-6 border-white/5 grid grid-cols-2 gap-4">
//               <div className="text-center p-4">
//                 <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">
//                   Total Jobs
//                 </p>
//                 <p className="text-2xl font-black italic">
//                   {data?.length || 0}
//                 </p>
//               </div>
//               <div className="text-center p-4 border-l border-white/5">
//                 <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">
//                   Avg Rating
//                 </p>
//                 <p className="text-2xl font-black italic text-amber-500">5.0</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: PORTFOLIO MANAGEMENT LIST */}
//           <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
//             {data?.map((item) => {
//               const isEditing = editId === item._id;
//               const activeBeforeUrl =
//                 isEditing && replaceBefore ? previewBeforeUrl : item.beforeUrl;
//               const activeAfterUrl =
//                 isEditing && replaceAfter ? previewAfterUrl : item.afterUrl;

//               return (
//                 <div
//                   key={item._id}
//                   className={`glass rounded-[2.5rem] p-6 transition-all duration-500 border-white/5 ${isEditing ? "border-blue-500/50 bg-blue-500/[0.02]" : ""}`}
//                 >
//                   {/* Card Header */}
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                       <MapPin size={10} className="text-blue-500" />
//                       <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
//                         {item.location || "Birmingham"}
//                       </span>
//                     </div>
//                     {!isEditing && (
//                       <button
//                         onClick={() => {
//                           if (confirm("Permanently delete?"))
//                             del.mutate(item._id);
//                         }}
//                         className="text-zinc-600 hover:text-red-500 transition-colors"
//                       >
//                         <Trash2 size={14} />
//                       </button>
//                     )}
//                   </div>

//                   {/* High-Contrast Preview Card */}
//                   <div className="relative h-40 rounded-2xl overflow-hidden mb-6 group">
//                     <div className="grid grid-cols-2 h-full">
//                       <img
//                         src={activeBeforeUrl}
//                         className="h-full w-full object-cover grayscale opacity-50"
//                       />
//                       <img
//                         src={activeAfterUrl}
//                         className="h-full w-full object-cover border-l border-blue-500"
//                       />
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
//                     <p className="absolute bottom-4 left-4 text-[10px] font-black uppercase tracking-tighter italic text-white line-clamp-1 pr-10">
//                       {item.title}
//                     </p>
//                     <button
//                       onClick={() => setEditId(isEditing ? null : item._id)}
//                       className="absolute bottom-3 right-3 p-2 bg-white/10 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"
//                     >
//                       {isEditing ? (
//                         <Lock size={12} />
//                       ) : (
//                         <LayoutGrid size={12} />
//                       )}
//                     </button>
//                   </div>

//                   {/* Edit Interface */}
//                   <AnimatePresence>
//                     {isEditing && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="space-y-3"
//                       >
//                         <input
//                           className="w-full bg-white/5 p-3 rounded-xl text-[10px] uppercase font-bold border border-white/5 outline-none focus:border-blue-500 transition-all"
//                           value={form.title}
//                           onChange={(e) =>
//                             setForm({ ...form, title: e.target.value })
//                           }
//                           placeholder="Title"
//                         />
//                         <input
//                           className="w-full bg-white/5 p-3 rounded-xl text-[10px] uppercase font-bold border border-white/5 outline-none focus:border-blue-500 transition-all"
//                           value={form.location}
//                           onChange={(e) =>
//                             setForm({ ...form, location: e.target.value })
//                           }
//                           placeholder="Location"
//                         />
//                         <div className="grid grid-cols-2 gap-2">
//                           <label className="cursor-pointer p-3 rounded-xl glass bg-white/5 text-[8px] font-black uppercase text-center border border-white/5 hover:bg-white/10 block">
//                             <input
//                               type="file"
//                               className="hidden"
//                               accept="image/*"
//                               onChange={(e) =>
//                                 setReplaceBefore(e.target.files?.[0])
//                               }
//                             />
//                             {replaceBefore ? "Ready" : "New Before"}
//                           </label>
//                           <label className="cursor-pointer p-3 rounded-xl glass bg-white/5 text-[8px] font-black uppercase text-center border border-white/5 hover:bg-white/10 block">
//                             <input
//                               type="file"
//                               className="hidden"
//                               accept="image/*"
//                               onChange={(e) =>
//                                 setReplaceAfter(e.target.files?.[0])
//                               }
//                             />
//                             {replaceAfter ? "Ready" : "New After"}
//                           </label>
//                         </div>
//                         <button
//                           onClick={onSave}
//                           className="w-full bg-blue-600 py-3 rounded-xl text-[9px] font-black uppercase shadow-glow-blue flex items-center justify-center gap-2"
//                         >
//                           {upd.isPending ? (
//                             <Loader2 size={12} className="animate-spin" />
//                           ) : (
//                             <Save size={12} />
//                           )}{" "}
//                           Save Changes
//                         </button>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
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

  // 1. ADD SEARCH STATE
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

  // 2. FILTER DATA BASED ON SEARCH
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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-blue-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
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
              {/* 3. CONNECT INPUT TO STATE */}
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
            {/* 4. MAP OVER FILTERED DATA INSTEAD OF ORIGINAL DATA */}
            {filteredData.map((item) => {
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
