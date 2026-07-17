import {
  Star,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div className="border-b border-[#ECECEC] py-8">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-[#303030]">
            {review.name}
          </h4>

          <p className="mt-1 text-sm text-[#999]">
            {review.date}
          </p>
        </div>

        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className="fill-[#FFC542] text-[#FFC542]"
            />
          ))}
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-7 text-[#666]">
        {review.text}
      </p>

      <div className="mt-5 flex gap-6 text-[#999]">
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          {review.likes}
        </div>

        <div className="flex items-center gap-1">
          <ThumbsDown size={16} />
          {review.dislikes}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;