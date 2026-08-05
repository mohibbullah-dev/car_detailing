import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useLogin } from "../hooks/useAuth";
import { tokenStorage } from "../lib/storage";

export default function AdminLogin() {
  const nav = useNavigate();
  const { mutateAsync, isPending } = useLogin();

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    try {
      const res = await mutateAsync({ email, password });

      if (res?.token) tokenStorage.set(res.token);

      const stored = tokenStorage.get();
      if (!stored) {
        setErrMsg("Storage error: Unable to save session.");
        return;
      }

      nav("/admin/portfolio");
    } catch {
      setErrMsg(
        "Authentication failed. Check email/password in Supabase Auth (confirm email must be enabled or confirmed).",
      );
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4">
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-[#E10600]/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-[#E10600]/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E10600] shadow-[0_0_30px_-5px_rgba(225,6,0,0.6)]">
            <ShieldCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">
            Command <span className="text-[#E10600] not-italic">Center</span>
          </h1>
          <p className="mt-1 text-sm font-bold uppercase tracking-widest text-zinc-500">
            Authorized Personnel Only
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={submit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Mail className="h-3 w-3 text-[#E10600]" /> Admin Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/5 bg-zinc-800/50 px-4 py-4 text-white placeholder:text-zinc-600 transition-all focus:border-[#E10600] focus:outline-none focus:ring-1 focus:ring-[#E10600]"
                placeholder="admin@gmail.com"
                required
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Lock className="h-3 w-3 text-[#E10600]" /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-white/5 bg-zinc-800/50 px-4 py-4 pr-12 text-white placeholder:text-zinc-600 transition-all focus:border-[#E10600] focus:outline-none focus:ring-1 focus:ring-[#E10600]"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {errMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-500"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errMsg}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#E10600] py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#c00500] active:scale-[0.98] disabled:opacity-50"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/5 pt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <div
              className={`h-2 w-2 rounded-full ${tokenStorage.get() ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`}
            />
            {tokenStorage.get() ? "Session Active" : "No Active Session"}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
