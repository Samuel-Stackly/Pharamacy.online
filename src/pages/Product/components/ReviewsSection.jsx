import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";
import { Link } from "react-router-dom";



function ReviewsSection() {
    return (
        <div>
            <h2 className="mb-8 text-4xl font-bold text-[#303030]">
                Reviews
            </h2>

            <ReviewForm />

            <div className="mt-8">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}
            </div>

            <Link
                to="/reviews"
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]"
            >
                Show All Reviews
            </Link>
        </div>
    );
}

export default ReviewsSection;