// import React, { useEffect, useMemo, useState } from "react";
// import { useCreatePortfolio } from "../hooks/usePortfolio";
// import { tokenStorage } from "../lib/storage";

// export default function AdminUpload() {
//   const { mutateAsync, isPending } = useCreatePortfolio();

//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [notes, setNotes] = useState("");
//   const [tags, setTags] = useState("Emergency,Leak Fix");

//   const [beforeFile, setBeforeFile] = useState(null);
//   const [afterFile, setAfterFile] = useState(null);

//   const [beforePreview, setBeforePreview] = useState("");
//   const [afterPreview, setAfterPreview] = useState("");

//   const [errMsg, setErrMsg] = useState("");

//   const tokenOk = useMemo(() => Boolean(tokenStorage.get()), []);

//   // Create preview URLs
//   useEffect(() => {
//     if (!beforeFile) return setBeforePreview("");
//     const url = URL.createObjectURL(beforeFile);
//     setBeforePreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [beforeFile]);

//   useEffect(() => {
//     if (!afterFile) return setAfterPreview("");
//     const url = URL.createObjectURL(afterFile);
//     setAfterPreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [afterFile]);

//   const submit = async (e) => {
//     e.preventDefault();
//     setErrMsg("");

//     const token = tokenStorage.get();
//     if (!token) {
//       setErrMsg("Admin token missing. Please login again: /admin/login");
//       return;
//     }

//     if (!beforeFile || !afterFile) {
//       setErrMsg("Please select both Before and After images.");
//       return;
//     }

//     try {
//       await mutateAsync({
//         title,
//         location,
//         notes,
//         tags,
//         beforeFile,
//         afterFile,
//       });

//       alert("Uploaded ✅");

//       // Reset
//       setTitle("");
//       setLocation("");
//       setNotes("");
//       setTags("Emergency,Leak Fix");
//       setBeforeFile(null);
//       setAfterFile(null);
//       e.target.reset();
//     } catch (err) {
//       // axios error details
//       setErrMsg(err?.message || "Upload failed");
//       const status = err?.response?.status;
//       const msg = err?.response?.data?.message;

//       if (status === 401) {
//         setErrMsg(
//           "401 Unauthorized: token invalid/expired. Please login again."
//         );
//       } else if (status === 403) {
//         setErrMsg("403 Forbidden: admin access required.");
//       } else if (msg) {
//         setErrMsg(`Upload failed: ${msg}`);
//       } else {
//         setErrMsg("Upload failed. Backend running? API base URL correct?");
//       }
//     }
//   };

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-xl px-4 py-14">
//         <h1 className="text-2xl font-extrabold text-zinc-900">
//           Upload New Work
//         </h1>
//         <p className="mt-2 text-sm text-zinc-600">
//           Owner-only page. Upload before/after photos and job details.
//         </p>

//         <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700">
//           Token detected: <b>{tokenStorage.get() ? "YES ✅" : "NO ❌"}</b>
//         </div>

//         <form
//           onSubmit={submit}
//           className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
//         >
//           <div>
//             <label className="text-sm font-bold text-zinc-900">Title</label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               placeholder="e.g. Emergency Leak Repair"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-bold text-zinc-900">Location</label>
//             <input
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               placeholder="e.g. Birmingham"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-bold text-zinc-900">Tags</label>
//             <input
//               value={tags}
//               onChange={(e) => setTags(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               placeholder="Emergency,Leak Fix"
//             />
//             <p className="mt-1 text-xs text-zinc-500">
//               Separate tags using commas.
//             </p>
//           </div>

//           <div>
//             <label className="text-sm font-bold text-zinc-900">Notes</label>
//             <textarea
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               placeholder="What was done?"
//               rows={4}
//               required
//             />
//           </div>

//           {/* ✅ File inputs + previews */}
//           {/* <div className="grid gap-4 sm:grid-cols-2">
//             <div>
//               <label className="text-sm font-bold text-zinc-900">
//                 Before Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
//                 required
//               />
//               {beforePreview ? (
//                 <img
//                   src={beforePreview}
//                   alt="Before preview"
//                   className="mt-3 h-32 w-full rounded-xl border border-zinc-200 object-cover"
//                 />
//               ) : null}
//             </div>

//             <div>
//               <label className="text-sm font-bold text-zinc-900">
//                 After Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
//                 required
//               />
//               {afterPreview ? (
//                 <img
//                   src={afterPreview}
//                   alt="After preview"
//                   className="mt-3 h-32 w-full rounded-xl border border-zinc-200 object-cover"
//                 />
//               ) : null}
//             </div>
//           </div> */}

//           <div className="grid gap-4 sm:grid-cols-2">
//             {/* Before */}
//             <div className="space-y-2">
//               <label className="text-sm font-bold text-zinc-900">
//                 Before Image
//               </label>

//               <div className="flex items-center gap-3">
//                 <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
//                   Choose File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
//                     required
//                   />
//                 </label>

//                 <div className="min-w-0 flex-1">
//                   <div className="truncate text-xs text-zinc-600">
//                     {beforeFile ? beforeFile.name : "No file selected"}
//                   </div>
//                 </div>
//               </div>

