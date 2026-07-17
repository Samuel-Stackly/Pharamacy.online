import { Star } from "lucide-react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import Avatar from "react-avatar";

const comments = [
  {
    id: 1,
    name: "Elena",
    rating: 4,
    date: "January 17, 2020",
    likes: 2,
    dislikes: 0,
    text:
      "I ordered the Amulet knife, made of Damascus steel. Today it was delivered by a transport company. A wonderful knife, although small, it is beautifully made! The blade is sharp, the blade is stitched to the handle without a hitch, the handle is polished and fits into the hand like a glove. And I'm simply delighted with the leather sheath - it's so made, so stylish, so well-made - a sight to behold! Many thanks to the Masters! I recommend this store to everyone!",
    replies: [
      {
        id: 11,
        name: "Vladimir",
        rating: 4,
        date: "January 17, 2020",
        likes: 0,
        dislikes: 4,
        text:
          "Many thanks to the team for their work. Bow and gratitude to the Craftsmen with whom the store works, especially the craftsmen with whom they cooperate. I wish you success and prosperity.",
      },
    ],
  },
  {
    id: 2,
    name: "Vladimir",
    rating: 4,
    date: "January 17, 2020",
    likes: 0,
    dislikes: 4,
    text:
      "Many thanks to the team for their work. Bow and gratitude to the Craftsmen with whom the store works, especially the craftsmen with whom they cooperate. I wish you success and prosperity.",
  },
];

function Comment({ comment, isReply = false }) {
  return (
    <div
      className={
        isReply
          ? "mt-8 rounded-2xl bg-[#F7F9FB] p-8"
          : ""
      }
    >
      <div className="flex items-start gap-5">
        <Avatar
          name={comment.name}
          size="56"
          round
          color="#31D4B5"
          fgColor="#ffffff"
          textSizeRatio={2}
        />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-5">
            <h4 className="text-lg font-semibold text-[#303030]">
              {comment.name}
            </h4>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  className={
                    index < comment.rating
                      ? "fill-[#F6B400] text-[#F6B400]"
                      : "text-[#D9D9D9]"
                  }
                />
              ))}
            </div>

            <span className="text-sm text-[#9B9B9B]">
              {comment.date}
            </span>

            <button className="text-sm font-medium text-[#4F8EF7] hover:underline">
              Reply
            </button>

            <div className="ml-auto flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1 text-[#31D4B5]">
                <FiThumbsUp size={16} />
                <span>{comment.likes}</span>
              </div>

              <div className="flex items-center gap-1 text-[#FF6B6B]">
                <FiThumbsDown size={16} />
                <span>{comment.dislikes}</span>
              </div>
            </div>
          </div>

          <p className="mt-5 leading-8 text-[#666666]">
            {comment.text}
          </p>

          {comment.replies?.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              isReply
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CommentsSection() {
  return (
    <section className="mt-20">
      <h2 className="mb-12 text-4xl font-bold text-[#24325B]">
        Comments
      </h2>

      <div className="space-y-14">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
    </section>
  );
}

export default CommentsSection;