import { Play } from "lucide-react";

import videoImage from "../../../assets/images/blog/blog-video.svg";

function ArticleVideoSection() {
  return (
    <section className="mt-20">
      <h2 className="text-[42px] font-bold text-[#303030]">
        Heading h6
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_520px]">
        <div className="space-y-8">
          <p className="leading-9 text-[#666666]">
            On the other hand, the beginning of daily work to form a position
            ensures a wide range of participation in the formation of
            directions for progressive development.
          </p>

          <p className="leading-9 text-[#666666]">
            It should not be forgotten, however, that the further development
            of various forms of activity contributes to the preparation of new
            proposals.
          </p>

          <p className="leading-9 text-[#666666]">
            Diverse and rich experience, constant quantitative growth and the
            scope of our activity plays an important role in shaping the
            directions of progressive development.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={videoImage}
            alt="Video"
            className="h-full w-full object-cover"
          />

          <button className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <Play
              size={26}
              className="ml-1 text-[#31D4B5]"
              fill="#31D4B5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ArticleVideoSection;