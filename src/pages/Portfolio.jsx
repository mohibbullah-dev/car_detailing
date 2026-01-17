// import { usePortfolioList } from "../hooks/usePortfolio";

// export default function Portfolio() {
//   const { data, isLoading, error } = usePortfolioList();

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-extrabold text-zinc-900">
//           All Previous Work
//         </h1>
//         <p className="mt-2 text-zinc-600">
//           Full gallery of before & after jobs.
//         </p>

//         {isLoading ? (
//           <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
//             Loading portfolio...
//           </div>
//         ) : error ? (
//           <div className="mt-8 rounded-2xl border border-red-200 bg-white p-6 text-sm text-red-600">
//             Failed to load portfolio. Check backend is running and CORS is ok.
//           </div>
//         ) : !data?.length ? (
//           <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
//             No work uploaded yet.
//           </div>
//         ) : (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {data.map((item) => (
//               <div
//                 key={item._id}
//                 className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="text-sm font-extrabold text-zinc-900">
//                   {item.title}
//                 </div>
//                 <div className="text-xs text-zinc-500">{item.location}</div>

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

//                 <p className="mt-3 text-sm text-zinc-600">{item.notes}</p>

//                 {item.tags?.length ? (
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {item.tags.map((t) => (
//                       <span
//                         key={t}
//                         className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// import { useEffect, useState } from "react";
// import { apiFetch } from "../lib/apiClient";

// export default function Portfolio() {
//   const [items, setItems] = useState([]);
//   const [err, setErr] = useState("");

//   useEffect(() => {
//     apiFetch("/api/portfolio")
//       .then(setItems)
//       .catch((e) => setErr(e.message));
//   }, []);

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-extrabold text-zinc-900">
//           All Previous Work
//         </h1>
//         <p className="mt-2 text-zinc-600">
//           Full gallery of before & after jobs.
//         </p>

//         {err ? (
//           <div className="mt-6 rounded-xl border border-red-200 p-4 text-sm text-red-600">
//             {err}
//           </div>
//         ) : null}

//         <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {items.map((item) => (
//             <div
//               key={item._id}
//               className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//             >
//               <div className="text-sm font-extrabold text-zinc-900">
//                 {item.title}
//               </div>
//               <div className="text-xs text-zinc-500">{item.location}</div>

//               <div className="mt-3 grid grid-cols-2 gap-3">
//                 <img
//                   src={item.beforeUrl}
//                   alt="Before"
//                   className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                 />
//                 <img
//                   src={item.afterUrl}
//                   alt="After"
//                   className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
//                 />
//               </div>

//               <p className="mt-3 text-sm text-zinc-600">{item.notes}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// update verions

// import { usePortfolioList } from "../hooks/usePortfolio";

// export default function Portfolio() {
//   const { data, isLoading, error } = usePortfolioList();

//   return (
//     <main className="bg-white">
//       <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-extrabold text-zinc-900">
//           All Previous Work
//         </h1>
//         <p className="mt-2 text-zinc-600">
//           Full gallery of before & after jobs.
//         </p>

//         {isLoading ? (
//           <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
//             Loading portfolio...
//           </div>
//         ) : error ? (
//           <div className="mt-8 rounded-2xl border border-red-200 bg-white p-6 text-sm text-red-600">
//             Failed to load portfolio: {error.message}
//           </div>
//         ) : !data?.length ? (
//           <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
//             No work uploaded yet.
//           </div>
//         ) : (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {data.map((item) => (
//               <div
//                 key={item._id}
//                 className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="text-sm font-extrabold text-zinc-900">
//                   {item.title}
//                 </div>
//                 <div className="text-xs text-zinc-500">{item.location}</div>

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

//                 <p className="mt-3 text-sm text-zinc-600">{item.notes}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// update after design enhansement

import { usePortfolioList } from "../hooks/usePortfolio";
import { motion } from "framer-motion";
import { Camera, MapPin, Sparkles, AlertCircle, Loader2 } from "lucide-react";

export default function Portfolio() {
  const { data, isLoading, error } = usePortfolioList();

  return (
    <main className="min-h-screen bg-zinc-950 pt-24 pb-20">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4">
            <Camera className="h-3 w-3" /> Visual Gallery
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase sm:text-5xl">
            The Finish <span className="text-zinc-600 italic">Line.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            A curated showcase of our recent detailing projects. From daily
            drivers to luxury showpieces.
          </p>
        </header>

        {/* State Handling (Loading/Error/Empty) */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-[2rem] border border-white/5 bg-zinc-900/50">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              Loading Portfolio...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-[2rem] border border-red-500/20 bg-red-500/5">
            <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
            <p className="text-sm font-bold text-red-400">
              Failed to load work: {error.message}
            </p>
          </div>
        ) : !data?.length ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-[2rem] border border-white/5 bg-zinc-900/50 text-center">
            <Sparkles className="h-8 w-8 text-zinc-700 mb-4" />
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              No projects uploaded yet.
            </p>
          </div>
        ) : (
          /* Grid of Projects */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, idx) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900 p-5 shadow-2xl transition-all hover:border-white/10"
              >
                {/* Image Container */}
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-2 top-2 z-10 rounded-md bg-black/60 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white backdrop-blur-md">
                      Before
                    </span>
                    <img
                      src={item.beforeUrl}
                      alt="Before detailing"
                      className="h-40 w-full rounded-2xl border border-white/5 object-cover opacity-80 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-2 top-2 z-10 rounded-md bg-blue-600 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white shadow-lg">
                      After
                    </span>
                    <img
                      src={item.afterUrl}
                      alt="After detailing"
                      className="h-40 w-full rounded-2xl border border-blue-500/20 object-cover shadow-2xl shadow-blue-500/10"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      <MapPin className="h-3 w-3 text-blue-500" />
                      {item.location}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400 line-clamp-2 italic">
                    "{item.notes}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
