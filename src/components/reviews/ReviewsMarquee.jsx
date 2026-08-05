import { useSite } from "../../context/SiteContentContext";
import ReviewCard from "./ReviewCard";

export default function ReviewsMarquee() {
  const { reviews } = useSite();
  const customerReviews = reviews.items;
  const MARQUEE_ITEMS = [...customerReviews, ...customerReviews];

  return (
    <div
      className="reviews-marquee relative mt-12 sm:mt-14"
      aria-label="Customer reviews carousel"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070707] to-transparent sm:w-24 lg:w-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070707] to-transparent sm:w-24 lg:w-32"
        aria-hidden="true"
      />

      <div className="reviews-marquee-viewport overflow-hidden">
        <div className="reviews-marquee-track flex w-max gap-4">
          {MARQUEE_ITEMS.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="reviews-marquee-item w-[280px] shrink-0 sm:w-[300px] lg:w-[calc((min(100vw-3rem,1600px-8rem)-4*1rem)/5)]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
