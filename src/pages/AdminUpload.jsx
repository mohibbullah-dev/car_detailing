import React, { useEffect, useState } from "react";
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
      setTitle("");
      setLocation("");
      setNotes("");
      setBeforeFile(null);
      setAfterFile(null);
      e.target.reset();

      setTimeout(() => nav("/admin/portfolio"), 2000);
    } catch (err) {
      setErrMsg(err?.message || "Upload failed. Please check your connection.");
    }
  };

  return (
    <div className="space-y-8">
      <button
        type="button"
        onClick={() => nav("/admin/portfolio")}
        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 transition hover:text-white"
      >
        <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Portfolio
      </button>

      <p className="text-sm text-zinc-500">
        Document your latest work for the gallery.
      </p>

      <form onSubmit={submit} className="space-y-8">
        <div className="grid gap-6 rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <FileText className="h-3 w-3 text-[#E10600]" /> Project Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white transition-colors focus:border-[#E10600] focus:outline-none"
                placeholder="Tesla Model 3 Detail"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <MapPin className="h-3 w-3 text-[#E10600]" /> Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white transition-colors focus:border-[#E10600] focus:outline-none"
                placeholder="Birmingham"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
              <Tag className="h-3 w-3 text-[#E10600]" /> Service Tags
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white transition-colors focus:border-[#E10600] focus:outline-none"
              placeholder="Comma separated tags..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Job Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-zinc-800 px-4 py-3 text-white transition-colors focus:border-[#E10600] focus:outline-none"
              placeholder="Describe the process and results..."
              rows={4}
              required
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Before Image
            </label>
            <label
              className={`relative flex aspect-video cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all ${
                beforePreview
                  ? "border-white/10 bg-zinc-900"
                  : "border-white/5 bg-white/[0.02] hover:border-[#E10600]/50 hover:bg-white/[0.04]"
              }`}
            >
              {beforePreview ? (
                <img
                  src={beforePreview}
                  className="h-full w-full object-cover grayscale opacity-60"
                  alt="Before preview"
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

          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400">
              After Image
            </label>
            <label
              className={`relative flex aspect-video cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all ${
                afterPreview
                  ? "border-white/10 bg-zinc-900"
                  : "border-white/5 bg-white/[0.02] hover:border-[#E10600]/50 hover:bg-white/[0.04]"
              }`}
            >
              {afterPreview ? (
                <img
                  src={afterPreview}
                  className="h-full w-full object-cover"
                  alt="After preview"
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

        <div className="space-y-4">
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
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#E10600] py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#c00500] disabled:opacity-50 sm:w-auto sm:px-12"
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
  );
}
