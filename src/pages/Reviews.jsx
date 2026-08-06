import ReviewsBackground from "../components/reviews/ReviewsBackground";
import ReviewsIntro from "../components/reviews/ReviewsIntro";
import ReviewsAggregateBar from "../components/reviews/ReviewsAggregateBar";
import ReviewsRow from "../components/reviews/ReviewsRow";
import ReviewsTrustBar from "../components/reviews/ReviewsTrustBar";

export default function Reviews() {
  return (
    <main className="reviews-section relative min-h-[100svh] overflow-hidden bg-[#050505] pt-28 pb-20 font-[Inter,system-ui,sans-serif] lg:pt-32 lg:pb-24">
      <ReviewsBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <ReviewsIntro showViewAll={false} />
        <ReviewsAggregateBar />
        <ReviewsRow limit={null} showNav={false} />
        <ReviewsTrustBar />
      </div>
    </main>
  );
}
