import React, { useEffect, useMemo, useState } from "react";
import { useCreatePortfolio } from "../hooks/usePortfolio";
import { tokenStorage } from "../lib/storage";

export default function AdminUpload() {
  const { mutateAsync, isPending } = useCreatePortfolio();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("Emergency,Leak Fix");

  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);

  const [beforePreview, setBeforePreview] = useState("");
  const [afterPreview, setAfterPreview] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const tokenOk = useMemo(() => Boolean(tokenStorage.get()), []);

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

    const token = tokenStorage.get();
    if (!token) {
      setErrMsg("Admin token missing. Please login again: /admin/login");
      return;
    }

    if (!beforeFile || !afterFile) {
      setErrMsg("Please select both Before and After images.");
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

      alert("Uploaded ✅");

      // Reset
      setTitle("");
      setLocation("");
      setNotes("");
      setTags("Emergency,Leak Fix");
      setBeforeFile(null);
      setAfterFile(null);
      e.target.reset();
    } catch (err) {
      // axios error details
      setErrMsg(err?.message || "Upload failed");
      const status = err?.response?.status;
      const msg = err?.response?.data?.message;

      if (status === 401) {
        setErrMsg(
          "401 Unauthorized: token invalid/expired. Please login again."
        );
      } else if (status === 403) {
        setErrMsg("403 Forbidden: admin access required.");
      } else if (msg) {
        setErrMsg(`Upload failed: ${msg}`);
      } else {
        setErrMsg("Upload failed. Backend running? API base URL correct?");
      }
    }
  };

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-xl px-4 py-14">
        <h1 className="text-2xl font-extrabold text-zinc-900">
          Upload New Work
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Owner-only page. Upload before/after photos and job details.
        </p>

        <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700">
          Token detected: <b>{tokenStorage.get() ? "YES ✅" : "NO ❌"}</b>
        </div>

        <form
          onSubmit={submit}
          className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-bold text-zinc-900">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              placeholder="e.g. Emergency Leak Repair"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-900">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              placeholder="e.g. Birmingham"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-900">Tags</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              placeholder="Emergency,Leak Fix"
            />
            <p className="mt-1 text-xs text-zinc-500">
              Separate tags using commas.
            </p>
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-900">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              placeholder="What was done?"
              rows={4}
              required
            />
          </div>

          {/* ✅ File inputs + previews */}
          {/* <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-bold text-zinc-900">
                Before Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
                required
              />
              {beforePreview ? (
                <img
                  src={beforePreview}
                  alt="Before preview"
                  className="mt-3 h-32 w-full rounded-xl border border-zinc-200 object-cover"
                />
              ) : null}
            </div>

            <div>
              <label className="text-sm font-bold text-zinc-900">
                After Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
                required
              />
              {afterPreview ? (
                <img
                  src={afterPreview}
                  alt="After preview"
                  className="mt-3 h-32 w-full rounded-xl border border-zinc-200 object-cover"
                />
              ) : null}
            </div>
          </div> */}

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Before */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-900">
                Before Image
              </label>

              <div className="flex items-center gap-3">
                <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
                    required
                  />
                </label>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs text-zinc-600">
                    {beforeFile ? beforeFile.name : "No file selected"}
                  </div>
                </div>
              </div>

              {beforePreview ? (
                <img
                  src={beforePreview}
                  alt="Before preview"
                  className="h-32 w-full rounded-xl border border-zinc-200 object-cover"
                />
              ) : null}
            </div>

            {/* After */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-900">
                After Image
              </label>

              <div className="flex items-center gap-3">
                <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
                    required
                  />
                </label>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs text-zinc-600">
                    {afterFile ? afterFile.name : "No file selected"}
                  </div>
                </div>
              </div>

              {afterPreview ? (
                <img
                  src={afterPreview}
                  alt="After preview"
                  className="h-32 w-full rounded-xl border border-zinc-200 object-cover"
                />
              ) : null}
            </div>
          </div>

          <button
            className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
            type="submit"
            disabled={isPending || !tokenStorage.get()}
            title={!tokenStorage.get() ? "Login required" : ""}
          >
            {isPending ? "Uploading..." : "Upload Work"}
          </button>

          {errMsg ? (
            <div className="rounded-xl border border-red-200 bg-white p-3 text-sm text-red-600">
              {errMsg}
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
}
