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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";
import { tokenStorage } from "../lib/storage";

export default function AdminLogin() {
  const nav = useNavigate();
  const { mutateAsync, isPending } = useLogin();

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("StrongPass123!");
  const [errMsg, setErrMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    try {
      const res = await mutateAsync({ email, password });

      // ✅ Double-safety: ensure token saved
      if (res?.token) tokenStorage.set(res.token);

      const stored = tokenStorage.get();
      if (!stored) {
        setErrMsg("Token save hocche na. localStorage permission check koro.");
        return;
      }

      nav("/admin/upload");
    } catch (e2) {
      setErrMsg("Login failed. Email/Password check koro.");
    }
  };

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-md px-4 py-20">
        <h1 className="text-2xl font-extrabold text-zinc-900">Admin Login</h1>
        <p className="mt-2 text-sm text-zinc-600">Owner access only</p>

        <form
          onSubmit={submit}
          className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-bold text-zinc-900">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-900">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-3 py-2"
              required
            />
          </div>

          <button
            className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login"}
          </button>

          {errMsg ? (
            <div className="rounded-xl border border-red-200 bg-white p-3 text-sm text-red-600">
              {errMsg}
            </div>
          ) : null}

          {/* ✅ quick debug */}
          <div className="text-xs text-zinc-500">
            Token in storage: {tokenStorage.get() ? "YES ✅" : "NO ❌"}
          </div>
        </form>
      </div>
    </main>
  );
}
