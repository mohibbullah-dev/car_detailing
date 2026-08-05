import { Star, Quote } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import { PlatformIcon } from "./PlatformIcons";

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} fill="#E10600" className="text-[#E10600]" />
      ))}
    </div>
  );
}

export default function ReviewCard({ review }) {
  const { reviews } = useSite();
  const reviewPlatforms = reviews.platforms;

  return (
    <article className="review-card flex h-full flex-col p-5 sm:p-6">
      <Quote
        size={22}
        strokeWidth={1.5}
        className="mb-4 text-[#E10600]/80"
        aria-hidden="true"
      />

      <Stars />

      <blockquote className="mt-4 flex-1 text-[12px] leading-relaxed text-zinc-300 sm:text-[13px]">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10"
            loading="lazy"
          />
          <div>
            <p className="text-[11px] font-semibold text-white">{review.name}</p>
            <p className="text-[9px] text-zinc-500">
              Verified {reviewPlatforms[review.platform]} Review
            </p>
          </div>
        </div>
        <PlatformIcon platform={review.platform} className="h-5 w-5 shrink-0 opacity-90" />
      </footer>
    </article>
  );
}
