// import { useState } from "react";
// import { useLogin } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const { mutateAsync, isPending, error } = useLogin();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       await mutateAsync({ email, password });
//       navigate("/admin/upload"); // redirect after login
//     } catch (err) {
//       // handled by react-query
//     }
//   };

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-md px-4 py-20">
//         <h1 className="text-2xl font-extrabold text-zinc-900">Admin Login</h1>
//         <p className="mt-2 text-sm text-zinc-600">Owner access only</p>

//         <form
//           onSubmit={submit}
//           className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
//         >
//           <div>
//             <label className="text-sm font-bold text-zinc-900">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               placeholder="admin@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-bold text-zinc-900">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               required
//             />
//           </div>

//           <button
//             className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
//             type="submit"
//             disabled={isPending}
//           >
//             {isPending ? "Logging in..." : "Login"}
//           </button>

//           {error ? (
//             <div className="text-sm text-red-600">
//               Invalid email or password
//             </div>
//           ) : null}
//         </form>
//       </div>
//     </main>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLogin } from "../hooks/useAuth";
// import { tokenStorage } from "../lib/storage";

// export default function AdminLogin() {
//   const nav = useNavigate();
//   const { mutateAsync, isPending } = useLogin();

//   const [email, setEmail] = useState("admin@example.com");
//   const [password, setPassword] = useState("StrongPass123!");
//   const [errMsg, setErrMsg] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setErrMsg("");

//     try {
//       const res = await mutateAsync({ email, password });

//       // ✅ Double-safety: ensure token saved
//       if (res?.token) tokenStorage.set(res.token);

//       const stored = tokenStorage.get();
//       if (!stored) {
//         setErrMsg("Token save hocche na. localStorage permission check koro.");
//         return;
//       }

//       nav("/admin/upload");
//     } catch (e2) {
//       setErrMsg("Login failed. Email/Password check koro.");
//     }
//   };

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-md px-4 py-20">
//         <h1 className="text-2xl font-extrabold text-zinc-900">Admin Login</h1>
//         <p className="mt-2 text-sm text-zinc-600">Owner access only</p>

//         <form
//           onSubmit={submit}
//           className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
//         >
//           <div>
//             <label className="text-sm font-bold text-zinc-900">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-bold text-zinc-900">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
//               required
//             />
//           </div>

//           <button
//             className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
//             type="submit"
//             disabled={isPending}
//           >
//             {isPending ? "Logging in..." : "Login"}
//           </button>

//           {errMsg ? (
//             <div className="rounded-xl border border-red-200 bg-white p-3 text-sm text-red-600">
//               {errMsg}
//             </div>
//           ) : null}

//           {/* ✅ quick debug */}
//           <div className="text-xs text-zinc-500">
//             Token in storage: {tokenStorage.get() ? "YES ✅" : "NO ❌"}
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { useLogin } from "../hooks/useAuth";
import { tokenStorage } from "../lib/storage";

export default function AdminLogin() {
  const nav = useNavigate();
  const { mutateAsync, isPending } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      // Redirect to the portfolio management page
      nav("/admin/portfolio");
    } catch (err) {
      setErrMsg("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-zinc-950 px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Logo/Icon Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] mb-4">
            <ShieldCheck className="text-white h-8 w-8" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">
            Command <span className="text-blue-600 not-italic">Center</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest font-bold">
            Authorized Personnel Only
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={submit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Mail className="h-3 w-3 text-blue-500" /> Admin Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/5 bg-zinc-800/50 px-4 py-4 text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="admin@royalshine.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Lock className="h-3 w-3 text-blue-500" /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/5 bg-zinc-800/50 px-4 py-4 text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Error Message */}
            {errMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-500"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errMsg}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          {/* Footer Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-6">
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
