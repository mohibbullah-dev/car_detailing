import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSite } from "../../context/SiteContentContext";
import ReviewCard from "./ReviewCard";

const HOME_PREVIEW_COUNT = 5;

export default function ReviewsRow({ limit = HOME_PREVIEW_COUNT, showNav = false }) {
  const { reviews } = useSite();
  const customerReviews = reviews.items;
  const isPreview = limit != null;
  const previewCount = isPreview ? limit : customerReviews.length;
  const [offset, setOffset] = useState(0);

  const canScroll = showNav && customerReviews.length > previewCount;
  const maxOffset = Math.max(0, customerReviews.length - previewCount);

  const visible = canScroll
    ? customerReviews.slice(offset, offset + previewCount)
    : isPreview
      ? customerReviews.slice(0, limit)
      : customerReviews;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <div className="mt-12 sm:mt-14">
      <div className="flex items-stretch gap-4">
        <div
          className={`grid flex-1 gap-4 ${
            isPreview && limit === 5
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {visible.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {canScroll && (
          <div className="hidden shrink-0 flex-col justify-center gap-3 xl:flex">
            <button
              type="button"
              onClick={prev}
              disabled={offset === 0}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E10600]/40 bg-transparent text-[#E10600] transition-all hover:border-[#E10600] hover:bg-[#E10600]/10 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={offset >= maxOffset}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E10600]/40 bg-transparent text-[#E10600] transition-all hover:border-[#E10600] hover:bg-[#E10600]/10 disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
