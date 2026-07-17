import ReviewFilters from "./ReviewFilters";

import ReviewCard from "../../Product/components/ReviewCard";
import ReviewForm from "../../Product/components/ReviewForm";
import { reviews } from "../../Product/components/reviewsData";



function ReviewList() {
  return (
    <div>
      <ReviewFilters />

      <div>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}

        {reviews.map((review) => (
          <ReviewCard
            key={`copy-${review.id}`}
            review={review}
          />
        ))}

        {reviews.map((review) => (
          <ReviewCard
            key={`copy2-${review.id}`}
            review={review}
          />
        ))}
      </div>

      <button className="mt-8 w-full rounded-lg bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
        Show More Reviews
      </button>

      <div className="mt-10">
        <ReviewForm />
      </div>
    </div>
  );
}

export default ReviewList;