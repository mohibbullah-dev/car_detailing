import ReviewsBackground from "./ReviewsBackground";
import ReviewsIntro from "./ReviewsIntro";
import ReviewsAggregateBar from "./ReviewsAggregateBar";
import ReviewsMarquee from "./ReviewsMarquee";
import ReviewsTrustBar from "./ReviewsTrustBar";

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="reviews-section relative min-h-[100svh] overflow-hidden bg-[#050505] py-20 font-[Inter,system-ui,sans-serif] sm:py-24 lg:py-28"
      aria-labelledby="reviews-heading"
    >
      <ReviewsBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <ReviewsIntro />
        <ReviewsAggregateBar />
        <ReviewsMarquee />
        <ReviewsTrustBar />
      </div>
    </section>
  );
}
