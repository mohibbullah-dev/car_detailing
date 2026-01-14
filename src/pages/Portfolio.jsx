import { usePortfolioList } from "../hooks/usePortfolio";

export default function Portfolio() {
  const { data, isLoading, error } = usePortfolioList();

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-zinc-900">
          All Previous Work
        </h1>
        <p className="mt-2 text-zinc-600">
          Full gallery of before & after jobs.
        </p>

        {isLoading ? (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading portfolio...
          </div>
        ) : error ? (
          <div className="mt-8 rounded-2xl border border-red-200 bg-white p-6 text-sm text-red-600">
            Failed to load portfolio. Check backend is running and CORS is ok.
          </div>
        ) : !data?.length ? (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No work uploaded yet.
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-extrabold text-zinc-900">
                  {item.title}
                </div>
                <div className="text-xs text-zinc-500">{item.location}</div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <img
                    src={item.beforeUrl}
                    alt="Before"
                    className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                    loading="lazy"
                  />
                  <img
                    src={item.afterUrl}
                    alt="After"
                    className="h-28 w-full rounded-xl border border-zinc-200 object-cover bg-white"
                    loading="lazy"
                  />
                </div>

                <p className="mt-3 text-sm text-zinc-600">{item.notes}</p>

                {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