//               {beforePreview ? (
//                 <img
//                   src={beforePreview}
//                   alt="Before preview"
//                   className="h-32 w-full rounded-xl border border-zinc-200 object-cover"
//                 />
//               ) : null}
//             </div>

//             {/* After */}
//             <div className="space-y-2">
//               <label className="text-sm font-bold text-zinc-900">
//                 After Image
//               </label>

//               <div className="flex items-center gap-3">
//                 <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
//                   Choose File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
//                     required
//                   />
//                 </label>

//                 <div className="min-w-0 flex-1">
//                   <div className="truncate text-xs text-zinc-600">
//                     {afterFile ? afterFile.name : "No file selected"}
//                   </div>
//                 </div>
//               </div>

//               {afterPreview ? (
//                 <img
//                   src={afterPreview}
//                   alt="After preview"
//                   className="h-32 w-full rounded-xl border border-zinc-200 object-cover"
//                 />
//               ) : null}
//             </div>
//           </div>

//           <button
//             className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
//             type="submit"
//             disabled={isPending || !tokenStorage.get()}
//             title={!tokenStorage.get() ? "Login required" : ""}
//           >
//             {isPending ? "Uploading..." : "Upload Work"}
//           </button>

//           {errMsg ? (
//             <div className="rounded-xl border border-red-200 bg-white p-3 text-sm text-red-600">
//               {errMsg}
//             </div>
//           ) : null}
//         </form>
//       </div>
//     </main>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Upload,
  ChevronLeft,
  Image as ImageIcon,
  MapPin,
  Tag,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useCreatePortfolio } from "../hooks/usePortfolio";
import { tokenStorage } from "../lib/storage";

export default function AdminUpload() {
  const nav = useNavigate();
  const { mutateAsync, isPending } = useCreatePortfolio();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("Ceramic Coating, Paint Correction");

  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);

  const [beforePreview, setBeforePreview] = useState("");
  const [afterPreview, setAfterPreview] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const token = tokenStorage.get();

  // Create preview URLs
  useEffect(() => {
    if (!beforeFile) return setBeforePreview("");
    const url = URL.createObjectURL(beforeFile);
    setBeforePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [beforeFile]);

  useEffect(() => {
    if (!afterFile) return setAfterPreview("");
    const url = URL.createObjectURL(afterFile);
    setAfterPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [afterFile]);

  const submit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccess(false);

    if (!token) {
      setErrMsg("Admin token missing. Please login again.");
      return;
    }

    if (!beforeFile || !afterFile) {
      setErrMsg("Both 'Before' and 'After' images are required.");
      return;
    }

    try {
      await mutateAsync({
        title,
        location,
        notes,
        tags,
        beforeFile,
        afterFile,
      });

      setSuccess(true);
      // Reset form
      setTitle("");
      setLocation("");
      setNotes("");
      setBeforeFile(null);
      setAfterFile(null);
      e.target.reset();

      // Navigate back after a short delay
      setTimeout(() => nav("/admin/portfolio"), 2000);
    } catch (err) {
      setErrMsg(err?.message || "Upload failed. Please check your connection.");
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 pb-20 pt-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        {/* Navigation & Header */}
        <button
          onClick={() => nav("/admin/portfolio")}
          className="group mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition hover:text-white"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </button>

        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">
            Add New{" "}
            <span className="text-blue-600 not-italic">Transformation</span>
          </h1>
          <p className="mt-2 text-zinc-500">
            Document your latest work for the gallery.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-8">
          {/* Main Info Section */}
          <div className="grid gap-6 rounded-[2rem] border border-white/5 bg-zinc-900/50 p-6 sm:p-8 shadow-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                  <FileText className="h-3 w-3 text-blue-500" /> Project Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Tesla Model 3 Detail"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                  <MapPin className="h-3 w-3 text-blue-500" /> Location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Birmingham"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Tag className="h-3 w-3 text-blue-500" /> Service Tags
              </label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Comma separated tags..."
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                Job Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Describe the process and results..."
                rows={4}
                required
              />
            </div>
          </div>

          {/* Media Upload Section */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Before Upload */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Before Image
              </label>
              <label
                className={`relative flex aspect-video cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed transition-all ${
                  beforePreview
                    ? "border-white/10 bg-zinc-900"
                    : "border-white/5 bg-zinc-900/30 hover:bg-zinc-900 hover:border-blue-500/50"
                }`}
              >
                {beforePreview ? (
                  <img
                    src={beforePreview}
                    className="h-full w-full object-cover grayscale opacity-60"
                    alt="Preview"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-zinc-500">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Select File
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* After Upload */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">
                After Image
              </label>
              <label
                className={`relative flex aspect-video cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed transition-all ${
                  afterPreview
                    ? "border-white/10 bg-zinc-900"
                    : "border-white/5 bg-zinc-900/30 hover:bg-zinc-900 hover:border-blue-500/50"
                }`}
              >
                {afterPreview ? (
                  <img
                    src={afterPreview}
                    className="h-full w-full object-cover"
                    alt="Preview"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-zinc-500">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Select File
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>

          {/* Feedback & Actions */}
          <div className="space-y-4 pt-4">
            {errMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-500"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                {errMsg}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-500"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                Work uploaded successfully! Redirecting...
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isPending || !token}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] disabled:opacity-50"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Publish To Gallery <Upload className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
